
module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            
            "frontpage": {
                options: {
                    paths: ["/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2", "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "frontpage-compiled.css.map",
                    sourceMapBasepath: "/home/jesse/Development/GitHub/operun.frontpage",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"bowerPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"bootstrap-button-groups": "'button-groups.less'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"plone-gray-light": "lighten(#000, 46.5%)",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'4c88f90f3b6f42ec8c27ef98d823bbfb.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"frontpage": "'frontpage.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-screen-lg-min": "1200px",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-link-color": "rgba(0,123,179,1)",

                    }
                },
                files: {
                    "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage.less"
                }
            }
,
            "plone-logged-in": {
                options: {
                    paths: ["/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2", "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-logged-in-compiled.css.map",
                    sourceMapBasepath: "/home/jesse/Development/GitHub/operun.frontpage",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"bowerPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"bootstrap-button-groups": "'button-groups.less'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"plone-gray-light": "lighten(#000, 46.5%)",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'4c88f90f3b6f42ec8c27ef98d823bbfb.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"frontpage": "'frontpage.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-screen-lg-min": "1200px",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-link-color": "rgba(0,123,179,1)",

                    }
                },
                files: {
                    "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less"
                }
            }
,
            "plone": {
                options: {
                    paths: ["/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2", "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-compiled.css.map",
                    sourceMapBasepath: "/home/jesse/Development/GitHub/operun.frontpage",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"bowerPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"bootstrap-button-groups": "'button-groups.less'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"plone-gray-light": "lighten(#000, 46.5%)",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'4c88f90f3b6f42ec8c27ef98d823bbfb.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"frontpage": "'frontpage.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-screen-lg-min": "1200px",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-link-color": "rgba(0,123,179,1)",

                    }
                },
                files: {
                    "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone.less"
                }
            }
,
            "resourceregistry": {
                options: {
                    paths: ["/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2", "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "resourceregistry-compiled.css.map",
                    sourceMapBasepath: "/home/jesse/Development/GitHub/operun.frontpage",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"bowerPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"bootstrap-button-groups": "'button-groups.less'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"plone-gray-light": "lighten(#000, 46.5%)",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'4c88f90f3b6f42ec8c27ef98d823bbfb.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"frontpage": "'frontpage.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-screen-lg-min": "1200px",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-link-color": "rgba(0,123,179,1)",

                    }
                },
                files: {
                    "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry.less"
                }
            }
