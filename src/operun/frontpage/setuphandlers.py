# -*- coding: utf-8 -*-

from plone import api
from Products.CMFPlone.interfaces import INonInstallable
from zope.interface import implementer


@implementer(INonInstallable)
class HiddenProfiles(object):

    def getNonInstallableProfiles(self):
        """
        Hide uninstall profile from site-creation and quickinstaller.
        """
        return [
            'operun.frontpage:uninstall',
        ]


def post_install(context):
    """
    Post install script.
    """
    if context.readDataFile('operunfrontpage_default.txt') is None:
        return
    # Do something during the installation of this package
    _displayed_types()
    _default_page_types()


def uninstall(context):
    """
    Uninstall script.
    """
    if context.readDataFile('operunfrontpage_uninstall.txt') is None:
        return
    # Do something during the uninstallation of this package


def _displayed_types():
    """
    Add Frontpage to displayed types.
    """
    types = api.portal.get_registry_record('plone.displayed_types')
    types = types + (u'Frontpage',)
    api.portal.set_registry_record('plone.displayed_types', types)


def _default_page_types():
    """
    Add Frontpage to default page types.
    """
    types = api.portal.get_registry_record('plone.default_page_types')
    types.append(u'Frontpage')
    api.portal.set_registry_record('plone.default_page_types', types)
