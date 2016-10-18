# -*- coding: utf-8 -*-

from operun.frontpage import _
from plone.dexterity.content import Item
from plone.namedfile.field import NamedBlobImage
from zope import schema
from zope.interface import Interface


class IArticle(Interface):

    url = schema.URI(
        title=_(u'article_url_title', default='URL'),
        description=_(u'article_url_description', default=u'Add a URL to the article.'),  # noqa
        required=False,
    )

    image = NamedBlobImage(
        title=_(u'article_image_title', default='Image'),
        description=_(u'article_image_description', default=u'Upload an image to accompany your article.'),  # noqa
        required=True,
    )


class Article(Item):
    """
    Article class
    """
