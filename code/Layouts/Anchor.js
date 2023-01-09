Ext.onReady(function() {
    Ext.create('Ext.container.Container', {
       renderTo : Ext.getBody(),
       layout : 'anchor' ,
       width : 600,
       
       items : [{
          title : 'Panel 1',
          html : 'panel 1',
          height : 100,
          anchor : '50%'
       },{
          title : 'Panel 2',
          html : 'panel 2',
          height : 100,
          anchor : '100%'
       },{
          title : 'Panel 3',
          html : 'panel 3',
          height : 100,
          anchor : '-100'
       },{
          title : 'Panel 4',
          html : 'panel 4',
          anchor : '-70, 500'
       }]
    });
 });