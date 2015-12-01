# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import operun.frontpage


class OperunFrontpageLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        self.loadZCML(package=operun.frontpage)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'operun.frontpage:default')


OPERUN_FRONTPAGE_FIXTURE = OperunFrontpageLayer()


OPERUN_FRONTPAGE_INTEGRATION_TESTING = IntegrationTesting(
    bases=(OPERUN_FRONTPAGE_FIXTURE,),
    name='OperunFrontpageLayer:IntegrationTesting'
)


OPERUN_FRONTPAGE_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(OPERUN_FRONTPAGE_FIXTURE,),
    name='OperunFrontpageLayer:FunctionalTesting'
)


OPERUN_FRONTPAGE_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        OPERUN_FRONTPAGE_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='OperunFrontpageLayer:AcceptanceTesting'
)
