Ext.onReady(function() {
    Ext.create('Ext.container.Container', {
       renderTo : Ext.getBody(),
       layout : 'accordion' ,
       width : 600,
       
       items : [{
          title : 'Panel 1',
          html : 'Panel 1 html content'
       },{
          title : 'Panel 2',
          html : 'Panel 2 html content'
       },{
          title : 'Panel 3',
          html : 'Panel 3 html content'
       },{
          title : 'Panel 4',
          html : 'Panel 4 html content'
       },{
          title : 'Panel 5',
          html : 'Panel 5 html content'
       }]
    });
 });