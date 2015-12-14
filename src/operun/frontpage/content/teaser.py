# -*- coding: utf-8 -*-
from plone.autoform import directives
from plone.dexterity.content import Item

from operun.frontpage import _
from zope import schema
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer

from plone.namedfile.field import NamedBlobImage


class ITeaser(Interface):

    url = schema.URI(
        title=_(u'URL', default='URL'),
        required=False,
    )

    image = NamedBlobImage(
        title=_(u'Image', default='Image'),
        required=True,
    )


class Teaser(Item):
    """
    Teaser class
    """
