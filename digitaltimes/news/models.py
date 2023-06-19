from django.db.models import DateTimeField
from django.db.models.functions import Trunc
from subscription.form import EmailSignupForm
from django.db import models
from django.shortcuts import render
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel, MultiFieldPanel, InlinePanel
from wagtail.snippets.edit_handlers import SnippetChooserPanel
from wagtail.core.fields import StreamField
from wagtail.core.models import Page, Orderable, PageManager
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.snippets.models import register_snippet
from modelcluster.fields import ParentalKey, ParentalManyToManyField
from wagtail.contrib.routable_page.models import RoutablePageMixin, route
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import TaggedItemBase
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from wagtailmenus.models import MenuPage
from wagtail.documents.edit_handlers import DocumentChooserPanel
from django.db.models.aggregates import Count
from wagtail.core import hooks
from django.db.models import F

from django import forms
import datetime
from datetime import date, timedelta

from streams import blocks

from schedule import every, repeat, run_pending
import threading
import schedule
import time

# Create your models here.


class NewsPageTag(TaggedItemBase):
    content_object = ParentalKey(
        'NewsPage',
        related_name='tagged_items',
        on_delete=models.CASCADE
    )


class FundingPageTag(TaggedItemBase):
    content_object = ParentalKey(
        'FundingPage',
        related_name='tagged_items',
        on_delete=models.CASCADE
    )

class DTAVideoPageTag(TaggedItemBase):
    content_object = ParentalKey(
        'DTAVideosPage',
        related_name='tagged_items',
        on_delete=models.CASCADE
    )

class NewsIndexPage(RoutablePageMixin, Page):

    custom_title = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        help_text='Overwrites the default title',
    )

    content_panels = Page.content_panels + [
        FieldPanel("custom_title"),
    ]

    def get_context(self, request, *args, **kwargs):
        """Adding custom stuff to our context."""
        context = super().get_context(request, *args, **kwargs)
        posts = NewsPage.objects.live().public()
        start_date = date.today()
        end_date = start_date - timedelta(days = 7)
        context["most_read_posts"] = NewsPage.objects.filter(date__gt=end_date).order_by('blog_views', 'date').live().public()
        context["all_news_post"] = posts
        # context["all_news_post"] = posts.exclude(tags=682)
        context["recent_posts"] = posts
        context["tech_world"] = NewsPage.objects.live().filter(categories=2)
        context["articles"] = NewsPage.objects.live().filter(
            categories=6)
        context["innovations"] = NewsPage.objects.live().filter(
            categories=4)
        # context["exclusives"] = NewsPage.objects.live().filter(categories=4)
        context["sponsored_content"] = NewsPage.objects.live().filter(categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)
        context["news"] = NewsPage.objects.live().filter(categories=1)
        context["entrepreneur"] = NewsPage.objects.live().filter(categories=3)
        context['news_page'] = self
        context['parent'] = self.get_parent().specific
        context['categories'] = NewsCategory.objects.all()
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['middle_ads'] = NewsAdLowerBanner.objects.latest('id')
        context['long_lower_ads'] = NewsAdLowerLongBanner.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['events'] = EventPage.objects.live().public()
        context['dta_videos'] = DTAVideosPage.objects.live().public().order_by('date')
        # context['funding'] = FundingPage.objects.all()
        context["funding"] = NewsPage.objects.live().public().filter(tags__pk__in=['959']).distinct() ##funding code=162 Opportunities code=959
        context['form_email'] = EmailSignupForm()

        return context

    @route(r"^category/(?P<cat_slug>[-\w]*)/$", name="category_view")
    def category_view(self, request, cat_slug):

        context = self.get_context(request)

        try:
            category = NewsCategory.objects.all().get(slug=cat_slug)
            posts = NewsPage.objects.live().public()
        except Exception:
            category = None
        if category is None:

            pass
        catPosts = NewsPage.objects.filter(categories__in=[category]).live().public()
        reversenews = list(reversed(catPosts))

        paginator = Paginator(reversenews, 6)
        page = request.GET.get("page")
        try:
            # If the page exists and the ?page=x is an int
            posts = paginator.page(page)
        except PageNotAnInteger:
            # If the ?page=x is not an int; show the first page
            posts = paginator.page(1)
        except EmptyPage:
            posts = paginator.page(paginator.num_pages)

        context["posts"] = posts
        context["news"] = posts
        context["category"] = NewsCategory.objects.all().get(slug=cat_slug)

        return render(request, "news/cat_posts.html", context)

    def get_sitemap_urls(self, request):
        # Uncomment to have no sitemap for this page
        # return []
        sitemap = super().get_sitemap_urls(request)
        sitemap.append(
            {
                "location": self.full_url,
                "lastmod": (self.last_published_at or self.latest_revision_created_at),
                "priority": 1,
            }
        )
        return sitemap


