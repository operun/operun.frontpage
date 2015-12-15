# -*- coding: utf-8 -*-
from Products.CMFPlone.interfaces import INonInstallable
from zope.interface import implementer
from plone import api


@implementer(INonInstallable)
class HiddenProfiles(object):

    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller"""
        return [
            'operun.frontpage:uninstall',
        ]


def post_install(context):
    """Post install script"""
    if context.readDataFile('operunfrontpage_default.txt') is None:
        return
    # Do something during the installation of this package
    _register_types()


def uninstall(context):
    """Uninstall script"""
    if context.readDataFile('operunfrontpage_uninstall.txt') is None:
        return
    # Do something during the uninstallation of this package


def _register_types():
    """
    Add Frontpage to displayed types
    """
    displayed_types = api.portal.get_registry_record('plone.displayed_types')
    displayed_types = displayed_types + (u'Frontpage',)
    api.portal.set_registry_record('plone.displayed_types', displayed_types)
