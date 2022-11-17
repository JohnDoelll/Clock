
const hour=document.getElementById("hour");
const minut=document.getElementById("minut");
const second=document.getElementById("second");

function soatYurishi(){
    var date=new Date();
    const secondRatio=(date.getSeconds()/60)*360;
    const minutRatio=(secondRatio+date.getMinutes()/60)*360;
    const hourRatio=(minutRatio+date.getHours()/12)*360;
    soatRatio(second,secondRatio);
    soatRatio(minut,minutRatio);
    soatRatio(hour,hourRatio);
    document.getElementById("date").innerHTML=date.getDate();
    var x=date.getMonth();
    switch(x){
        case 0:document.getElementById("month_name").innerHTML="Yanvar";break;
        case 1:document.getElementById("month_name").innerHTML="Fevral";break;
        case 2:document.getElementById("month_name").innerHTML="Mart";break;
        case 3:document.getElementById("month_name").innerHTML="Aprel";break;
        case 4:document.getElementById("month_name").innerHTML="May";break;
        case 5:document.getElementById("month_name").innerHTML="Iyun";break;
        case 6:document.getElementById("month_name").innerHTML="Iyul";break;
        case 7:document.getElementById("month_name").innerHTML="Avgust";break;
        case 8:document.getElementById("month_name").innerHTML="Sentabr";break;
        case 9:document.getElementById("month_name").innerHTML="Oktabr";break;
        case 10:document.getElementById("month_name").innerHTML="Noyabr";break;
        case 11:document.getElementById("month_name").innerHTML="Decabr";break;

    }
}

function soatRatio(element,setRatio){
    element.style.setProperty("--rotation",setRatio);
}
setInterval(soatYurishi,1000);