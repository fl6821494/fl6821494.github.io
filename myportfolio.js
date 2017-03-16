function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		var newClassName= element.className;
		newClassName+=" ";
		newClassName+=value;
		elem.className=newClassName;
	}
}
function prepareNavbar(){
	var navbar=document.getElementById("navbar");
	var links=navbar.getElementsByTagName("a");
	var title=document.getElementById('title');
	title.onmouseover=function(){
		this.style.backgroundColor="#ff0";
	}
	title.onmouseout=function(){
		this.style.backgroundColor="#fff";
	}
	
	
	for(var i=0;i<links.length;i++){
		links[i].onmouseover=function(){
			this.style.color="#fff";
		}
		links[i].onmouseout=function(){
			this.style.color="#000";
		}
	}
}
addLoadEvent(prepareNavbar);