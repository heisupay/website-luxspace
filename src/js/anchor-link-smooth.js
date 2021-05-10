const smoothScrollAnchor = document.querySelectorAll("a[href^='#']")
for(lef index = 0; index< smoothScrollAnchor.length; index++){
  const el = smoothScrollAnchor[index];
  el.addEventListener("click", function(ev){
    ev.preventDefault();
    console.log(this.getAttribute("href"));
    if(document.getElementById(this.getAttribute("href").replace("#","")))
    document.querySelector(this.getAttribute("href")).scrollIntroView({
      behavior:"smooth",
    });
  });
}
