# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from plone.autoform import directives
from plone.dexterity.content import Container

from operun.frontpage import _
from zope import schema
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer


class IFrontpage(Interface):

    description = schema.TextLine(
        title=_(u"description", default="Description"),
        required=False,
    )

    slider = schema.Bool(
        title=_(u"slider", default="Activate Slider"),
        required=False,
    )


class Frontpage(Container):
    """
    Frontpage class
    """
