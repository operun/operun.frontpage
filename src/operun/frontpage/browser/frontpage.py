# -*- coding: utf-8 -*-

from Products.Five import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from plone import api


class FrontpageView(BrowserView):

    template = ViewPageTemplateFile('templates/frontpage.pt')

    def __call__(self):
        """
        Call template.
        """

        return self.template()

    def get_js_vars(self):
        """
        Return CarouFredSel variables to template.
        """
        autoscroll = 'var autoscroll = %s;' % '8000'
        animation = 'var animation = "%s";' % 'scroll'
        vars = autoscroll + animation

        return vars

    def get_news(self):
        """
        Get news items from the catalog and return its objects.
        """
        brains = api.content.find(portal_type='News Item')

        items = []
        for item in brains:
            obj = item.getObject()
            title = obj.title
            description = obj.description
            url = obj.absolute_url()

            if obj.image:
                images_view = api.content.get_view('images', obj, self.request)  # noqa
                tag = images_view.tag('image', width=360, height=180, direction='down')  # noqa

            data = {'title': title,
                    'description': description,
                    'image': tag,
                    'url': url,
                    }

            items.append(data)

        return items[:3]

    def get_teaser(self):
        """
        Get folder contents from container.
        """
        items = self.context.listFolderContents(
            contentFilter={'portal_type': 'Teaser'})

        return items

    def teasers(self):
        """
        Return dictionary values to template.
        """
        dictionary = []

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
                    'url': url,
                    }

            dictionary.append(data)

        if self.context.show_carousel:
            return dictionary
        else:
            return None
