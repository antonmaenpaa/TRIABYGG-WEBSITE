window.addEventListener('load', main);

function main() {
    // showBorderOnActiveLink();
    addEventListeners();
 
}

function addEventListeners() {

    const burgerBars = document.getElementById('burger-click');
    burgerBars.addEventListener('click', openCloseMobilaNavBar);

    window.addEventListener('scroll', changeHeaderBgOnScroll);
}


function openCloseMobilaNavBar() {

    const menu = document.getElementById('mobile-dropdown');
    
    if(menu.style.height == '100%') {
      menu.style.height = null;
    } else {
      menu.style.height = '100%';
    }
}

/** Fade in header background to white when scrollY is on height 600 */
function changeHeaderBgOnScroll() {
  const headerBlock = document.querySelector('header');
  let top = window.scrollY;
  if (top >= 100) {
      headerBlock.classList.add('header-white');
      
  } else {
      headerBlock.classList.remove('header-white');
      
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