class NewsPageManager(PageManager):

    def related_posts(self, posts, max_items=5):
        tags = posts.tags.all()

        matches = NewsPage.objects.filter(
            tags__in=tags).live().annotate(Count('title'))
        matches = matches.exclude(pk=posts.pk)

        related = matches.order_by('-title__count')
        return related[:max_items]


class NewsPage(Page):
    """Blog detail page."""

    blog_image = models.ForeignKey(
        "wagtailimages.Image",
        blank=False,
        null=True,
        related_name="+",
        on_delete=models.SET_NULL,
    )
    image_description = models.TextField(
        max_length=500, blank=True, null=True)

    categories = ParentalManyToManyField("news.NewsCategory", blank=False)
    date = models.DateTimeField(
        verbose_name="Post date", default=datetime.datetime.today)
    tags = ClusterTaggableManager(through=NewsPageTag, blank=False)
    blog_views=models.IntegerField(default=0)
    content = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=False
    )
    paragraph_2 = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=False
    )
    description = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=False,
    )

    news_source = models.CharField(max_length=500, null=True, blank=True)

    guest_writer_name = models.CharField(max_length=500, null=True, blank=True)

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            InlinePanel("news_authors", label="Author", min_num=1, max_num=4),
            FieldPanel('news_source'),
            FieldPanel('guest_writer_name'),
        ], heading="Author(s)"),

        MultiFieldPanel([
            FieldPanel("categories", widget=forms.CheckboxSelectMultiple),
            FieldPanel('tags'),
            FieldPanel('date'),
        ], heading="Tags and Categories"),
        ImageChooserPanel("blog_image"),
        FieldPanel('image_description'),
        

        MultiFieldPanel([
            StreamFieldPanel("description"),
            StreamFieldPanel("content"),
            StreamFieldPanel("paragraph_2"),

        ], heading="Post Content"),
    ]

    @hooks.register("before_serve_page")
    def increment_view_count(page, request, serve_args, serve_kwargs):
        if page.specific_class == NewsPage:
            NewsPage.objects.filter(pk=page.pk).update(blog_views=F('blog_views') + 1)

    @property
    def news_page(self):
        return self.get_parent().specific

    def get_context(self, request, *args, **kwargs):
        context = super(NewsPage, self).get_context(request, *args, **kwargs)
        posts = NewsPage.objects.live().public()
        context['categories'] = NewsCategory.objects.all()
        context['news_page'] = self.news_page
        context['post'] = posts
        context["recent_posts"] = NewsPage.objects.live().public()
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context["sponsored_content"] = NewsPage.objects.live().filter(categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)
        context['form_email'] = EmailSignupForm()
        context['videos'] = DTAVideosPage.objects.all()
        context['related_posts'] = NewsPageManager().related_posts(self)

        return context

    def get_sitemap_urls(self, request):
        # Uncomment to have no sitemap for this page
        # return []
        sitemap = super().get_sitemap_urls(request)
        sitemap.append(
            {
                "location": self.full_url,
                "lastmod": (self.last_published_at or self.latest_revision_created_at),
                "priority": 1,
            }
        )
        return sitemap


class NewsAuthor(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500, blank=False, null=True)
    email = models.EmailField(blank=True, null=True)
    image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    panels = [
        MultiFieldPanel([
            FieldPanel("name"),
            FieldPanel("description"),
            ImageChooserPanel("image")
        ], heading="Name & Image"),

        MultiFieldPanel([
            FieldPanel("email")
        ], heading="Email")
    ]

    def __str__(self):
        return self.name

register_snippet(NewsAuthor)


