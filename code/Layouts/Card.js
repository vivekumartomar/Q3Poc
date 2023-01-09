Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
       renderTo: Ext.getBody(),
       requires: ['Ext.layout.container.Card'],
       layout: 'card',
       width: 600,
       height: 200,
       bodyPadding: 15,
       
       defaults: {
          border:false
       },
       defaultListenerScope: true,
       
       bbar: ['->',
       {
          itemId: 'card-prev',
          text: '« Previous',
          handler: 'showPrevious',
          disabled: true
       },{
          itemId: 'card-next',
          text: 'Next »',
          handler: 'showNext'
       }],
 
       items: [{
          id: 'card0',
          html: '<h2> This is card wizard layout </h2> <p> This is first card </p> <p> Please click the "Next" button to continue... </p>'
       },{
          id: 'card1',
          html: '<p> This is second card </p> <p> Please click the "Next" button for next card and "Previous" button for previous card... </p>'
       },{
          id: 'card2',
          html: '<p> This is final card </p> <p> Please click the "Previous" button for previous card... </p>'
       }],
    
       showNext: function () {
          this.cardPanelNavigation(1);
       },
    
       showPrevious: function (btn) {
          this.cardPanelNavigation(-1);
       },

       cardPanelNavigation: function (incr) {
          var me = this;
          var l = me.getLayout();
          var i = l.activeItem.id.split('card')[1];
          var next = parseInt(i, 10) + incr;
          l.setActiveItem(next);
          me.down('#card-prev').setDisabled(next===0);
          me.down('#card-next').setDisabled(next===2);
       }
    });
 });