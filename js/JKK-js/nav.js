var oHTBa = document.querySelectorAll("#cjd-header-tab-left a");
	oHTBa[2].style.color="#FF7066";
	// var oHTBa=oHTB.children;
	for(var i=0;i<oHTBa.length;i++){
	    oHTBa[i].index=i;
	    oHTBa[i].onclick=function(){
	        for(var i=0;i<oHTBa.length;i++){
	            oHTBa[i].className="";
	            oHTBa[i].style.color="#666666";
	            oHTBa[0].children[0].src="../../images/CJD-img/header-idea1.png";
	            oHTBa[1].children[0].src="../../images/CJD-img/header-sercice1.png";
	            oHTBa[2].children[0].src="../../images/CJD-img/header-article1.png"
	        }
	        this.className="cjd-header-tab-style";
	        this.style.color="#FF7066";
	        if(this.index==0){
	            oHTBa[0].children[0].src="../../images/CJD-img/header-idea2.png";
	        }else if(this.index==1){
	            oHTBa[1].children[0].src="../../images/CJD-img/header-sercice2.png"
	        }else {
	            oHTBa[2].children[0].src="../../images/CJD-img/header-article2.png"
	        }
	    }
	}