class NewsAuthorOrderable(Orderable):

    page = ParentalKey("news.NewsPage", related_name="news_authors")
    author = models.ForeignKey(
        "news.NewsAuthor",
        on_delete=models.CASCADE, null=True, blank=True,
    )

    panels = [
        SnippetChooserPanel("author")
    ]


class NewsAdLowerBanner(models.Model):
    name = models.CharField(max_length=100)
    ad_url = models.URLField(blank=True, null=True)
    ad_company_email = models.EmailField(blank=True, null=True)
    ad_image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    panels = [
        MultiFieldPanel([
            FieldPanel("name"),
            FieldPanel("ad_url"),
            ImageChooserPanel("ad_image")
        ], heading="Name & Image"),

        MultiFieldPanel([
            FieldPanel("ad_company_email")
        ], heading="Email")
    ]

    class Meta:
        verbose_name = 'News Ad Middle Banner'
        verbose_name_plural = 'News Ad Middle Banners'
        ordering = ['name']

    def __str__(self):
        return self.name

register_snippet(NewsAdLowerBanner)


class NewsAdLowerLongBanner(models.Model):
    name = models.CharField(max_length=100)
    ad_url = models.URLField(blank=True, null=True)
    ad_company_email = models.EmailField(blank=True, null=True)
    ad_image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    panels = [
        MultiFieldPanel([
            FieldPanel("name"),
            FieldPanel("ad_url"),
            ImageChooserPanel("ad_image")
        ], heading="Name & Image"),

        MultiFieldPanel([
            FieldPanel("ad_company_email")
        ], heading="Email")
    ]

    class Meta:
        verbose_name = 'News Ad Long Lower Banner'
        verbose_name_plural = 'News Ad Long Lower Banners'
        ordering = ['name']

    def __str__(self):
        return self.name

register_snippet(NewsAdLowerLongBanner)


class EventSidebarBanner(models.Model):
    name = models.CharField(max_length=100)
    event_url = models.URLField(blank=True, null=True)
    event_company_email = models.EmailField(blank=True, null=True)
    event_image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    panels = [
        MultiFieldPanel([
            FieldPanel("name"),
            FieldPanel("event_url"),
            ImageChooserPanel("event_image")
        ], heading="Name & Image"),

        MultiFieldPanel([
            FieldPanel("event_company_email")
        ], heading="Email")
    ]

    class Meta:
        verbose_name = 'Upcoming Events Sidebar Banner'
        verbose_name_plural = 'Upcoming Events Sidebar Banners'
        ordering = ['name']

    def __str__(self):
        return self.name

register_snippet(EventSidebarBanner)


class NewsAdSidebarBanner(models.Model):
    name = models.CharField(max_length=100)
    ad_url = models.URLField(blank=True, null=True)
    ad_company_email = models.EmailField(blank=True, null=True)
    ad_image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    panels = [
        MultiFieldPanel([
            FieldPanel("name"),
            FieldPanel("ad_url"),
            ImageChooserPanel("ad_image")
        ], heading="Name & Image"),

        MultiFieldPanel([
            FieldPanel("ad_company_email")
        ], heading="Email")
    ]

    class Meta:
        verbose_name = 'News Ad Sidebar Banner'
        verbose_name_plural = 'News Ad Sidebar Banners'
        ordering = ['name']

    def __str__(self):
        return self.name

register_snippet(NewsAdSidebarBanner)


class NewsNavAdvert(models.Model):
    name = models.CharField(max_length=100)
    ad_url = models.URLField(blank=True, null=True)
    ad_company_email = models.EmailField(blank=True, null=True)
    ad_image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    panels = [
        MultiFieldPanel([
            FieldPanel("name"),
            FieldPanel("ad_url"),
            ImageChooserPanel("ad_image")
        ], heading="Name & Image"),

        MultiFieldPanel([
            FieldPanel("ad_company_email")
        ], heading="Email")
    ]

    class Meta:
        verbose_name = 'News Page Top Advert'
        verbose_name_plural = 'News Page Top Adverts'
        ordering = ['name']

    def __str__(self):
        return self.name

register_snippet(NewsNavAdvert)


