import requests
from requests.models import Request
from subscription.form import EmailSignupForm
from news.models import EventSidebarBanner, NewsAdLowerBanner, NewsAdLowerLongBanner, NewsAdSidebarBanner, NewsCategory, NewsNavAdvert, NewsPage
from django.db import models
from django.db.models.fields import TextField

import json

from django.shortcuts import redirect
from django.conf import settings
from django.core.serializers.json import DjangoJSONEncoder

from modelcluster.fields import ParentalKey
from wagtail.admin.edit_handlers import (
    FieldPanel,
    FieldRowPanel,
    InlinePanel,
    MultiFieldPanel,
    PageChooserPanel
)
from wagtail.core.fields import RichTextField
from wagtail.contrib.forms.models import AbstractFormField, AbstractEmailForm, AbstractFormSubmission
from datetime import date
from wagtail.admin.mail import send_mail

# from wagtailcaptcha.models import WagtailCaptchaEmailForm


class FormField(AbstractFormField):
    page = ParentalKey(
        'ContactPage',
        on_delete=models.CASCADE,
        related_name='form_fields',
    )


class ContactPage(AbstractEmailForm):

    template = "news/contact/contact_page.html"
    subpage_types = []
    # parent_page_types = ['home.HomePage']

    # This is the default path.
    # If ignored, Wagtail adds _landing.html to your template name
    landing_page_template = "news/contact/contact_page_landing.html"
    formTypes = (
        ('registration', 'Registration'),
        ('form', 'Form'),
    )

    intro = RichTextField(blank=True)
    type = models.CharField(max_length=255, choices=formTypes,
                            null=True, blank=True, default='full')
    thank_you_text = RichTextField(blank=True)

    thank_you_page = models.ForeignKey(
        'wagtailcore.Page',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
    )

    def render_landing_page(self, request, form_submission=None, *args, **kwargs):
        if self.thank_you_page:
            url = self.thank_you_page.url
            # if a form_submission instance is available, append the id to URL
            # when previewing landing page, there will not be a form_submission instance
            if form_submission:
                url += '?id=%s' % form_submission.id
            return redirect(url, permanent=False)
        # if no thank_you_page is set, render default landing page
        return super().render_landing_page(request, form_submission, *args, **kwargs)

    content_panels = AbstractEmailForm.content_panels + [
        FieldPanel('intro', classname='full'),
        InlinePanel('form_fields', label='Form Fields'),
        FieldPanel('type'),
        FieldPanel('thank_you_text', classname='full'),
        PageChooserPanel('thank_you_page'),
        MultiFieldPanel([
            FieldRowPanel([
                FieldPanel('from_address', classname="col6"),
                FieldPanel('to_address', classname="col6"),
            ]),
            FieldPanel("subject"),
        ], heading="Email Settings"),
    ]

    # def get_submission_class(self):
    #     return CustomFormSubmission

    # def process_form_submission(self, form):
    #     self.get_submission_class().objects.create(
    #         form_data=json.dumps(form.cleaned_data, cls=DjangoJSONEncoder),
    #         page=self,
    #         # user=form.user
    #     )

    def render_email(self, form):
        # Get the original content (string)
        email_content = super().render_email(form)

        # Add a title (not part of original method)
        title = '{}: {}'.format('Form', self.title)

        content = [title, '', email_content, '']

        # Add a link to the form page
        content.append('{}: {}'.format('Submitted Via', self.full_url))

        # Add the date the form was submitted
        submitted_date_str = date.today().strftime('%x')
        content.append('{}: {}'.format('Submitted on', submitted_date_str))

        # Content is joined with a new line to separate each text line
        content = '\n'.join(content)

        return content

    def send_mail(self, form):
        # `self` is the FormPage, `form` is the form's POST data on submit

        # Email addresses are parsed from the FormPage's addresses field
        addresses = [x.strip() for x in self.to_address.split(',')]

        # Subject can be adjusted (adding submitted date), be sure to include the form's defined subject field
        submitted_date_str = date.today().strftime('%x')
        subject = f"{self.subject} - {submitted_date_str}"

        send_mail(subject, self.render_email(form),
                  addresses, self.from_address,)

    def get_context(self, request, *args, **kwargs):
        """Adding custom stuff to our context."""
        context = super().get_context(request, *args, **kwargs)
        posts = NewsPage.objects.live().public()
        context["recent_posts"] = posts
        context["sponsored_content"] = NewsPage.objects.live().filter(categories=19)
        context["press_release"] = NewsPage.objects.live().filter(categories=16)
        context['news_page'] = self
        context['categories'] = NewsCategory.objects.all()
        context['top_ads'] = NewsNavAdvert.objects.latest('id')
        context['middle_ads'] = NewsAdLowerBanner.objects.latest('id')
        context['long_lower_ads'] = NewsAdLowerLongBanner.objects.latest('id')
        context['sidebar_ads'] = NewsAdSidebarBanner.objects.all()
        context['sidebar_events'] = EventSidebarBanner.objects.all()
        context['form_email'] = EmailSignupForm()

        return context

# class CustomFormSubmission(AbstractFormSubmission):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
