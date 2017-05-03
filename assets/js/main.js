
var lastScrollTop = 0;
var a = document.getElementsByClassName("menu-link");
window.addEventListener("load", function (e){
  e.preventDefault();
})
window.addEventListener("scroll", function(){
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop){
    document.getElementById("nav-header").classList.add("solid");
    document.getElementById("nav-header").classList.add("header-in");
    document.getElementById("logo").classList.add("logo-2");
    document.getElementById("logo").classList.remove("logo");
    document.getElementsByClassName("menu-link")[4].classList.remove("hidden");
    document.getElementsByClassName("menu-link")[4].classList.add("pink");

    for(var i = 0 ; i<a.length; i++){ a[i].style.color="black";}
  } else {
    document.getElementById("nav-header").style.opacity = 1;

    if(currentScroll<=3){
      document.getElementById("logo").classList.add("logo");
      document.getElementById("logo").classList.remove("logo-2");
      document.getElementsByClassName("menu-link")[4].classList.add("hidden");
      document.getElementById("nav-header").classList.remove("solid");
      document.getElementById("nav-header").classList.remove("header-in");
      for(var i = 0 ; i<a.length; i++){ a[i].style.color="white";}
    }
  }
  lastScrollTop = currentScroll;
}, false);
