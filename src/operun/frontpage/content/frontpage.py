# -*- coding: utf-8 -*-
from plone.app.textfield import RichText
from plone.dexterity.content import Container
from plone.supermodel.directives import fieldset

from zope import schema
from zope.interface import Interface
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary

from operun.frontpage import _


EffectVocabulary = SimpleVocabulary(
    [SimpleTerm(value=u'scroll', title=_(u'Scroll')),
     SimpleTerm(value=u'directscroll', title=_(u'Directscroll')),
     SimpleTerm(value=u'fade', title=_(u'Fade')),
     SimpleTerm(value=u'crossfade', title=_(u'Crossfade')),
     SimpleTerm(value=u'cover', title=_(u'Cover')),
     SimpleTerm(value=u'cover-fade', title=_(u'Coverfade')),
     SimpleTerm(value=u'uncover', title=_(u'Uncover')),
     SimpleTerm(value=u'uncover-fade', title=_(u'Uncoverfade'))]
)


class IFrontpage(Interface):

    text = RichText(
        title=_(u'frontpage_text_title', default=u'Text'),
        description=_(u'frontpage_text_description', default=u'Add a description below the carousel.'),  # noqa
        required=False,
        )

    show_title = schema.Bool(
        title=_(u"frontpage_show_title_title", default="Show title"),
        description=_(u'frontpage_show_title_description', default=u'Enable or disable frontpage title.'),  # noqa
        required=False,
        default=True,
    )

    show_description = schema.Bool(
        title=_(u"frontpage_show_description_title", default="Show description"),  # noqa
        description=_(u'frontpage_show_description_description', default=u'Enable or disable frontpage description.'),  # noqa
        required=False,
        default=True,
    )

    show_text = schema.Bool(
        title=_(u"frontpage_show_text_title", default="Show text"),
        description=_(u'frontpage_show_text_description', default=u'Enable or disable text below carousel.'),  # noqa
        required=False,
        default=True,
    )

    fieldset('carousel',
             label=_(u'frontpage_fieldset_carousel_label', default=u'Carousel'),  # noqa
             fields=('show_carousel', 'carousel_animation', 'carousel_autoscroll'),  # noqa
             )

    show_carousel = schema.Bool(
        title=_(u"frontpage_show_carousel_title", default="Show carousel"),
        description=_(u'frontpage_show_carousel_description', default=u'Select to display a carousel on the frontpage.'),  # noqa
        required=False,
        default=True,
    )

    carousel_animation = schema.Choice(
        title=_(u'frontpage_carousel_animation_title', default=u'Animation'),
        description=_(u'frontpage_carousel_animation_description', default=u'Select a transition effect for the carousel.'),  # noqa
        vocabulary=EffectVocabulary,
        required=False,
        )

    carousel_autoscroll = schema.Int(
        title=_(u'frontpage_carousel_autoscroll_title', default=u'Autoscroll'),
        description=_(u'frontpage_carousel_autoscroll_description', default=u'Select transition delay for the carousel.'),  # noqa
        default=5000,
        required=False,
        )

    fieldset('news',
             label=_(u'frontpage_fieldset_news_label', default=u'News'),
             fields=('show_news', 'limit_news'),
             )

    show_news = schema.Bool(
        title=_(u"frontpage_show_news_title", default="Show news"),
        description=_(u'frontpage_show_news_description', default=u'Enable to display news tiles below carousel.'),  # noqa
        required=False,
        default=True,
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
