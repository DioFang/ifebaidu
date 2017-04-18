window.onload = init();

//初始化事件处理程序 
function init() {
	var panel = document.getElementById("panel");
	var body = document.getElementsByTagName("body")[0];

	panel.oncontextmenu = showMenu;
	body.onclick = closeMenu;
}

function showMenu(event) {
	var menu = document.getElementById('menu');
		panel = document.getElementById("panel");

	var x = event.clientX - panel.offsetLeft;
	var y = event.clientY - panel.offsetTop;
	var height = menu.offsetHeight;
	var width = menu.offsetWidth;

	var posX = x > width ? x - width : x;
	var posY = y > height ? y - height : y;

	menu.style.visibility = "visible";
	menu.style.left = posX + "px";
	menu.style.top = posY + "px";

	event.preventDefault();
	event.stopPropagation();
 }

 // 关闭菜单
 function closeMenu() {
 	var menu = document.getElementById("menu");
 	menu.style.visibility = "hidden";
 }
