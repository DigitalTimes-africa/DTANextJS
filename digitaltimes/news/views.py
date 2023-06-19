from django.shortcuts import render
import os

from django.http import HttpResponse
from django.views.generic import TemplateView
# Create your views here.


env = os.environ.copy()


class RobotsView(TemplateView):

    content_type = 'text/plain'

    def get_template_names(self):
        return 'robots.txt'

class AdsView(TemplateView):

    content_type = 'text/plain'

    def get_template_names(self):
        return 'ads.txt'

