let menutoggler=document.querySelector(".toggle");
let mobilenav=document.querySelector(".mobilenavcontainer");

menutoggler.onclick=function(){
  menutoggler.classList.toggle("active");
  mobilenav.classList.toggle("active");
}

let anav=document.querySelectorAll(".anav");

for (let i = 0; i < anav.length; i++) {
  anav[i].addEventListener("click",()=>{
    menutoggler.classList.toggle("active");
    mobilenav.classList.toggle("active");
  })
}
