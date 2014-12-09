(function(){
	if (!window.jBase) {
		window['jBase'] = {};
	};
	window['jBase'] = {
		
		$$:function(id){

			return document.getElementById(id);
		},
		addEvent: function(node,type,listener){

			if (node.addEventListener) {

				node.addEventListener( type, listener, false);
				return true;

			}else if(node.attachEvent){

				node['e'+type+listener] = listener;
				node[type+listener] = function(){
					node['e'+type+listener](window.event);
				}
				node.attachEvent( 'on'+type, node[type+listener]);
				return true;

			}
			return false;
		},
		removeEvent: function(node,type,listener){

			if (node.removeEventListener) {

				node.removeEventListener( type,listener,false);
				return true;

			}else if(node.detachEvent){

				node.detachEvent( 'on'+type, node[type+listener] );
				node[type+listener] = null;
				return true;

			};	

			return false;
		}
	}
})();