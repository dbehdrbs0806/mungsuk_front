
let check1 = false; 
let sub_menu;
function Navbar_Scroll(menu) {
    sub_menu = document.getElementsByClassName(menu)[0];
    if (check1 === false) {
      sub_menu.style.display = "block";
      check1 = true;
    }
    else if (check1 === true) {
      sub_menu.style.display = "none";
      check1 = false;
    }
}
