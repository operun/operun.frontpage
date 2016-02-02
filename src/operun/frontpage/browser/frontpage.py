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

    def crop(self, text, count):
        """
        Crop given text to given count.
        """
        cropped_text = ' '.join((text[0:count].strip()).split(' ')[:-1])

        strips = ['.', ',', ':', ';']
        for s in strips:
            cropped_text = cropped_text.strip(s)

        if len(text) > count:
            return cropped_text + u'…'
        else:
            return text

    def get_js_vars(self):
        """
        Return CarouFredSel variables to template.
        """
        animation = self.context.carousel_animation
        if animation:
            animation = 'var animation = "%s";' % animation
        else:
            animation = 'var animation = "none";'

        autoscroll = self.context.carousel_autoscroll
        if autoscroll:
            autoscroll = 'var autoscroll = %s;' % autoscroll
        else:
            autoscroll = 'var autoscroll = %s;' % '5000'

        return autoscroll + animation

    def get_tag(self, context, item):
        """
        Return image tag.
        """
        images_view = api.content.get_view('images', context, self.request)  # noqa
        tag = images_view.tag(item, height=165, width=380, direction='down')  # noqa

        return tag

    def get_news(self):
        """
        Get news items from the catalog and return its objects.
        """
        brains = api.content.find(portal_type='News Item',
                                  review_state='published',
                                  sort_on='Date',
                                  sort_order='reverse')

        items = []

        for item in brains:
            obj = item.getObject()
            title = obj.title
            description = obj.description
            url = obj.absolute_url()

            if obj.image:
                tag = self.get_tag(obj, 'image')
            elif self.context.default_image:
                tag = self.get_tag(self.context, 'default_image')
            else:
                tag = None

            data = {'title': self.crop(title, 65),
                    'description': self.crop(description, 265),
                    'image': tag,
                    'url': url,
                    }

            items.append(data)

        limit = self.context.limit_news
        if limit:
            if len(items) > limit:
                return items[:limit]
            else:
                return items
        else:
            return items

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
                tag = images_view.tag('image', height=514, width=1200, direction='down')  # noqa

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
