var container = document.getElementById('container');
var btn = document.getElementById('create');

btn.addEventListener("click",function()
{
	var text = document.getElementById('textarea').value;
	document.getElementById('textarea').value = " ";
	createDiv(text);
})

function createDiv(textValue)
{
	var makeDiv = document.createElement('div');
	makeDiv.setAttribute("class", "createdDiv");
	container.appendChild(makeDiv);
		var makeP = document.createElement('p');
		makeDiv.appendChild(makeP);
		makeP.innerHTML = textValue;
		var btn = document.createElement('button');
		btn.setAttribute("class","delete");
		btn.innerHTML="delete";
		makeDiv.appendChild(btn);
		btn.addEventListener("click", function()
		{
			container.removeChild(makeDiv);
		})
}

