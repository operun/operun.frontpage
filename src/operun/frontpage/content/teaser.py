# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from plone.autoform import directives
from plone.dexterity.content import Item

from operun.frontpage import _
from zope import schema
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer

from plone.formwidget.namedfile import NamedBlobFile


class ITeaser(Interface):

    link = schema.URI(
        title=_(u'', default='')
        required=False
    )

    image = NamedBlobFile(
        title=_(u'', default='')
        required=False
    )


class Teaser(Item):
    """
    Teaser class
    """
