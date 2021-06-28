window.addEventListener('load', main);

function main() {
    // showBorderOnActiveLink();
    addEventListeners();
 
}

function addEventListeners() {

    const burgerBars = document.getElementById('burger-click');
    burgerBars.addEventListener('click', openCloseMobileNavBar);

    const sideLinks = document.getElementById('close');
    const sideLinks1 = document.getElementById('close1');
    const sideLinks2 = document.getElementById('close2');
    const sideLinks3 = document.getElementById('close3');

    sideLinks.onclick = closeSidebarOnLinks
    sideLinks1.onclick = closeSidebarOnLinks
    sideLinks2.onclick = closeSidebarOnLinks
    sideLinks3.onclick = closeSidebarOnLinks

    const current = document.getElementById("current");
    const opacity = 0.6;
    const imgs = document.querySelectorAll(".img");
    imgs.forEach(img => {
      img.addEventListener("click", (e) => {
        //reset opacity
        imgs.forEach(img => {img.style.opacity = 1;
        });
      current.src = e.target.src;
      //adding class 
      //current.classList.add("fade-in");
      //opacity
      e.target.style.opacity = opacity; 
      });
    });

    window.addEventListener('scroll', changeHeaderBgOnScroll);
}


function openCloseMobileNavBar() {
    const barInvis = document.getElementById('invis-bar');

    const menu = document.getElementById('mobile-dropdown');

    if(barInvis.classList == 'invis'){
      barInvis.classList.remove('invis')
    } else {
      barInvis.classList.add('invis');
    }
    
    if(menu.style.height == '100%') {
      menu.style.height = null;
    } else {
      menu.style.height = '100%';
    }
}

/** Fade in header background to white when scrollY is on height 100 */
function changeHeaderBgOnScroll() {
  const headerBlock = document.querySelector('header');
  let top = window.scrollY;
  if (top >= 100) {
      headerBlock.classList.add('header-white');
      
  } else {
      headerBlock.classList.remove('header-white');
      
  }

}

function closeSidebarOnLinks() {
  const menu = document.getElementById('mobile-dropdown');
  menu.style.height = null;
}