class NewsCategory(models.Model):

    name = models.CharField(max_length=255)
    slug = models.SlugField(
        verbose_name="slug",
        allow_unicode=True,
        unique=True,
        max_length=255,
        help_text="A slug to identify posts by this category"
    )

    panels = [
        FieldPanel("name"),
        FieldPanel("slug")
    ]

    class Meta:
        verbose_name = 'News Category'
        verbose_name_plural = 'News Categories'
        ordering = ['name']

    def __str__(self):
        return self.name

register_snippet(NewsCategory)

class SocialMediaStats(models.Model):
    name = models.CharField(max_length=100)
    update_date = models.DateTimeField(default=datetime.datetime.today)
    twitter = models.CharField(max_length=15)
    instagram = models.CharField(max_length=15)
    facebook = models.CharField(max_length=15)
    
    panels = [
            FieldPanel("name"),
            FieldPanel("update_date"),
            FieldPanel("facebook"),
            FieldPanel("instagram"),
            FieldPanel("twitter"),
    ]

    class Meta:
        verbose_name = 'Social Media Statistic'
        verbose_name_plural = 'Social Media Statistics'
        ordering = ['name', 'update_date']

    def __str__(self):
        return self.name

register_snippet(SocialMediaStats)


class NewsTagIndexPage(Page):
    @property
    def news_page(self):
        return self.get_parent().specific

    def get_context(self, request):

        # Filter by tag
        tag = request.GET.get('tag')
        newspages = NewsPage.objects.filter(tags__name=tag).live().public()

        # Update template context
        context = super().get_context(request)
        tposts = NewsPage.objects.live().public()

        reversenews = list(reversed(newspages))
        paginator = Paginator(reversenews, 6)
        page = request.GET.get("page")
        try:
            # If the page exists and the ?page=x is an int
            posts = paginator.page(page)
        except PageNotAnInteger:
            # If the ?page=x is not an int; show the first page
            posts = paginator.page(1)
        except EmptyPage:
            posts = paginator.page(paginator.num_pages)

        context["tag_posts"] = posts
        context['categories'] = NewsCategory.objects.all()
        context['news_page'] = self.news_page
        context["recent_posts"] = tposts
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['form_email'] = EmailSignupForm()
        context["sponsored_content"] = NewsPage.objects.live().filter(categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)

        return context


class FeaturedEvents(MenuPage):
    @property
    def news_page(self):
        return self.get_parent().specific

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        newsposts = NewsPage.objects.filter(categories=16).live().public()
        reversenews = list(reversed(newsposts))
        posts = NewsPage.objects.live().public()
        news = NewsPage.objects.live().public()
        today = datetime.datetime.now()
        twoHoursAfter = datetime.datetime.now() + datetime.timedelta(minutes=140)
        paginator = Paginator(reversenews, 10)
        page = request.GET.get("page")
        try:
            # If the page exists and the ?page=x is an int
            news = paginator.page(page)
        except PageNotAnInteger:
            # If the ?page=x is not an int; show the first page
            news = paginator.page(1)
        except EmptyPage:
            news = paginator.page(paginator.num_pages)

        context["news"] = news
        context["todayDate"] = today
        context["ongoingDate"] = twoHoursAfter
        context['news_page'] = self.news_page
        context['categories'] = NewsCategory.objects.all()
        context["recent_posts"] = posts
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['form_email'] = EmailSignupForm()
        context["sponsored_content"] = NewsPage.objects.live().filter(categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)
        context['events'] = EventPage.objects.order_by(
            'arrange_event_start_date', 'arrange_event_end_date', '-first_published_at').live().public()
        context['upcoming'] = EventPage.objects.filter(event_type="Upcoming Event").order_by(
            'arrange_event_start_date', 'arrange_event_end_date', '-first_published_at').live().public()
        context['partnered'] = EventPage.objects.filter(event_type="Partner Event").order_by(
            'arrange_event_start_date', 'arrange_event_end_date', '-first_published_at').live().public()
        return context

    def get_sitemap_urls(self, request):
        # Uncomment to have no sitemap for this page
        # return []
        sitemap = super().get_sitemap_urls(request)
        sitemap.append(
            {
                "location": self.full_url,
                "lastmod": (self.last_published_at or self.latest_revision_created_at),
                "priority": 1,
            }
        )
        return sitemap


