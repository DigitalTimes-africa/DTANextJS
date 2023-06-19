from django.db import models
from modelcluster.fields import ParentalKey, ParentalManyToManyField
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import TaggedItemBase
from wagtail.admin.panels import FieldPanel, MultiFieldPanel, InlinePanel
from wagtail.fields import StreamField
from wagtail.models import Page, Orderable
from wagtail.contrib.routable_page.models import RoutablePageMixin, route
from wagtail.snippets.models import register_snippet
# from wagtail.images.blocks import ImageChooserBlock
import datetime
from django import forms

from streams import blocks
from schedule import every, repeat, run_pending
import threading
import schedule
import time


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

    categories = ParentalManyToManyField("home.NewsCategory", blank=False)
    date = models.DateTimeField(
        verbose_name="Post date", default=datetime.datetime.today)
    blog_views = models.IntegerField(default=0)
    content = StreamField(
        [
            ("full_richtext", blocks.RichtextBlock()),
        ],
        null=True,
        blank=False,
        help_text="Content of the news",
        use_json_field=True,
    )
    paragraph_2 = StreamField(
        [
            ("full_richtext", blocks.RichtextBlock()),
        ],
        null=True,
        blank=False,
        help_text="Second paragraph of the news",
        use_json_field=True,
    )
    description = StreamField(
        [
            ("full_richtext", blocks.RichtextBlock()),
        ],
        null=True,
        blank=False,
        help_text="Description of the news",
        use_json_field=True,
    )

    news_source = models.CharField(max_length=500, null=True, blank=True)
    guest_writer_name = models.CharField(max_length=500, null=True, blank=True)

    content_panels = Page.content_panels + [
        MultiFieldPanel(
            [
                # FieldPanel("categories", widget=forms.CheckboxSelectMultiple),
                # FieldPanel('tags'),
                FieldPanel('date'),
            ],
            heading="Tags and Categories",
        ),
        # ImageChooserBlock("blog_image"),
        FieldPanel('image_description'),
        MultiFieldPanel(
            [
                FieldPanel("description"),
                FieldPanel("content"),
                FieldPanel("paragraph_2"),
            ],
            heading="Post Content",
        ),
        MultiFieldPanel(
            [
                FieldPanel('news_source'),
                FieldPanel('guest_writer_name'),
            ],
            heading="Author(s)",
        ),
    ]

class NewsAuthor(Page):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500, blank=False, null=True)
    email = models.EmailField(blank=True, null=True)
    image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+",
    )

    content_panels = Page.content_panels + [
        MultiFieldPanel(
            [
                FieldPanel("name"),
                FieldPanel("description"),
                # ImageChooserBlock("image"),
            ],
            heading="Name & Image",
        ),
        MultiFieldPanel(
                   [
            FieldPanel("email"),
        ],
        heading="Contact Information",
    ),
]
    
@register_snippet
class NewsCategory(models.Model):
    """Snippet for news categories."""

    name = models.CharField(max_length=255)
    slug = models.SlugField(
        verbose_name="slug",
        allow_unicode=False,
        max_length=255,
        help_text="Enter the category slug (e.g. 'sports-news')",
    )

    panels = [
        FieldPanel("name"),
        FieldPanel("slug"),
    ]

    def __str__(self):
        return self.name


class NewsPageTag(TaggedItemBase):
    """Through model for news page tags."""

    content_object = ParentalKey(
        to='home.NewsPage',
        on_delete=models.CASCADE,
        related_name='news_index_page_tags',
    )


class NewsTag(TaggedItemBase):
    """Through model for news tags."""

    content_object = ParentalKey(
        to='home.NewsIndexPage',
        on_delete=models.CASCADE,
        related_name='news_index_page_tags',
    )


class NewsIndexPageTag(TaggedItemBase):
    """Through model for news index page tags."""

    content_object = ParentalKey(
        to='home.NewsIndexPage',
        on_delete=models.CASCADE,
        related_name='tagged_items',
    )


class NewsTagIndexPage(Page):
    """Index page for news tags."""

    subpage_types = ['home.NewsPage']
    parent_page_types = ['home.NewsIndexPage']

    def get_context(self, request):
        # Get news pages that are tagged with this tag
        news_pages = NewsPage.objects.live().filter(
            tags__slug=self.slug
        ).order_by('-date')

        # Update template context
        context = super().get_context(request)
        context['news_pages'] = news_pages
        return context

    content_panels = Page.content_panels + [
        FieldPanel('title', classname="full title"),
    ]


class NewsAuthorIndexPage(Page):
    """Index page for news authors."""

    subpage_types = ['home.NewsAuthor']
    parent_page_types = ['home.NewsIndexPage']

    def get_context(self, request):
        # Get all news authors
        authors = NewsAuthor.objects.all()

        # Update template context
        context = super().get_context(request)
        context['authors'] = authors
        return context

    content_panels = Page.content_panels + [
        FieldPanel('title', classname="full title"),
    ]

