//Javascript Document


(function($){
		$.fn.scrollx= function(options){
			var _this = this,
				lock = false;

			options = $.extend({
				'scrollCon':'.roll-list',
				'prev':'#prev',
				'next':'#next',
				'scrollSpeed':500,
				'everyWidth':0,
				'currIndex':0
					
			},options);
			
			_this.find(options.scrollCon).wrap("<div class='roll-inner'></div>").parent().append(_this.find(options.scrollCon).clone());
			
			function rollx(index){
				if(!_this.find(options.scrollCon).parent().is(":animated")){
					_this.find(options.scrollCon).parent().animate({'marginLeft':-index*options.everyWidth},{duration: options.scrollSpeed, queue: true, complete:function(){
						if(index == _this.find(options.scrollCon).find('li').size()/2){
							_this.find(options.scrollCon).parent().css('marginLeft',0);
							options.currIndex = index =0;
						}	
					}
					});
				   
				}
			}
			
			$(options.prev).on('click',function(){
				controlPN($(this));
			});
			
			$(options.next).on('click',function(){
				controlPN($(this));	
			});
			
			function controlPN(obj){
				options.currIndex += $(obj).is(options.next) ? 1:-1;
				if(options.currIndex == -1){
					_this.find(options.scrollCon).parent().css('marginLeft',-_this.find(options.scrollCon).find('li').size()/2*options.everyWidth);
					options.currIndex +=(_this.find(options.scrollCon).find('li').size()/2)
				}
				rollx(options.currIndex);
				
			}
		
			return _this;
		}
	
})(jQuery)