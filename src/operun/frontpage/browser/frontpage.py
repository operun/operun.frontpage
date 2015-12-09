
# -*- coding: utf-8 -*-
"""Module where functions for content are executed."""

from Products.Five import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

from plone import api


class FrontpageView(BrowserView):

    template = ViewPageTemplateFile('templates/frontpage.pt')

    def __call__(self):
        self.teaser_loader = self.teaser_content()

        return self.template()

    def grab_teaser(self):
        teasers = self.context.listFolderContents()

        return teasers

    def teaser_content(self):
        teaser_list = []

        for teaser in self.grab_teaser():
            title = teaser.title
            text = teaser.description

            if teaser.image:
                images_view = api.content.get_view('images', teaser, self.request)  # noqa
                tag = images_view.tag('image', width=800, height=200, direction='down')  # noqa

            teaser_dict = {
                # Teaser content vaiables.
                'teaser_title': title,
                'teaser_text': text,
                'teaser_image': tag,
            }
            teaser_list.append(teaser_dict)

        return teaser_list
