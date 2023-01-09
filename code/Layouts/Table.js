Ext.onReady(function() {
    Ext.create('Ext.container.Container', {
       renderTo : Ext.getBody(),
       layout : {
          type :'table',
          columns : 3,
          tableAttrs: {
             style: {
                width: '100%'
             }
          }               
       },
       width:600,
       height:200,
       
       items : [{
          title : 'Panel1',
          html : 'This panel has colspan = 2',
          colspan :2
       },{
          title : 'Panel2',
          html : 'This panel has rowspan = 2',
          rowspan: 2
       },{
          title : 'Panel3',
          html : 'This  s panel 3'
       },{
          title : 'Panel4',
          html : 'This is panel 4'
       },{
          title : 'Panel5',
          html : 'This is panel 5'
       }]
    });
 });