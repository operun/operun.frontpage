# -*- coding: utf-8 -*-

from medialog.iconpicker.widgets.widget import IconPickerFieldWidget
from operun.frontpage import _
from plone.app.textfield import RichText
from plone.dexterity.content import Container
from plone.directives import form
from plone.namedfile.field import NamedBlobImage
from plone.supermodel.directives import fieldset
from zope import schema
from zope.interface import Interface
from zope.schema.vocabulary import SimpleTerm, SimpleVocabulary

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
        description=_(u'frontpage_show_title_description', default=u'Enable or disable the frontpage title.'),  # noqa
        required=False,
        default=True,
    )

    show_description = schema.Bool(
        title=_(u"frontpage_show_description_title", default="Show description"),  # noqa
        description=_(u'frontpage_show_description_description', default=u'Enable or disable the frontpage description.'),  # noqa
        required=False,
        default=True,
    )

    show_text = schema.Bool(
        title=_(u"frontpage_show_text_title", default="Show text"),
        description=_(u'frontpage_show_text_description', default=u'Enable or disable description below the carousel.'),  # noqa
        required=False,
        default=True,
    )

    fieldset(
        'carousel',
        label=_(u'frontpage_fieldset_carousel_label', default=u'Carousel'),  # noqa
        fields=(
            'show_carousel',
            'carousel_animation',
            'carousel_autoscroll'
        ),
    )

    show_carousel = schema.Bool(
        title=_(u"frontpage_show_carousel_title", default="Show carousel"),
        description=_(u'frontpage_show_carousel_description', default=u'Select to display a carousel on the frontpage.'),  # noqa
        required=False,
        default=True,
    )

    carousel_animation = schema.Choice(
        title=_(u'frontpage_carousel_animation_title', default=u'Carousel animation'),  # noqa
        description=_(u'frontpage_carousel_animation_description', default=u'Select a transition effect for the carousel.'),  # noqa
        vocabulary=EffectVocabulary,
        required=False,
    )

    carousel_autoscroll = schema.Int(
        title=_(u'frontpage_carousel_autoscroll_title', default=u'Carousel autoscroll'),  # noqa
        description=_(u'frontpage_carousel_autoscroll_description', default=u'Select a transition delay for the carousel.'),  # noqa
        default=5000,
        required=False,
    )

    fieldset(
        'news',
        label=_(u'frontpage_fieldset_news_label', default=u'News'),
        fields=(
            'show_news',
            'section_news_heading',
            'limit_news',
            'default_image'
        ),
    )

    show_news = schema.Bool(
        title=_(u"frontpage_show_news_title", default="Show news"),
        description=_(u'frontpage_show_news_description', default=u'Display news below carousel.'),  # noqa
        required=False,
        default=True,
    )

    section_news_heading = schema.TextLine(
        title=_(u"frontpage_section_news_heading_title", default="News heading"),  # noqa
        description=_(u'frontpage_section_news_heading_description', default=u'Enter a heading for the news section.'),  # noqa
        required=False,
    )

    limit_news = schema.Int(
        title=_(u"frontpage_limit_news_title", default="Limit news"),
        description=_(u'frontpage_limit_news_description', default=u'Limit the number of displayed news items.'),  # noqa
        required=False,
        default=6,
    )

    default_image = NamedBlobImage(
    title=_(u'frontpage_default_image_title', default='Default image'),  # noqa
    description=_(u'frontpage_default_image_description', default=u'Upload a default news item image.'),  # noqa
    required=False,
    )

    fieldset(
        'article',
        label=_(u'frontpage_fieldset_article_label', default=u'Article'),
        fields=(
            'show_article',
            'section_article_heading',
            'limit_article',
            'default_article_image'
        ),
    )

    show_article = schema.Bool(
        title=_(u"frontpage_show_article_title", default="Show article"),
        description=_(u'frontpage_show_article_description', default=u'Display articles below news.'),  # noqa
        required=False,
        default=True,
    )

    section_article_heading = schema.TextLine(
        title=_(u"frontpage_section_article_heading_title", default="Article heading"),  # noqa
        description=_(u'frontpage_section_article_heading_description', default=u'Enter a heading for the article section.'),  # noqa
        required=False,
    )

    limit_article = schema.Int(
        title=_(u"frontpage_limit_article_title", default="Limit articles"),  # noqa
        description=_(u'frontpage_limit_article_description', default=u'Limit the number of displayed article items.'),  # noqa
        default=2,
        required=False,
    )

    default_article_image = NamedBlobImage(
    title=_(u'frontpage_default_article_image_title', default='Default image'),  # noqa
    description=_(u'frontpage_default_article_image_description', default=u'Upload a default article item image.'),  # noqa
    required=False,
    )

    fieldset(
        'tile',
        label=_(u'frontpage_fieldset_tile_label', default=u'Tile'),
        fields=(
            'show_tile',
            'section_tile_heading',
            'limit_tile',
            'tile_icon',
            'default_tile_image'
        ),
    )

    show_tile = schema.Bool(
        title=_(u"frontpage_show_tile_title", default="Show tile"),
        description=_(u'frontpage_show_tile_description', default=u'Display tiles below news.'),  # noqa
        required=False,
        default=True,
    )

    section_tile_heading = schema.TextLine(
        title=_(u"frontpage_section_tile_heading_title", default="Tile heading"),  # noqa
        description=_(u'frontpage_section_tile_heading_description', default=u'Enter a heading for the tile section.'),  # noqa
        required=False,
    )

    limit_tile = schema.Int(
        title=_(u"frontpage_limit_tile_title", default="Limit tiles"),  # noqa
        description=_(u'frontpage_limit_tile_description', default=u'Limit the number of displayed tile items.'),  # noqa
        default=2,
        required=False,
    )

    tile_icon = schema.TextLine(
        title=_("widget_icon_title", default=u"Icon"),
        description=_("widget_icon_description", default=u"Choose an icon."),  # noqa
        required=False,
    )

    form.widget(
        tile_icon=IconPickerFieldWidget
    )

    default_tile_image = NamedBlobImage(
    title=_(u'frontpage_default_tile_image_title', default='Default image'),  # noqa
    description=_(u'frontpage_default_tile_image_description', default=u'Upload a default tile item image.'),  # noqa
    required=False,
    )


class Frontpage(Container):
    """
    Frontpage class
    """
