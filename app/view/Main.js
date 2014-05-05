Ext.define('Buildtime.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.TabPanel'
    ],
    config: {
        layout: 'hbox',
        fullscreen: true,
        items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Build time'
            },
            {
                xtype: 'tabpanel',
                tabBarPosition: 'bottom',
                flex: 1,
                items: [
                    {
                        title: 'Current',
                        iconCls: 'home',

                        styleHtmlContent: true,
                        scrollable: true,

                        html: [
                            "<p>Calculate the time it takes to build something.</p>",
                            "<p>Added items from the catalogue appears here.</p>"
                        ].join("")
                    },
                    {
                        title: 'Catalogue',
                        iconCls: 'action',


                    }
                ]
            }
        ]
    }
});
