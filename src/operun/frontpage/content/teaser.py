# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from plone.autoform import directives
from plone.dexterity.content import Item

from operun.frontpage import _
from zope import schema
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer

from plone.namedfile.field import NamedBlobImage


class ITeaser(Interface):

    link = schema.URI(
        title=_(u'link', default='Link'),
        required=False,
    )

    image = NamedBlobImage(
        title=_(u'image', default='Add Image'),
        required=False,
    )


class Teaser(Item):
    """
    Teaser class
    """
