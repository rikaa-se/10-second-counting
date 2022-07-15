document.getElementById("start_button").onclick = function(e) {

  var name = document.getElementById("start_button").textContent;
  document.querySelector('#timer').textContent = "count-up..";

  if (name == "Start..") {
    document.getElementById("start_button").textContent  = "Stop";
	e.preventDefault();
    var count = 0;
    var id = setInterval(function(){
      count++;
      if( document.getElementById("start_button").textContent  == "Start..") {
		clearInterval(id);
		document.querySelector('#timer').textContent = count + "sec!!";
	  }
    },1000);
  }else{
    document.getElementById("start_button").textContent  = "Start..";
	count = 0;
	document.querySelector('#timer').textContent = "";
  }
}
