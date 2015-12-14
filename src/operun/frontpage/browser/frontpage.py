
# -*- coding: utf-8 -*-
"""Module where functions for content are executed."""

from Products.Five import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

from plone import api


class FrontpageView(BrowserView):

    template = ViewPageTemplateFile('templates/frontpage.pt')

    def __call__(self):
        """
        call method of the view
        """
        return self.template()

    def get_js_vars(self):
        """
        return js code with vars from plone
        """
        #registry = getUtility(IRegistry)
        #settings = registry.forInterface(IAllgeierSettings)
        autoscroll = 'var autoscroll = %s;' % '10000'
        animation = 'var animation = "%s";' % 'scroll'

        vars = autoscroll + animation

        return vars

    def get_teaser(self):
        """
        get items from folder contets
        """
        items = self.context.listFolderContents(contentFilter={'portal_type':'Teaser'})

        return items

    def teasers(self):
        """
        return dict with values to the template
        """
        teasers = []

        for teaser in self.get_teaser():
            title = teaser.title
            description = teaser.description
            url = teaser.url
            tag = None

            if teaser.image:
                images_view = api.content.get_view('images', teaser, self.request)  # noqa
                tag = images_view.tag('image', width=1200, height=514, direction='down')  # noqa

            data = {'title': title,
                    'description': description,
                    'image': tag,
                    'url': url}

            teasers.append(data)

        return teasers
