(function(){
	var schoolArr=[["北京大学","北京大学1","北京大学2","北京大学3"],["上海大学","上海大学1","上海大学2","上海大学3"],["浙江大学","浙江大学1","浙江大学2","浙江大学3"],["广州大学","广州大学1","广州大学2","广州大学3"]];
	window.onload=function(){
		var city=document.getElementById('city');
		var school=document.getElementById('school');
		var form=document.getElementsByTagName("form")[0];
		var inSchool=document.getElementById("student");
		var outSchool=document.getElementById('noStudent');
		var span=document.getElementsByTagName("span");
		function checkRadio(ev){
			var ev = ev || window.event;
			var target = ev.target || ev.srcElement;
			if (target.name&&target.name == "sizeChoose") {
				if (target.id==="student") {
					span[0].style.display="block";
					span[1].style.display="none";
				}
				else if(target.id="noStudent") {
					span[1].style.display="block";
					span[0].style.display="none";
				}
			}
		}
		function paint(){
			var str="";
			var arr=schoolArr[this.selectedIndex];
			for(var i=0; i<arr.length; i++){
				str+="<option>"+arr[i]+"<\/option>";
			}
			school.innerHTML=str;
		}
		form.onclick=checkRadio;
		city.onclick=paint;
	}
})();