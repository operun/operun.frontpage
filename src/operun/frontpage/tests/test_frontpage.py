# -*- coding: utf-8 -*-
from plone.app.testing import TEST_USER_ID
from zope.component import queryUtility
from zope.component import createObject
from plone.app.testing import setRoles
from plone.dexterity.interfaces import IDexterityFTI
from plone import api

from operun.frontpage.testing import OPERUN_FRONTPAGE_INTEGRATION_TESTING  # noqa
from operun.frontpage.interfaces import IFrontpage

import unittest2 as unittest


class FrontpageIntegrationTest(unittest.TestCase):

    layer = OPERUN_FRONTPAGE_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        setRoles(self.portal, TEST_USER_ID, ['Manager'])
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_schema(self):
        fti = queryUtility(IDexterityFTI, name='Frontpage')
        schema = fti.lookupSchema()
        self.assertEqual(IFrontpage, schema)

    def test_fti(self):
        fti = queryUtility(IDexterityFTI, name='Frontpage')
        self.assertTrue(fti)

    def test_factory(self):
        fti = queryUtility(IDexterityFTI, name='Frontpage')
        factory = fti.factory
        obj = createObject(factory)
        self.assertTrue(IFrontpage.providedBy(obj))

    def test_adding(self):
        self.portal.invokeFactory('Frontpage', 'Frontpage')
        self.assertTrue(
            IFrontpage.providedBy(self.portal['Frontpage'])
        )
