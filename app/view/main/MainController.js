/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SenchaThemerDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onChangeTheme: function(menu, item){
        var themeName = item.text.toLowerCase().replace(' ', '-');

        localStorage.setItem('tag', themeName);
        window.location.reload();
    },

    menuItemClick: function (view, record) {
        const selectedId = record.get('id');
        const mainContentContainer = Ext.ComponentQuery.query('#maincontent')[0];

        if (!mainContentContainer) {
            console.error('Main content container not found');
            return;
        }

        mainContentContainer.removeAll();
        switch (selectedId) {
            case 'home':
                mainContentContainer.add({
                    xtype: 'dashboard',
                });
                break;
            case 'users':
                mainContentContainer.add({
                    xtype: 'user',
                });
                break;
            case 'groups':
                mainContentContainer.add({
                    xtype: 'chartItem',
                });
                break;
            case 'settings':
                mainContentContainer.add({
                    xtype: 'faq',
                });
                break;
            default:
                break;
        }
    }
});
