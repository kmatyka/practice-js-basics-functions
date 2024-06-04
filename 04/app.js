function runTimer(){
    let i=1
    zegarek = setInterval(()=>{
        if(i==5){
            clearInterval(zegarek);
        }
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
        i++;
    },5000);
}
runTimer();