class EventPage(Page):
    event_name = models.CharField(max_length=500, null=False, blank=False)
    blog_views=models.IntegerField(default=0)
    summary = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=True
    )
    description = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=False
    )
    event_display_page_image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )
    registration_url = models.CharField(max_length=500, null=True, blank=True, default='#')
    event_url = models.URLField(null=True, blank=True)
    location = models.CharField(max_length=500, null=False, blank=False)
    location_url = models.URLField(null=True, blank=True, default='#')
    email = models.EmailField(null=True, blank=True)
    overview_title = models.CharField(max_length=500, null=True, blank=True)
    programme_outline = StreamField(
        [
            ("full_richtext", blocks.RichtextBlock())
        ],
        null=True,
        blank=True
    )
    arrange_event_start_date = models.DateTimeField(
        default=datetime.datetime.today, null=True, blank=True)
    arrange_event_end_date = models.DateTimeField(
        default=datetime.datetime.today, null=True, blank=True)

    YEAR_CHOICES = [(y, y) for y in range(2010, datetime.date.today().year+1)]
    # MONTH_CHOICE = [(m,m) for m in range(1,13)]
    MONTH_CHOICE = (
        ('January', 'January'),
        ('February', 'February'),
        ('March', 'March'),
        ('April', 'April'),
        ('May', 'May'),
        ('June', 'June'),
        ('July', 'July'),
        ('August', 'August'),
        ('September', 'September'),
        ('October', 'October'),
        ('November', 'November'),
        ('December', 'December'),
    )
    DAY_CHOICE = [(d, d) for d in range(1, 32)]

    event_start_year = models.IntegerField(choices=YEAR_CHOICES,
                                           default=datetime.datetime.now().year,)
    event_start_month = models.CharField(max_length=20, choices=MONTH_CHOICE,
                                         default=datetime.datetime.now().month,)
    event_start_day = models.IntegerField(choices=DAY_CHOICE,
                                          default=datetime.datetime.now().day,)
    event_start_time = models.TimeField(default='00:00')
    event_end_year = models.IntegerField(choices=YEAR_CHOICES,
                                         default=datetime.datetime.now().year, null=True, blank=True)
    event_end_month = models.CharField(max_length=20, choices=MONTH_CHOICE,
                                       default=datetime.datetime.now().month, null=True, blank=True)
    event_end_day = models.IntegerField(choices=DAY_CHOICE,
                                        default=datetime.datetime.now().day,  null=True, blank=True)
    event_end_time = models.TimeField(default='00:00',  null=True, blank=True)
    event_document = models.ForeignKey(
        'wagtaildocs.Document',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    event_image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )
    youtube_title = models.CharField(null=True, blank=True, max_length=500)
    youtube_description = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=True
    )
    youtube_title_1 = models.CharField(null=True, blank=True, max_length=500)
    youtube_url_1 = models.URLField(null=True, blank=True)
    youtube_title_2 = models.CharField(null=True, blank=True, max_length=500)
    youtube_url_2 = models.URLField(null=True, blank=True)
    youtube_title_3 = models.CharField(null=True, blank=True, max_length=500)
    youtube_url_3 = models.URLField(null=True, blank=True)
    youtube_title_4 = models.CharField(null=True, blank=True, max_length=500)
    youtube_url_4 = models.URLField(null=True, blank=True)
    eventTypes = (
        ('Partner Event', 'Partner Event'),
        ('Upcoming Event', 'Upcoming Event'),
    )
    event_type = models.CharField(
        max_length=255, choices=eventTypes, null=True, blank=True, default='full')

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldPanel("event_name"),
            StreamFieldPanel("description"),
            StreamFieldPanel("summary"),
            FieldPanel('event_type'),
            FieldPanel("location"),
            FieldPanel("location_url"),
            FieldPanel("email"),
            FieldPanel("event_url"),
            FieldPanel("registration_url"),
            ImageChooserPanel("event_image"),
            DocumentChooserPanel('event_document'),
            ImageChooserPanel("event_display_page_image"),
        ], heading="Event"),

        MultiFieldPanel([
            FieldPanel('arrange_event_start_date'),
            FieldPanel('arrange_event_end_date'),
            FieldPanel("event_start_year"),
            FieldPanel("event_start_month"),
            FieldPanel("event_start_day"),
            FieldPanel("event_start_time"),
            FieldPanel("event_end_year"),
            FieldPanel("event_end_month"),
            FieldPanel("event_end_day"),
            FieldPanel("event_end_time"),
        ], heading="Schedule Date"),

        MultiFieldPanel([
            FieldPanel("overview_title"),
            StreamFieldPanel("programme_outline"),
        ], heading="Programme Outline"),

        MultiFieldPanel([
            FieldPanel("youtube_title"),
            StreamFieldPanel("youtube_description"),
            FieldPanel("youtube_title_1"),
            FieldPanel("youtube_url_1"),
            FieldPanel("youtube_title_2"),
            FieldPanel("youtube_url_2"),
            FieldPanel("youtube_title_3"),
            FieldPanel("youtube_url_3"),
            FieldPanel("youtube_title_4"),
            FieldPanel("youtube_url_4"),
        ], heading="Youtube Link", classname="collapsible collapsed"),

    ]

    @hooks.register("before_serve_page")
    def increment_view_count(page, request, serve_args, serve_kwargs):
        if page.specific_class == EventPage:
            EventPage.objects.filter(pk=page.pk).update(blog_views=F('blog_views') + 1)

    def news_page(self):
        return self.get_parent().specific

    def get_context(self, request, *args, **kwargs):
        """Adding custom stuff to our context."""
        context = super().get_context(request, *args, **kwargs)
        posts = NewsPage.objects.live().public()
        today = datetime.datetime.now()
        twoHoursAfter = datetime.datetime.now() + datetime.timedelta(minutes=140)
        context["recent_posts"] = posts
        context["todayDate"] = today
        context["ongoingDate"] = twoHoursAfter
        context["featured_events"] = NewsPage.objects.live().filter(
            categories=16)
        context['news_page'] = self
        context['parent'] = self.get_parent().specific
        context['categories'] = NewsCategory.objects.all()
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['middle_ads'] = NewsAdLowerBanner.objects.latest('id')
        context['long_lower_ads'] = NewsAdLowerLongBanner.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['form_email'] = EmailSignupForm()
        context["sponsored_content"] = NewsPage.objects.live().filter(categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)
        context['events'] = EventPage.objects.all()

        return context

    def get_sitemap_urls(self, request):
        # Uncomment to have no sitemap for this page
        # return []
        sitemap = super().get_sitemap_urls(request)
        sitemap.append(
            {
                "location": self.full_url,
                "lastmod": (self.last_published_at or self.latest_revision_created_at),
                "priority": 1,
            }
        )
        return sitemap


