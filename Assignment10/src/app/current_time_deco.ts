export function FormatDate(constructorFn:Function){
    const dtm=document.getElementById("")! as HTMLInputElement;
    console.log(dtm)
    setInterval(function() {
       dtm.innerHTML=new Date().toLocaleString();
   }, 1000);

}
