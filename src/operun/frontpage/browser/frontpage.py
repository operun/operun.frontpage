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

    def crop_text(self, text, count):
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

    def get_carousel_vars(self):
        """
        Return CarouFredSel variables to template.
        """
        animation = self.context.carousel_animation
        autoscroll = self.context.carousel_autoscroll

        # Return animation type
        if animation:
            animation = 'var animation = "%s";' % animation
        else:
            animation = 'var animation = "none";'

        # Return scroll delay
        if autoscroll:
            autoscroll = 'var autoscroll = %s;' % autoscroll
        else:
            autoscroll = 'var autoscroll = %s;' % '5000'

        return autoscroll + animation

    def get_image(self, tag, context, item, width, height):
        """
        Return image tag.
        """
        if tag:
            images_view = api.content.get_view('images', context, self.request)  # noqa
            tag = images_view.tag(item, height=height, width=width, direction='down')  # noqa

            return tag
        else:
            images_view = api.content.get_view('images', context, self.request)  # noqa
            scale = images_view.scale(item, height=height, width=width, direction='down')  # noqa
            tag = scale.tag()
            image_url = scale.url

            return image_url

    def get_language(self):
        """
        @return: Two-letter string, the active language code.
        """
        portal_state = getMultiAdapter((self.context, self.request), name=u'plone_portal_state')  # noqa

        return portal_state.language()

    def teasers(self):
        """
        Return dictionary values to template.
        """
        results = []

        if self.context.show_carousel:
            brains = api.content.find(
                portal_type='Teaser',
                review_state='published',
                sort_on='effective',
                sort_order='reverse',
                Language=self.get_language(),
                effectiveRange=DateTime()
            )

            for brain in brains:
                item = brain.getObject()
                title = item.title
                description = item.description
                url = item.url
                tag = None

                if item.image:
                    tag = self.get_image(tag=True, context=item, item='image', width=1200, height=514)  # noqa

                data = {
                    'title': title,
                    'description': description,
                    'image': tag,
                    'url': url,
                }
                results.append(data)

            return results

    def news(self):
        """
        Get news items from the catalog.
        """
        results = []

        if self.context.show_news:
            brains = api.content.find(
                portal_type='News Item',
                review_state='published',
                sort_on='effective',
                sort_order='reverse',
                Language=self.get_language()
            )

            for brain in brains:
                item = brain.getObject()
                title = item.title
                description = item.description
                url = item.absolute_url()
                tag = None

                if item.image:
                    tag = self.get_image(tag=True, context=item, item='image', width=380, height=165)  # noqa
                else:
                    if self.context.default_image:
                        tag = self.get_image(tag=True, context=self.context, item='default_image', width=380, height=165)  # noqa
                    else:
                        tag = None

                data = {
                    'title': self.crop_text(title, 65),
                    'description': self.crop_text(description, 265),
                    'image': tag,
                    'url': url,
                }
                results.append(data)

            limit = self.context.limit_news

            if limit:
                if len(results) > limit:
                    return results[:limit]
                else:
                    return results
            else:
                return results

    def articles(self):
        """
        Return dictionary values to template.
        """
        results = []

        if self.context.show_article:
            brains = api.content.find(
                portal_type='Article',
                review_state='published',
                sort_on='effective',
                sort_order='reverse',
                Language=self.get_language(),
                effectiveRange=DateTime()
            )

            for brain in brains:
                item = brain.getObject()
                title = item.title
                description = item.description
                url = item.url
                tag = None

                if item.image:
                    tag = self.get_image(tag=True, context=item, item='image', width=600, height=254)  # noqa

                data = {
                    'title': title,
                    'description': description,
                    'image': tag,
                    'url': url,
                }
                results.append(data)

            limit = self.context.limit_article

            if limit:
                if len(results) > limit:
                    return results[:limit]
                else:
                    return results
            else:
                return results

    def tiles(self):
        """
        Return dictionary values to template.
        """
        results = []

        if self.context.show_tile:
            brains = api.content.find(
                portal_type='Tile',
                review_state='published',
                sort_on='effective',
                sort_order='reverse',
                Language=self.get_language(),
                effectiveRange=DateTime()
            )

            for brain in brains:

                item = brain.getObject()
                title = item.title
                description = item.description
                url = item.url
                tag = None

                # Defaults
                color = '#4D4D4D'
                icon = 'icon-view'
                style = ''

                if item.icon:
                    icon = item.icon

                if item.color:
                    color = item.color
                    style = 'background-color: ' + color

                if item.image:
                    image = self.get_image(context=item, item='image', width=600, height=254)  # noqa
                    style = 'background-image: url(\'' + image + '\'); background-repeat: no-repeat; background-size: cover;'  # noqa

                data = {
                    'title': title,
                    'description': description,
                    'url': url,
                    'image': tag,
                    'color': color,
                    'icon': icon,
                    'style': style
                }
                results.append(data)

            limit = self.context.limit_tile

            if limit:
                if len(results) > limit:
                    return results[:limit]
                else:
                    return results
            else:
                return results