class Funding(MenuPage):
    @property
    def news_page(self):
        return self.get_parent().specific

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        newsposts = FundingPage.objects.all().filter(tags=162)
        reversenews = list(reversed(newsposts))
        posts = NewsPage.objects.live().public()
        news = NewsPage.objects.live().public()

        paginator = Paginator(reversenews, 10)
        page = request.GET.get("page")
        try:
            # If the page exists and the ?page=x is an int
            news = paginator.page(page)
        except PageNotAnInteger:
            # If the ?page=x is not an int; show the first page
            news = paginator.page(1)
        except EmptyPage:
            news = paginator.page(paginator.num_pages)

        context["news"] = news
        context['news_page'] = self.news_page
        context['categories'] = NewsCategory.objects.all()
        context["recent_posts"] = posts
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['form_email'] = EmailSignupForm()
        context["sponsored_content"] = NewsPage.objects.live().filter(
            categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)
        context["funding"] = NewsPage.objects.live().public().filter(tags__pk__in=['959']).distinct() #funding code=162 Opportunities code=959
        # context['funding'] = FundingPage.objects.order_by(Trunc(
        #     'funding_start_date', 'funding_end_date', output_field=DateTimeField()).desc(), 'date').live().public()


        return context

    def get_sitemap_urls(self, request):
        # Uncomment to have no sitemap for this page
        # return []
        sitemap = super().get_sitemap_urls(request)
        sitemap.append(
            {
                "location": self.full_url,
                "lastmod": (self.last_published_at or self.latest_revision_created_at),
                "priority": 1,
            }
        )
        return sitemap


class FundingPageManager(PageManager):

    def related_tag_posts(self, posts, max_items=5):
        tags = posts.tags.all()

        matches = FundingPage.objects.filter(
            tags__in=tags).live().annotate(Count('title'))
        matches = matches.exclude(pk=posts.pk)

        related = matches.order_by('-title__count')
        return related[:max_items]


