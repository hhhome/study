function ScrollPic(sContentId){
	this.sContentId = sContentId;
	this.prev = prev;
	this.next = next;
	this.frameWidth = 0;
	this.cLayout = document.createElement("div");
	this.cItem01 = document.createElement("div");
	this.cItem02 = document.createElement("div");
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
	},
	initLayout: function(){
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
	}

	


}