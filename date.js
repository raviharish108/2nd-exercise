function datetime(){
    let dt=new Date();
    let date=("0"+dt.getDate().slice(-2));

    let month=("0"+(dt.getMonth()+1).slice(-2));

    let year=dt.getFullYear();

    let hours=dt.getHours();

    let minute=dt.getMinutes();

    let seconds=dt.getSeconds();
    var output=year + "-"+month+"-"+date+" "+hours+":"+minute+":"+seconds;
return output;
}
