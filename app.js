/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SenchaThemerDemo.Application',

    name: 'SenchaThemerDemo',

    requires: [
        // This will automatically load all classes in the SenchaThemerDemo namespace
        // so that application classes do not need to require each other.
        'SenchaThemerDemo.*'
    ],

    // The name of the initial view to create.
    mainView: 'SenchaThemerDemo.view.main.Main'
});
