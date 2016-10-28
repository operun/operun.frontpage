# -*- coding: utf-8 -*-

import zope.component
import zope.interface
import zope.schema.interfaces
from z3c.form import interfaces, widget
from z3c.form.browser import text


class IColorPickerWidget(interfaces.IWidget):
    """Footballfield widget."""


class ColorPickerWidget(text.TextWidget):
    maxlength = 255
    size = 30

    zope.interface.implementsOnly(IColorPickerWidget)

    def javascript(self):
        return ""


def ColorPickerFieldWidget(field, request):
    """IColorPickerWidget factory for ColorPickerWidget."""
    return widget.FieldWidget(field, ColorPickerWidget(request))
