window.onload=function(){
	var ba=document.querySelector(".jk-banner");
	var odiv=ba.getElementsByClassName("jk-banner-div");
	var oul=ba.getElementsByTagName("ul")[0];

	for(var i=0;i<oul.children.length;i++){
		oul.children[i].index=i;
		oul.children[i].onclick=function(){
			for(var i=0;i<oul.children.length;i++){
				oul.children[i].className="";
			};
			for(var i=0;i<odiv.length;i++){
				odiv[i].id="";
			};
			console.log(this.index)
			odiv[this.index].id="show"
			this.className="jkk-select"
		}
	}
}