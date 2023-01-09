Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
       renderTo : Ext.getBody(),
       layout : 'column' ,
       xtype: 'layout-column',
       requires: ['Ext.layout.container.Column'],
       width : 600,
       
       items: [{
          title : 'First Component width 30%',
          html : 'This is First Component',
          columnWidth : 0.30
       },{
          title : 'Second Component width 40%',
          html : '<p> This is Second Component </p> <p> Next line for second component </p>',
          columnWidth : 0.40
       },{
          title : 'Third Component width 30%',
          html : 'This is Third Component' ,
          columnWidth : 0.30
       }]
    });
 });