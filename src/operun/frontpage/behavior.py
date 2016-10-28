# -*- coding: utf-8 -*-

from operun.frontpage import _
from operun.frontpage.widgets.widget import ColorPickerWidget
from plone.autoform.interfaces import IFormFieldProvider
from plone.directives import form
from zope import schema
from zope.interface import alsoProvides


class IColorPickerView(form.Schema):
    """
    A color picker field.
    """

    color = schema.TextLine(
        title=_("behavior_color_title", default=u"Color"),
        description=_("behavior_color_description", default=u"Choose a color value."),  # noqa
    )

    form.widget(
        color=ColorPickerWidget
    )

alsoProvides(IColorPickerView, IFormFieldProvider)