,
            "thememapper": {
                options: {
                    paths: ["/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less", "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", "temp_resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2", "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray"],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "thememapper-compiled.css.map",
                    sourceMapBasepath: "/home/jesse/Development/GitHub/operun.frontpage",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    modifyVars: {
                      "picker": "'classic.css'",
"mockup-patterns-upload": "'pattern.upload.less'",
"mockup-popover": "'popover.less'",
"jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
"resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
"mockup-patterns-tooltip": "'pattern.tooltip.less'",
"plone-toolbar-font-primary": "sans-serif",
"mockup-patterns-recurrence": "'pattern.recurrence.less'",
"mockup-patterns-select2": "'pattern.select2.less'",
"bootstrap-progress-bars": "'progress-bars.less'",
"bootstrap-buttons": "'close.less'",
"mockup-patterns-tinymce": "'pattern.tinymce.less'",
"plone-toolbar-private-color": "rgb(196,24,60)",
"resourceregistry": "'resourceregistry.less'",
"mockup-patterns-livesearch": "'pattern.livesearch.less'",
"tinymce-default-styles": "'tinymce-styles.css'",
"plone-left-toolbar-expanded": "120px",
"plone-screen-sm-min": "768px",
"mockup-patterns-relateditems": "'pattern.relateditems.less'",
"plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
"bootstrap-variables": "'variables.less'",
"resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
"plone-toolbar-published-color": "rgba(0,123,179,1)",
"mockuplessPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less/'",
"mockup-patterns-structure": "'pattern.structure.less'",
"mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
"plone-toolbar-text-color": "rgba(255,255,255,1)",
"bowerPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/'",
"plone-patterns-toolbar": "'toolbar.plone.less'",
"bootstrap-modal": "'modals.less'",
"mockup-patterns-modal": "'pattern.modal.less'",
"plone-screen-md-max": "(@plone-screen-lg-min + 1)",
"tinymce": "'Content.less'",
"plone-toolbar-internally-published-color": "rgb(136,61,250)",
"plone-container-lg": "1170px",
"plone": "'plone.less'",
"plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
"plone-toolbar-internal-color": "rgb(250,184,42)",
"bootstrap-glyphicons": "'glyphicons.less'",
"bootstrap-mixins": "'mixins.less'",
"mockupPath": "'/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/'",
"plone-screen-sm-max": "(@plone-screen-md-min + 1)",
"plone-screen-md-min": "992px",
"picker_date": "'classic.date.css'",
"bootstrap-button-groups": "'button-groups.less'",
"sitePath": "'/'",
"plone-container-sm": "750px",
"bootstrap-dropdown": "'dropdowns.less'",
"plone-toolbar-link": "rgba(0,123,179,1)",
"mockup-patterns-filemanager": "'pattern.filemanager.less'",
"mockup-patterns-autotoc": "'pattern.autotoc.less'",
"staticPath": "'/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static'",
"plone-left-toolbar": "60px",
"isPlone": "false",
"jqtree": "'jqtree.css'",
"plone-toolbar-font-secundary": "sans-serif",
"mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
"plone-toolbar-pending-color": "rgb(226,231,33)",
"plone-logged-in": "'plone-logged-in.less'",
"plone-toolbar-separator-color": "rgba(255,255,255,.17)",
"plone-gray-lighter": "lighten(#000, 80%)",
"mockup-patterns-tree": "'pattern.tree.less'",
"thememapper": "'thememapper.less'",
"plone-gray-light": "lighten(#000, 46.5%)",
"mockup-patterns-querystring": "'pattern.querystring.less'",
"resource-plone-app-event-event-css": "'4c88f90f3b6f42ec8c27ef98d823bbfb.js'",
"plone-screen-xs-min": "480px",
"plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
"mockup-patterns-pickadate": "'pattern.pickadate.less'",
"tinymce-visualblocks": "'visualblocks.css'",
"plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
"select2": "'select2.css'",
"plone-container-md": "970px",
"frontpage": "'frontpage.less'",
"isMockup": "false",
"plone-toolbar-draft-color": "rgb(250,184,42)",
"bootstrap-basic": "'navbar.less'",
"plone-screen-lg-min": "1200px",
"bootstrap-badges": "'badges.less'",
"mockup-patterns-thememapper": "'pattern.thememapper.less'",
"picker_time": "'classic.time.css'",
"icon-font-path": "\"../fonts/\"",
"dropzone": "'dropzone.css'",
"plone-toolbar-bg": "rgba(0,0,0,.9)",
"plone-link-color": "rgba(0,123,179,1)",

                    }
                },
                files: {
                    "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css": "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper.less"
                }
            }

        },
        requirejs: {
            
            "frontpage": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "tinymce-advlist": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "tinymce-preview": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "mockup-patterns-tree": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-pagebreak": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "jquery.event.drag": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drag", "mockup-patterns-formautofocus": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-i18n": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n", "underscore": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/lodash/dist/lodash.underscore", "pat-logger": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "jqtree": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "tinymce-textcolor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "picker.time": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper/pattern", "dropzone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "mockup-patterns-filemanager-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/utils", "mockup-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "plone-patterns-portletmanager": "/home/jesse/.buildout/eggs/plone.app.portlets-3.1.2-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/a9ba70927e8e4d0a9167cbfe94e31e1a", "mockup-patterns-upload-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "tinymce-code": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "marked": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-lists": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "bootstrap-alert": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "jquery": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "mockup-ui-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/ui", "tinymce-tabfocus": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "resource-plone-app-event-event-js": "temp_resources/b7d9323c660343b1a21eb50173578ee4", "tinymce-print": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate/pattern", "JSXTransformer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "tinymce-contextmenu": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "plone-patterns-toolbar": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "tinymce-visualblocks": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-patterns-resourceregistry-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "mockup-patterns-base": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/pattern", "mockup-patterns-livesearch": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "tinymce-searchreplace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "mockup-patterns-autotoc": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "mockup-patterns-resourceregistry": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry/pattern", "react": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "carouFredSel": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/carouFredSel", "pat-utils": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/544a2490d2864e9c8e576543585f5129", "mockup-patterns-moment": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/moment/pattern", "mockup-patterns-relateditems": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "bootstrap-tooltip": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "frontpage": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "tinymce-code": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "carouFredSel": {"deps": ["jquery"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "frontpage": {"deps": ["jquery"]}},
                    wrapShim: true,
                    name: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage.js',
                    exclude: ['jquery'],
                    out: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.js',
                    optimize: "none"
                }
            },

            "plone-logged-in": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "tinymce-advlist": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "tinymce-preview": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "mockup-patterns-tree": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-pagebreak": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "jquery.event.drag": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drag", "mockup-patterns-formautofocus": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-i18n": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n", "underscore": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/lodash/dist/lodash.underscore", "pat-logger": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "jqtree": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "tinymce-textcolor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "picker.time": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper/pattern", "dropzone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "mockup-patterns-filemanager-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/utils", "mockup-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "plone-patterns-portletmanager": "/home/jesse/.buildout/eggs/plone.app.portlets-3.1.2-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/a9ba70927e8e4d0a9167cbfe94e31e1a", "mockup-patterns-upload-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "tinymce-code": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "marked": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-lists": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "bootstrap-alert": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "jquery": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "mockup-ui-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/ui", "tinymce-tabfocus": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "resource-plone-app-event-event-js": "temp_resources/b7d9323c660343b1a21eb50173578ee4", "tinymce-print": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate/pattern", "JSXTransformer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "tinymce-contextmenu": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "plone-patterns-toolbar": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "tinymce-visualblocks": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-patterns-resourceregistry-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "mockup-patterns-base": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/pattern", "mockup-patterns-livesearch": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "tinymce-searchreplace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "mockup-patterns-autotoc": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "mockup-patterns-resourceregistry": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry/pattern", "react": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "carouFredSel": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/carouFredSel", "pat-utils": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/544a2490d2864e9c8e576543585f5129", "mockup-patterns-moment": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/moment/pattern", "mockup-patterns-relateditems": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "bootstrap-tooltip": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "frontpage": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "tinymce-code": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "carouFredSel": {"deps": ["jquery"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "frontpage": {"deps": ["jquery"]}},
                    wrapShim: true,
                    name: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js',
                    exclude: ['jquery'],
                    out: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js',
                    optimize: "none"
                }
            },

            "plone": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "tinymce-advlist": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "tinymce-preview": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "mockup-patterns-tree": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-pagebreak": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "jquery.event.drag": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drag", "mockup-patterns-formautofocus": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-i18n": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n", "underscore": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/lodash/dist/lodash.underscore", "pat-logger": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "jqtree": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "tinymce-textcolor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "picker.time": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper/pattern", "dropzone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "mockup-patterns-filemanager-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/utils", "mockup-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "plone-patterns-portletmanager": "/home/jesse/.buildout/eggs/plone.app.portlets-3.1.2-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/a9ba70927e8e4d0a9167cbfe94e31e1a", "mockup-patterns-upload-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "tinymce-code": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "marked": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-lists": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "bootstrap-alert": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "jquery": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "mockup-ui-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/ui", "tinymce-tabfocus": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "resource-plone-app-event-event-js": "temp_resources/b7d9323c660343b1a21eb50173578ee4", "tinymce-print": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate/pattern", "JSXTransformer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "tinymce-contextmenu": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "plone-patterns-toolbar": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "tinymce-visualblocks": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-patterns-resourceregistry-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "mockup-patterns-base": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/pattern", "mockup-patterns-livesearch": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "tinymce-searchreplace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "mockup-patterns-autotoc": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "mockup-patterns-resourceregistry": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry/pattern", "react": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "carouFredSel": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/carouFredSel", "pat-utils": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/544a2490d2864e9c8e576543585f5129", "mockup-patterns-moment": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/moment/pattern", "mockup-patterns-relateditems": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "bootstrap-tooltip": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "frontpage": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "tinymce-code": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "carouFredSel": {"deps": ["jquery"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "frontpage": {"deps": ["jquery"]}},
                    wrapShim: true,
                    name: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone.js',
                    exclude: ['jquery'],
                    out: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.js',
                    optimize: "none"
                }
            },

            "resourceregistry": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "tinymce-advlist": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "tinymce-preview": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "mockup-patterns-tree": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-pagebreak": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "jquery.event.drag": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drag", "mockup-patterns-formautofocus": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-i18n": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n", "underscore": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/lodash/dist/lodash.underscore", "pat-logger": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "jqtree": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "tinymce-textcolor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "picker.time": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper/pattern", "dropzone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "mockup-patterns-filemanager-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/utils", "mockup-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "plone-patterns-portletmanager": "/home/jesse/.buildout/eggs/plone.app.portlets-3.1.2-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/a9ba70927e8e4d0a9167cbfe94e31e1a", "mockup-patterns-upload-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "tinymce-code": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "marked": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-lists": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "bootstrap-alert": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "jquery": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "mockup-ui-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/ui", "tinymce-tabfocus": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "resource-plone-app-event-event-js": "temp_resources/b7d9323c660343b1a21eb50173578ee4", "tinymce-print": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate/pattern", "JSXTransformer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "tinymce-contextmenu": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "plone-patterns-toolbar": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "tinymce-visualblocks": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-patterns-resourceregistry-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "mockup-patterns-base": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/pattern", "mockup-patterns-livesearch": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "tinymce-searchreplace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "mockup-patterns-autotoc": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "mockup-patterns-resourceregistry": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry/pattern", "react": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "carouFredSel": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/carouFredSel", "pat-utils": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/544a2490d2864e9c8e576543585f5129", "mockup-patterns-moment": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/moment/pattern", "mockup-patterns-relateditems": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "bootstrap-tooltip": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "frontpage": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "tinymce-code": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "carouFredSel": {"deps": ["jquery"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "frontpage": {"deps": ["jquery"]}},
                    wrapShim: true,
                    name: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry.js',
                    exclude: ['jquery'],
                    out: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js',
                    optimize: "none"
                }
            },

            "thememapper": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "tinymce-advlist": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "tinymce-preview": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "mockup-patterns-tree": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree/pattern", "tinymce-pagebreak": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "jquery.event.drag": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/lib/jquery.event.drag", "mockup-patterns-formautofocus": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-i18n": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n", "underscore": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/lodash/dist/lodash.underscore", "pat-logger": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "jqtree": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "tinymce-textcolor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "picker.time": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper/pattern", "dropzone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module", "mockup-patterns-filemanager-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce", "mockup-patterns-preventdoublesubmit": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-visualchars": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/utils", "mockup-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "plone-patterns-portletmanager": "/home/jesse/.buildout/eggs/plone.app.portlets-3.1.2-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/a9ba70927e8e4d0a9167cbfe94e31e1a", "mockup-patterns-upload-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring/pattern", "logging": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "tinymce-code": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "marked": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mockup-patterns-sortable": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-lists": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "bootstrap-alert": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "jquery": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "mockup-ui-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/js/ui", "tinymce-tabfocus": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "resource-plone-app-event-event-js": "temp_resources/b7d9323c660343b1a21eb50173578ee4", "tinymce-print": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "tinymce-link": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate/pattern", "JSXTransformer": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "tinymce-contextmenu": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "plone-patterns-toolbar": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "tinymce-visualblocks": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-patterns-resourceregistry-url": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "mockup-patterns-base": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/pattern", "mockup-patterns-livesearch": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "tinymce-searchreplace": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "mockup-patterns-autotoc": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "mockup-patterns-resourceregistry": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry/pattern", "react": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "carouFredSel": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/carouFredSel", "pat-utils": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/544a2490d2864e9c8e576543585f5129", "mockup-patterns-moment": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/moment/pattern", "mockup-patterns-relateditems": "/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems/pattern", "tinymce-nonbreaking": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "bootstrap-tooltip": "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "frontpage": "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "dropzone": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "tinymce-code": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "carouFredSel": {"deps": ["jquery"]}, "pat-utils": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "bootstrap-tooltip": {"deps": ["jquery"]}, "frontpage": {"deps": ["jquery"]}},
                    wrapShim: true,
                    name: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper.js',
                    exclude: ['jquery'],
                    out: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js',
                    optimize: "none"
                }
            },

        },
        sed: {
            
    sed0: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed1: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed2: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed3: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed4: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed5: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed6: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed7: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed8: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed9: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed10: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed11: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed12: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed13: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed14: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed15: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed16: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed17: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed18: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed19: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: 'src/operun/frontpage/browser/static',
      replacement: '../++resource++operun.frontpage',
    },

    sed20: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed21: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed22: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed23: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed24: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed25: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed26: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed27: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed28: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed29: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed30: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed31: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed32: {
      path: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.css',
      pattern: '/home/jesse/Development/GitHub/operun.frontpage',
      replacement: '',
    },

    sed33: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed34: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed35: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed36: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed37: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed38: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed39: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed40: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed41: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed42: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed43: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed44: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed45: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed46: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed47: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed48: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed49: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed50: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed51: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed52: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/operun/frontpage/browser/static',
      replacement: '../++resource++operun.frontpage',
    },

    sed53: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed54: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed55: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed56: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed57: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed58: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed59: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed60: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed61: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed62: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed63: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed64: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed65: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/home/jesse/Development/GitHub/operun.frontpage',
      replacement: '',
    },

    sed66: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed67: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed68: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed69: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed70: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed71: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed72: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed73: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed74: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed75: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed76: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed77: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed78: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed79: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed80: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed81: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed82: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed83: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed84: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed85: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/operun/frontpage/browser/static',
      replacement: '../++resource++operun.frontpage',
    },

    sed86: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed87: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed88: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed89: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed90: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed91: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed92: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed93: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed94: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed95: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed96: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed97: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed98: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/home/jesse/Development/GitHub/operun.frontpage',
      replacement: '',
    },

    sed99: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed100: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed101: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed102: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed103: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed104: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed105: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed106: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed107: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed108: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed109: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed110: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed111: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed112: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed113: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed114: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed115: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed116: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed117: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed118: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/operun/frontpage/browser/static',
      replacement: '../++resource++operun.frontpage',
    },

    sed119: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed120: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed121: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed122: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed123: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed124: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed125: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed126: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed127: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed128: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed129: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed130: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed131: {
      path: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/home/jesse/Development/GitHub/operun.frontpage',
      replacement: '',
    },

    sed132: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed133: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed134: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed135: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed136: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed137: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed138: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed139: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed140: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed141: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed142: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed143: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed144: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed145: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed146: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed147: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed148: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed149: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed150: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed151: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/operun/frontpage/browser/static',
      replacement: '../++resource++operun.frontpage',
    },

    sed152: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed153: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed154: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed155: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed156: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed157: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed158: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed159: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed160: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed161: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed162: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed163: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/.buildout/eggs/mockup-2.0.12-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed164: {
      path: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/home/jesse/Development/GitHub/operun.frontpage',
      replacement: '',
    },

        },
        uglify: {
            
        "frontpage": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.js': ["/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage-compiled.js"]
          }
        },

        "plone-logged-in": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js': ["/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js"]
          }
        },

        "plone": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.min.js': ["/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-compiled.js"]
          }
        },

        "resourceregistry": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.min.js': ["/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js"]
          }
        },

        "thememapper": {
          options: {
            sourceMap: true,
            sourceMapName: '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js': ["/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js"]
          }
        },

        },
        watch: {
            scripts: {
                files: ["/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage.js", "/home/jesse/Development/GitHub/operun.frontpage/src/operun/frontpage/browser/static/frontpage.less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone.js", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/plone.less", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry.js", "/home/jesse/.buildout/eggs/Products.CMFPlone-5.0-py2.7.egg/Products/CMFPlone/static/resourceregistry.less", "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper.js", "/home/jesse/.buildout/eggs/plone.app.theming-1.2.14-py2.7.egg/plone/app/theming/browser/resources/thememapper.less"],
                tasks: ['requirejs', 'less', 'sed', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sed');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile-all', ['requirejs', 'less', 'sed', 'uglify']);
    
grunt.registerTask('compile-frontpage',["requirejs:frontpage", 'less:frontpage', 'sed', 'uglify:frontpage']);
grunt.registerTask('compile-plone-logged-in',["requirejs:plone-logged-in", 'less:plone-logged-in', 'sed', 'uglify:plone-logged-in']);
grunt.registerTask('compile-plone',["requirejs:plone", 'less:plone', 'sed', 'uglify:plone']);
grunt.registerTask('compile-resourceregistry',["requirejs:resourceregistry", 'less:resourceregistry', 'sed', 'uglify:resourceregistry']);
grunt.registerTask('compile-thememapper',["requirejs:thememapper", 'less:thememapper', 'sed', 'uglify:thememapper']);
}
