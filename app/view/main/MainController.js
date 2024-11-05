/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SenchaThemerDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onChangeTheme:function(menu, item){debugger
        var themeName = item.text.toLowerCase().replace(' ', '-');

        localStorage.setItem('tag', themeName);

        window.location.reload();
    }
});