class FundingPage(Page):
    blog_image = models.ForeignKey(
        "wagtailimages.Image",
        blank=False,
        null=True,
        related_name="+",
        on_delete=models.SET_NULL,
    )

    date = models.DateTimeField(
        verbose_name="Post date", default=datetime.datetime.today)
    tags = ClusterTaggableManager(through=FundingPageTag, blank=False)
    blog_views=models.IntegerField(default=0)
    article_source = models.CharField(max_length=500, null=True, blank=True)

    funding_url = models.URLField(null=True, blank=True)
    funding_start_date = models.DateTimeField(
        default=datetime.datetime.today, null=True, blank=True)
    funding_end_date = models.DateTimeField(
        default=datetime.datetime.today, null=True, blank=True)
    funding_article_url = models.URLField(null=True, blank=True)

    content = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=False
    )
    paragraph_2 = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=False
    )
    description = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=False
    )

    content_panels = Page.content_panels + [

        MultiFieldPanel([
            FieldPanel('tags'),
            FieldPanel('date'),
        ]),
        ImageChooserPanel("blog_image"),
        FieldPanel('article_source'),
        StreamFieldPanel("description"),

        MultiFieldPanel([
            StreamFieldPanel("content"),
            StreamFieldPanel("paragraph_2"),

        ], heading="Content"),

        MultiFieldPanel([
            FieldPanel("funding_url"),
            FieldPanel('funding_start_date'),
            FieldPanel('funding_end_date'),
            FieldPanel("funding_article_url"),
        ], heading="Funding", classname="collapsible collapsed")
    ]

    @hooks.register("before_serve_page")
    def increment_view_count(page, request, serve_args, serve_kwargs):
        if page.specific_class == FundingPage:
            FundingPage.objects.filter(pk=page.pk).update(blog_views=F('blog_views') + 1)

    @property
    def news_page(self):
        return self.get_parent().specific

    def get_context(self, request, *args, **kwargs):
        """Adding custom stuff to our context."""
        context = super().get_context(request, *args, **kwargs)
        posts = NewsPage.objects.live().public()
        context["recent_posts"] = posts
        context["featured_events"] = NewsPage.objects.live().filter(
            categories=16)
        context['news_page'] = self
        context['parent'] = self.get_parent().specific
        context['categories'] = NewsCategory.objects.all()
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['middle_ads'] = NewsAdLowerBanner.objects.latest('id')
        context['long_lower_ads'] = NewsAdLowerLongBanner.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['form_email'] = EmailSignupForm()
        context["sponsored_content"] = NewsPage.objects.live().filter(
            categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)
        context['funding'] = FundingPage.objects.all()
        context['related_posts'] = FundingPageManager().related_tag_posts(self)

        return context

    def get_sitemap_urls(self, request):
        # Uncomment to have no sitemap for this page
        # return []
        sitemap = super().get_sitemap_urls(request)
        sitemap.append(
            {
                "location": self.full_url,
                "lastmod": (self.last_published_at or self.latest_revision_created_at),
                "priority": 1,
            }
        )
        return sitemap

class DTAVideos(MenuPage):
    @property
    def news_page(self):
        return self.get_parent().specific
    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        newsposts = NewsPage.objects.filter(categories = 16).live().public()
        reversenews = list(reversed(newsposts))
        posts = NewsPage.objects.live().public()
        news = NewsPage.objects.live().public()
        videos = DTAVideosPage.objects.live().public().order_by('date')

        paginator = Paginator(reversenews, 10)
        page = request.GET.get("page")
        try:
            # If the page exists and the ?page=x is an int
            news = paginator.page(page)
        except PageNotAnInteger:
            # If the ?page=x is not an int; show the first page
            news = paginator.page(1)
        except EmptyPage:
            news = paginator.page(paginator.num_pages)

        context['videos'] = videos
        context['post'] = posts
        context["news"] = news
        context['news_page'] = self.news_page
        context['categories'] = NewsCategory.objects.all()
        context["recent_posts"] = NewsPage.objects.live().public()
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        # context['sidebar_ads'] = NewsAdSidebarBanner.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['form_email'] = EmailSignupForm()
        context["sponsored_content"] = NewsPage.objects.live().filter(
            categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)

        return context

