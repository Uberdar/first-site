function upDate(previewPic){
  document.getElementById('image').style.backgroundImage = "url("+ previewPic.src +")";
    document.getElementById('image').innerHTML = "";
	}

	function unDo(){
   document.getElementById('image').style.backgroundImage = "url()";
   document.getElementById('image').innerHTML = "Hover over an image to display here.";
	}