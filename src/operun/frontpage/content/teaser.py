# -*- coding: utf-8 -*-

from plone.dexterity.content import Item
from operun.frontpage import _
from zope import schema
from zope.interface import Interface
from plone.namedfile.field import NamedBlobImage


class ITeaser(Interface):

    url = schema.URI(
        title=_(u'teaser_url_title', default='URL'),
        description=_(u'teaser_url_description', default=u'Add a URL to the teaser.'),  # noqa
        required=False,
    )

    image = NamedBlobImage(
        title=_(u'teaser_image_title', default='Image'),
        description=_(u'teaser_image_description', default=u'Upload an image to accompany your teaser.'),  # noqa
        required=True,
    )


class Teaser(Item):
    """
    Teaser class
    """
