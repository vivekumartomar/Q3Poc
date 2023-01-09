Ext.onReady(function() {
    Ext.create('Ext.container.Container', {
       renderTo : Ext.getBody(),
       layout : {
          type :'fit'	
       },
       width : 600,
       defaults: {
          bodyPadding: 15
       },
       items : [{
          title: 'Panel1',
          html : 'This is panel 1'
       },{
          title: 'Panel2',
          html : 'This is panel 2'
       },{
          title: 'Panel3',
          html : 'This is panel 3'
       },{
          title: 'Panel4',
          html : 'This is panel 4'
       }]
    });
 });