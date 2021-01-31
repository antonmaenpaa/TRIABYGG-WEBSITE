window.addEventListener('load', main);

function main() {
    // showBorderOnActiveLink();
    addEventListeners();
 
}

function addEventListeners() {

    const burgerBars = document.getElementById('burger-click');
    burgerBars.addEventListener('click', openSideBar);
}


function openSideBar() {

    const menu = document.getElementById('mobile-dropdown');
    
    if(menu.style.height === 0 +'%') {
      menu.style.height = 100 +'%';
    } else {
      menu.style.height = 0 +'%'
    }
}

// function showBorderOnActiveLink() {


//     var header = document.getElementById("links");
//     var btns = header.getElementsByClassName("nav-links");
//     for (var i = 0; i < btns.length; i++) {
//       btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       if (current.length > 0) { 
//         current[0].className = current[0].className.replace(" active", "");
//       }
//       this.className += " active";
//       });
//     }

//  }

