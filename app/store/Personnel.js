Ext.define('SenchaThemerDemo.store.Personnel', {
    // extend: 'Ext.data.Store',

    // alias: 'store.personnel',

    // model: 'SenchaThemerDemo.model.Personnel',

    // data: { 
    //     items: [
    //         { 
    //             name: 'Jean Luc',
    //             email: "jeanluc.picard@enterprise.com",
    //             phone: "555-111-1111",
    //             department: "Commanding Officer",
    //             position: "Captain",
    //             age: 55,
    //             gender: "Male",
    //             hireDate: "2155-01-01",
    //             salary: 120000,
    //             status: "Active",
    //             notes: "Skilled diplomat and tactician."
    //         },
    //         { 
    //             name: "Worf",
    //             email: "worf.moghsson@enterprise.com",  
    //             phone: "555-222-2222",
    //             department: "Security Officer",
    //             position: "Lieutenant Commander",
    //             age: 45,
    //             gender: "Male",
    //             hireDate: "2160-02-15",
    //             salary: 95000,
    //             status: "Active",
    //             notes: "Suliban-enhanced Klingon warrior."
    //         },
    //         { 
    //             name: "Deanna",
    //             email: "deanna.troi@enterprise.com",    
    //             phone: "555-333-3333",
    //             department: "Counselor",
    //             position: "Lieutenant Commander",
    //             age: 32,
    //             gender: "Female",
    //             hireDate: "2160-03-01",
    //             salary: 90000,
    //             status: "Active",
    //             notes: "Betazoid empath and counselor."
    //         },
    //         { 
    //             name: "Data",
    //             email: "mr.data@enterprise.com",        
    //             phone: "555-444-4444",
    //             department: "Chief Operations Officer",
    //             position: "Commander",
    //             age: 39,
    //             gender: "Male",
    //             hireDate: "2160-04-15",
    //             salary: 110000,
    //             status: "Active",
    //             notes: "Android crew member with vast knowledge base."
    //         }
    //     ]
    // },

    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // }
    extend: 'Ext.data.BufferedStore',
    alias: 'store.bufferforum',
    fields: [
        'firstName', 'lastName', 'address', 'company', 'title',
        {
            name: 'id',
            type: 'int'
        }],

    leadingBufferZone: 100,
    pageSize: 50,
    remoteSort: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
        reader: {
            rootProperty: 'users',
            totalProperty: 'totalCount'
        }
    }
});
