# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from operun.frontpage.testing import OPERUN_FRONTPAGE_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that operun.frontpage is properly installed."""

    layer = OPERUN_FRONTPAGE_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if operun.frontpage is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'operun.frontpage'))

    def test_browserlayer(self):
        """Test that IOperunFrontpageLayer is registered."""
        from operun.frontpage.interfaces import (
            IOperunFrontpageLayer)
        from plone.browserlayer import utils
        self.assertIn(IOperunFrontpageLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = OPERUN_FRONTPAGE_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['operun.frontpage'])

    def test_product_uninstalled(self):
        """Test if operun.frontpage is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'operun.frontpage'))

    def test_browserlayer_removed(self):
        """Test that IOperunFrontpageLayer is removed."""
        from operun.frontpage.interfaces import IOperunFrontpageLayer
        from plone.browserlayer import utils
        self.assertNotIn(IOperunFrontpageLayer, utils.registered_layers())
