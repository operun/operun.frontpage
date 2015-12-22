# -*- coding: utf-8 -*-

from plone.app.textfield import RichText
from plone.dexterity.content import Container
from operun.frontpage import _
from zope import schema
from zope.interface import Interface


class IFrontpage(Interface):

    text = RichText(
        title=_(u'frontpage_text_title', default=u'Text'),
        description=_(u'frontpage_text_description', default=u'Add a description below the carousel.'),  # noqa
        required=False,
        )

    show_carousel = schema.Bool(
        title=_(u"frontpage_show_carousel_title", default="Show carousel"),
        description=_(u'frontpage_show_carousel_description', default=u'Select to display a carousel on the frontpage.'),  # noqa
        required=False,
    )

    show_text = schema.Bool(
        title=_(u"frontpage_show_text_title", default="Show text"),
        description=_(u'frontpage_show_text_description', default=u'Enable or disable text below carousel.'),  # noqa
        required=False,
    )

    show_title = schema.Bool(
        title=_(u"frontpage_show_title_title", default="Show title"),
        description=_(u'frontpage_show_title_description', default=u'Enable or disable frontpage title.'),  # noqa
        required=False,
    )

    show_news = schema.Bool(
        title=_(u"frontpage_show_news_title", default="Show news"),
        description=_(u'frontpage_show_news_description', default=u'Enable to display news tiles below carousel.'),  # noqa
        required=False,
    )

    limit_news = schema.Int(
        title=_(u"frontpage_limit_news_title", default="Number of News items"),
        description=_(u'frontpage_limit_news_description', default=u'Limit the number of displayed items.'),  # noqa
        required=False,
        default=6,
    )


class Frontpage(Container):
    """
    Frontpage class
    """
