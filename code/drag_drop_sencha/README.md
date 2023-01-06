# Ext.js - Drag and Drop

 A `drag` operation is a click action on some UI element, while the mouse button is held down and the mouse is moved. A drop operation occurs when the mouse button is released after a `drag` operation

 ## Syntax

 Adding drag and drop class to the draggable targets.
 
 var dd = Ext.create('Ext.dd.DD', el, 'imagesDDGroup', {
   isTarget: false
});