# -*- coding: utf-8 -*-

from DateTime import DateTime
from plone import api
from Products.Five import BrowserView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from zope.component import getMultiAdapter


class FrontpageView(BrowserView):

    template = ViewPageTemplateFile('templates/frontpage.pt')

    def __call__(self):
        """
        Call template.
        """

        return self.template()

    def add_teaser_link(self):
        """
        Return link to add new Teaser
        """
        if api.user.is_anonymous():
            return None
        else:
            return self.context.absolute_url() + '/++add++Teaser'

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

    def get_tag(self, context, item, height, width):
        """
        Return image tag.
        """
        images_view = api.content.get_view('images', context, self.request)  # noqa
        tag = images_view.tag(item, height=height, width=width, direction='down')  # noqa

        return tag

    def language(self):
        """
        @return: Two-letter string, the active language code
        """
        context = self.context.aq_inner
        portal_state = getMultiAdapter(
            (context, self.request), name=u'plone_portal_state')
        current_language = portal_state.language()
        return current_language

    def get_news(self):
        """
        Get news items from the catalog and return its objects.
        """
        brains = api.content.find(portal_type='News Item',
                                  review_state='published',
                                  sort_on='Date',
                                  sort_order='reverse',
                                  Language=self.language())

        items = []

        for item in brains:
            obj = item.getObject()
            title = obj.title
            description = obj.description
            url = obj.absolute_url()

            if obj.image:
                tag = self.get_tag(obj, 'image', 165, 380)
            else:
                if self.context.default_image:
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

    def get_teasers(self):
        """
        Return dictionary values to template.
        """
        brains = api.content.find(portal_type='Teaser',
                                  review_state='published',
                                  sort_on='Date',
                                  sort_order='reverse',
                                  Language=self.language(),
                                  effectiveRange=DateTime())

        dictionary = []

        for teaser in brains:
            obj = teaser.getObject()
            title = obj.title
            description = obj.description
            url = obj.absolute_url()

            if obj.image:
                tag = self.get_tag(obj, 'image', 514, 1200)
            else:
                tag = None

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
