
# -*- coding: utf-8 -*-
"""Module where functions for content are executed."""

from plone import api
from Products.Five import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile


class FrontpageView(BrowserView):

    template = ViewPageTemplateFile('templates/frontpage.pt')

    def __call__(self):

        return self.template()

    def grab_teaser(self):
        teasers = context.listFolderContents()

        return teasers

    def teaser_content(self):
        teaser_list = []

        for teaser in self.grab_teaser():
            title = teaser.title()
            text = teaser.description()
            image = teaser.image()

        teaser_dict = {
            # Teaser content vaiables.
            'teaser_title': title,
            'teaser_text': text,
            'teaser_image': image,
        }
        teaser_list.append(teaser_dict)

    return teaser_list
