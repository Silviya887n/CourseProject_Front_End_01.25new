function myFunction() {
    var sdrp=document.getElementById("myDropdown");
 document.getElementById("myDropdown").classList.toggle("show");
 var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown = dropdowns1[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}

function myFunction1() {
  var sdrp1=document.getElementById("myDropdown1");
 document.getElementById("myDropdown1").classList.toggle("show");
 var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}

      /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown = dropdowns1[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  
  }





  // if (!event.target.matches('.dropbtn')) {
  //   var dropdowns1 = document.getElementsByClassName("dropdown-content1");
  //   var i;
  //   for (i = 0; i < dropdowns1.length; i++) {
  //     var openDropdown = dropdowns1[i];
  //     if (openDropdown.classList.contains('show')) {
  //       openDropdown.classList.remove('show');
  //     }
  //   }
  // }
}
function toggleMenu()
{ var menu = document.getElementById('menu');

  if (menu.style.display==="block"){
    
    menu.style.display="none";
  }
  else{
    menu.style.display="block";
  }



//  if (menu.classList.contains('hidden')) 
//  { 
//   menu.classList.remove('hidden'); 
//   menu.classList.add('show');
// } 
//  else 
//  { 
//   menu.classList.remove('show');
//   menu.classList.add('hidden'); }

}