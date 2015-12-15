# -*- coding: utf-8 -*-
from plone.app.textfield import RichText
from plone.dexterity.content import Container
from operun.frontpage import _
from zope import schema
from zope.interface import Interface


class IFrontpage(Interface):

    text = RichText(
        title=_(u'frontpage_text_title', default=u'Text'),
        description=_(u'frontpage_text_description', default=u'Enter text that will be displayed on top of the listing.'),  # noqa
        required=False,
        )

    show_carousel = schema.Bool(
        title=_(u"frontpage_show_carousel_title", default="Show carousel"),
        description=_(u'frontpage_show_carousel_description', default=u'Activate to show the carousel on the frontpage.'),  # noqa
        required=False,
    )

    show_text = schema.Bool(
        title=_(u"frontpage_show_text_title", default="Show text"),
        description=_(u'frontpage_show_text_description', default=u'Activate to show text section below the carousel.'),  # noqa
        required=False,
    )

    show_title = schema.Bool(
        title=_(u"frontpage_show_title_title", default="Show title"),
        description=_(u'frontpage_show_title_description', default=u'Activate to show title on the frontpage.'),  # noqa
        required=False,
    )

    show_news = schema.Bool(
        title=_(u"frontpage_show_news_title", default="Show news"),
        description=_(u'frontpage_show_news_description', default=u'Activate to show news items on the frontpage.'),  # noqa
        required=False,
    )


class Frontpage(Container):
    """
    Frontpage class
    """