class DTAVideosPage(Page):
    """Video detail page."""
    # video = models.FileField(
    #     blank=True,
    #     null=True)

    youtube_url = models.URLField(
        blank=False,
        null=True)

    video_thumbnail = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )
    tags = ClusterTaggableManager(through=DTAVideoPageTag, blank=True)
    date = models.DateTimeField(
        verbose_name="Post date", default=datetime.datetime.today)
    blog_views=models.IntegerField(default=0)
    description = StreamField(
        [

            ("full_richtext", blocks.RichtextBlock())

        ],
        null=True,
        blank=False
    )

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            # FieldPanel('video'),
            FieldPanel('youtube_url'),
            FieldPanel('date'),
            FieldPanel('tags'),
        ]),
        ImageChooserPanel("video_thumbnail"),
        StreamFieldPanel("description"),
    ]

    @hooks.register("before_serve_page")
    def increment_view_count(page, request, serve_args, serve_kwargs):
        if page.specific_class == DTAVideosPage:
            DTAVideosPage.objects.filter(pk=page.pk).update(blog_views=F('blog_views') + 1)

    def video_page(self):
        return self.get_parent().specific

    def news_page(self):
        return self.get_parent().specific

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        videos = DTAVideosPage.objects.live().public().order_by('date')
        posts = NewsPage.objects.live().public()

        context['categories'] = NewsCategory.objects.all()
        context['video_page'] = self.video_page
        context['news_page'] = self.news_page
        context['post'] = posts
        context['videos'] = videos
        context["recent_posts"] = NewsPage.objects.live().public()
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        # context['sidebar_ads'] = NewsAdSidebarBanner.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['form_email'] = EmailSignupForm()
        context["sponsored_content"] = NewsPage.objects.live().filter(
            categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)

        return context

    def get_sitemap_urls(self, request):
        # Uncomment to have no sitemap for this page
        # return []
        sitemap = super().get_sitemap_urls(request)
        sitemap.append(
            {
                "location": self.full_url,
                "lastmod": (self.last_published_at or self.latest_revision_created_at),
                "priority": 0.5,
            }
        )
        return sitemap

class ServicePage(MenuPage):
    @property
    def news_page(self):
        return self.get_parent().specific

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        newsposts = NewsPage.objects.all().filter(categories=9)
        reversenews = list(reversed(newsposts))
        posts = NewsPage.objects.live().public()

        paginator = Paginator(reversenews, 10)
        page = request.GET.get("page")
        try:
            # If the page exists and the ?page=x is an int
            news = paginator.page(page)
        except PageNotAnInteger:
            # If the ?page=x is not an int; show the first page
            news = paginator.page(1)
        except EmptyPage:
            news = paginator.page(paginator.num_pages)

        context["news"] = news
        context['news_page'] = self.news_page
        context['categories'] = NewsCategory.objects.all()
        context["recent_posts"] = posts
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['social_stats'] = SocialMediaStats.objects.all()
        context['form_email'] = EmailSignupForm()
        context["sponsored_content"] = NewsPage.objects.live().filter(categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)

        return context

class Services(models.Model):

    name = models.CharField(max_length=255)

    panels = [
        FieldPanel("name"),
        FieldPanel("slug")
    ]

    class Meta:
        verbose_name = 'Our Service'
        verbose_name_plural = 'Our Services'
        ordering = ['name']

    def __str__(self):
        return self.name

register_snippet(Services)


## Schedule Task For Database Blog View
def run_continuously(interval=1):
    cease_continuous_run = threading.Event()
    class ScheduleThread(threading.Thread):
        @classmethod
        def run(cls):
            while not cease_continuous_run.is_set():
                schedule.run_pending()
                time.sleep(interval)              
    continuous_thread = ScheduleThread()
    continuous_thread.start()
    return cease_continuous_run

def background_job():
    now =datetime.datetime.now()
    start_date = date.today()
    end_date = start_date - timedelta(days = 7)
    NewsPage.objects.filter(date__gt=end_date).update(blog_views = 0)
    print(now)
    print('Scheduled task has been completed.')

schedule.every().day.at("00:01").do(background_job)
time.sleep(10)
stop_run_continuously = run_continuously()
