
let blr = document.querySelector(".bg");
const loading = document.querySelector('.loading-text');
let load = 0;

let int = setInterval(blur, 30)
 function blur() {
   load++
   if (load > 99){
       clearInterval(int)
   }
   loading.innerHTML=`${load}%`
   loading.style.opacity= scale(load, 0, 100, 1, 0)
   blr.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
   
}


//function to map a range of numbers to another range of numbers in js
const scale = (num, in_min, in_max, out_min, out_max)=>{
    return ((num-in_min) * (out_max-out_min)) / (in_max-in_min)+out_min
}
blur();