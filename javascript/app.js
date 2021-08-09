window.addEventListener('load', main);

function main() {
    addEventListeners();
    AOS.init();
 
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

    window.addEventListener('scroll', changeHeaderBgOnScroll);
}

function openCloseMobileNavBar() {
    const menu = document.getElementById('mobile-dropdown');
    const barOne = document.querySelector(".bar-one");
    const barTwo = document.querySelector(".bar-two");
    console.log(barOne)

    
    if(menu.style.height == '100%') {
      menu.style.height = null;
      barOne.classList.remove('open');
      barTwo.classList.remove('open1');
    } else {
      menu.style.height = '100%';
      barOne.classList.add('open');
      barTwo.classList.add('open1');
      
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
  const barOne = document.querySelector(".bar-one");
  const barTwo = document.querySelector(".bar-two");
  menu.style.height = null;
  barOne.classList.remove('open');
  barTwo.classList.remove('open1');

}

