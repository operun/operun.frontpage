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
        portal_state = getMultiAdapter(
            (self.context, self.request), name=u'plone_portal_state')
        return portal_state.language()

    def get_news(self):
        """
        Get news items from the catalog and return its objects.
        """
        brains = api.content.find(portal_type='News Item',
                                  review_state='published',
                                  sort_on='effective',
                                  sort_order='reverse',
                                  Language=self.language()
                                  )

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
        path = '/'.join(self.context.getPhysicalPath())
        brains = api.content.find(portal_type='Teaser',
                                  path=path,
                                  review_state='published',
                                  sort_on='Date',
                                  sort_order='reverse',
                                  Language=self.language(),
                                  effectiveRange=DateTime()
                                  )

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



    def news(self):
        """
        Get news items from the catalog.
        """
        results = []
        items = []

        if self.context.show_news:

            brains = api.content.find(portal_type='News Item',
                                      review_state='published',
                                      sort_on='effective',
                                      sort_order='reverse',
                                      Language=self.language())

            for brain in brains:
                item = brain.getObject()
                title = item.title
                description = item.description
                url = item.absolute_url()

                if item.image:
                    images_view = api.content.get_view('images', item, self.request)  # noqa
                    tag = images_view.tag('image', width=400, height=300, direction='down')  # noqa
                else:
                    if self.context.default_image:
                        images_view = api.content.get_view('images', self.context, self.request)  # noqa
                        tag = images_view.tag('default_image', width=400, height=300, direction='down')  # noqa
                    else:
                        tag = None

                data = {'title': self.crop(title, 65),
                        'description': self.crop(description, 265),
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

    def teasers(self):
        """Return dictionary values to template
        """
        results = []

        if self.context.show_carousel:

            brains = api.content.find(portal_type='Teaser',
                                      review_state='published',
                                      sort_on='effective',
                                      sort_order='reverse',
                                      Language=self.language(),
                                      effectiveRange=DateTime())

            for brain in brains:
                item = brain.getObject()
                title = item.title
                description = item.description
                url = item.url
                tag = None

                if item.image:
                    images_view = api.content.get_view('images', item, self.request)  # noqa
                    tag = images_view.tag('image', height=514, width=1200, direction='down')  # noqa

                data = {'title': title,
                        'description': description,
                        'image': tag,
                        'url': url,
                        }

                results.append(data)

            return results

    def articles(self):
        """Return dictionary values to template
        """
        results = []

        if self.context.show_article:

            brains = api.content.find(portal_type='Article',
                                      review_state='published',
                                      sort_on='effective',
                                      sort_order='reverse',
                                      Language=self.language(),
                                      effectiveRange=DateTime())

            for brain in brains:
                item = brain.getObject()
                title = item.title
                description = item.description
                url = item.url
                tag = None

                if item.image:
                    images_view = api.content.get_view('images', item, self.request)  # noqa
                    tag = images_view.tag('image', height=257, width=600, direction='down')  # noqa

                data = {'title': title,
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
        """Return dictionary values to template
        """
        results = []

        if self.context.show_tile:

            brains = api.content.find(portal_type='Tile',
                                      review_state='published',
                                      sort_on='effective',
                                      sort_order='reverse',
                                      Language=self.language(),
                                      effectiveRange=DateTime())

            for brain in brains:
                item = brain.getObject()

                # set some defaults
                color = '#96c11f'
                icon = 'glyphicon glyphicon-ok'
                style = ''

                title = item.title
                description = item.description
                url = item.url

                if item.icon:
                    icon = item.icon

                if item.color:
                    color = item.color
                    style = 'background-color: ' + color


                tag = None

                if item.image:
                    images_view = api.content.get_view('images', item, self.request)  # noqa
                    scale = images_view.scale('image', height=257, width=600, direction='down')  # noqa
                    tag = scale.tag()

                    image_url = scale.url
                    style = 'background-image: url(\''+image_url+'\'); background-repeat: no-repeat; background-size: cover;'  # noqa

                data = {'title': title,
                        'description': description,
                        'image': tag,
                        'url': url,
                        'icon': icon,
                        'color': color,
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
