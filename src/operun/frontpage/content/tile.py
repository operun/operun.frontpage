# -*- coding: utf-8 -*-

from operun.frontpage import _
from plone.dexterity.content import Item
from plone.namedfile.field import NamedBlobImage
from zope import schema
from zope.interface import Interface
from zope.schema.vocabulary import SimpleTerm, SimpleVocabulary

ColorVocabulary = SimpleVocabulary(
    [SimpleTerm(value=u'frontpage-black', title=_(u'Black')),
     SimpleTerm(value=u'frontpage-blue', title=_(u'Blue')),
     SimpleTerm(value=u'frontpage-grey', title=_(u'Grey'))]
)


class ITile(Interface):

    url = schema.URI(
        title=_(u'tile_url_title', default='URL'),
        description=_(u'tile_url_description', default=u'Add a URL to the tile.'),  # noqa
        required=False,
    )

    icon = schema.TextLine(
        title=_(u'tile_icon_title', default='Icon'),
        description=_(u'tile_icon_description', default=u'Select an available icon.'),  # noqa
        required=False,
    )

    color = schema.Choice(
        title=_(u'tile_color_title', default=u'Tile color'),
        description=_(u'tile_color_description', default=u'Select a background color for the tile.'),  # noqa
        vocabulary=ColorVocabulary,
        required=False,
        )

    image = NamedBlobImage(
        title=_(u'tile_image_title', default='Image'),
        description=_(u'tile_image_description', default=u'Upload an image for the tile.'),  # noqa
        required=False,
    )


class Tile(Item):
    """
    Tile class
    """
