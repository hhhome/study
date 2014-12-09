function ScrollPic(sContentId, prevId, nextId){
	this.sContentId = sContentId;
	this.prevId = prevId;
	this.nextId = nextId;
	this.frameWidth = 0;
	this.everyWidth = 0;
	if (!ScrollPic.childs) {
        ScrollPic.childs = []
    };
    this.ID = ScrollPic.childs.length;
    ScrollPic.childs.push(this);
}

ScrollPic.prototype={
	init: function(){

		if (!this.sContentId) {
			throw new Error('必须指定sContentId');
			return
		};

		this.sContentDiv = jBase.$$(this.sContentId);
        if (!this.sContentDiv) {
            throw new Error("sContentId不是正确的对象.(sContentId = \"" + this.sContentId + "\")");
            return
        };
        this.initLayout();
		
		
		if(this.prevId){
			this.prevObj = jBase.$$(this.prevId);
			
			jBase.addEvent(this.prevObj,'mousedown',Function("ScrollPic.childs[" + this.ID + "].move()"));
		}
		if(this.nextId){
			this.nextObj = jBase.$$(this.nextId);
			//jBase.addEvent(this.nextObj,'mousedown',this.move());
		}
	},
	initLayout: function(){
		this.cLayout = document.createElement("div");
		this.cItem01 = document.createElement("div");
	 	this.cItem02 = document.createElement("div");
		
		this.sContentDiv.style.width = this.frameWidth + 'px';
		this.sContentDiv.style.overflow = "hidden";
		this.cItem01.innerHTML = this.cItem02.innerHTML = this.sContentDiv.innerHTML;
		this.sContentDiv.innerHTML = "";

		this.sContentDiv.appendChild(this.cLayout);
		this.cLayout.style.overflow = "hidden";
		this.cLayout.style.zoom = 1;
		this.cLayout.style.width = "99999px";

		this.cLayout.appendChild(this.cItem01);
		this.cLayout.appendChild(this.cItem02);
		this.cItem01.style.cssFloat = 'left';
		this.cItem01.style.display = 'inline';
		this.cItem02.style.cssFloat = 'left';
		this.cItem02.style.display = 'inline';
	},
	move: function(){
		//alert(this.sContentDiv.scrollLeft);
		if (this.sContentDiv.scrollLeft - this.everyWidth <= 0) {
			alert(11);
            this.sContentDiv.scrollLeft = this.cItem01.scrollWidth + this.sContentDiv.scrollLeft - this.everyWidth
        }
	}
	


}