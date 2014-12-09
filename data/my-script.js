document.body.style.border = "5px solid red";
for (var i=0; i<document.body.children.length; i++) {
	document.body.children[i].style.border = "5px solid yellow";
	for (var j=0; j<document.body.children[i].children.length; j++) {
		document.body.children[i].children[j].style.border = "5px solid green";
		for (var k=0; k<document.body.children[i].children[j].children.length; k++) {
			document.body.children[i].children[j].children[k].style.border = "5px solid blue";
		}
	}
}

