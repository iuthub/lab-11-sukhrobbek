var textArea = document.getElementById("text");
var checkBox = document.getElementById("ch1");
var txt = textArea.value;
function btnclick(){
	//document.getElementsByClassName("");
	textArea.style.fontSize = "24pt";
	textArea.style.color = "red";
}
function checkclick(){
	if(ch1.checked){
		textArea.style.fontWeight = "bold";
		textArea.style.textDecoration = "underline";
		textArea.style.color = "green";
		textArea.style.textDecoration = "blink";
		textArea.style.textDecoration = "italic";
	}
	else{
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}
function btn2click(){
	textArea.value = txt.toUpperCase().split(".").join("-izzle!");
} 
