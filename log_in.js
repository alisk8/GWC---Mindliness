function enter(){
    if (document.getElementById("email").value != "" && document.getElementById("pass").value != ""){
      document.getElementById("get_rid_on_click").style.display = "none";
      document.getElementById("show_on_click").style.display = "block";
    }
    else{
      alert("Fill Out The Credentials First")
    }
  }

  function sign_up(){
    if (document.getElementById("email").value != "" && document.getElementById("pass").value != ""){
        document.getElementById("get_rid_on_click").style.display = "none";
        document.getElementById("show_on_click1").style.display = "block";
    }
    else{
        alert("Fill Out The Credentials First")
      }
  }