let popup = document.getElementById("popup");
let info = document.getElementsByClassName("series-info");
let series = document.getElementsByClassName("model-gap");
let photo = document.getElementsByClassName("hidephoto");
let video = document.getElementsByClassName("showvideo");
let column2 = document.getElementById("column2");
function openPopup() {
	document.location = "#";
	popup.classList.add("open-popup");
}
function closePopup() {
	popup.classList.remove("open-popup");
}
function showinfo(n){
	let i;
	for(i=0;i<info.length;i++){
		info[i].style.display = "none";
	}
	info[n-1].style.display = "block";
	column2.style.margin = "0%";
	for(i=0;i<series.length;i++){
		series[i].style.display = "none";
	}
	photo[n-1].style.display = "none";
	video[n-1].style.display = "block";
	series[n-1].style.display = "block";
}
function hideinfo(n){
	info[n-1].style.display = "none";
	column2.style.margin = "20% 0 0 0";
	document.location = "#";
	for(i=0;i<series.length;i++){
		video[i].style.display = "none";
		series[i].style.display = "block";
		photo[i].style.display = "block";
		series[i].style.animation = "fadein 3s";
	}
}
function searchmodel(){
	model = document.getElementById("search").value;
	if(model === "c class"){
		showinfo(1);
	}
	if(model === "e class"){
		showinfo(3);
	}
	if(model === "s class"){
		showinfo(2);
	}
	if(model === "g class"){
		showinfo(4);
	}
}