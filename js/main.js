function Updatedata(){
    var t = new Date("2023-10-14")
    var b = new Date()
    var TidTilEfterårsferien = t - b;


    document.getElementById("Efterårsferie_countdown").innerHTML = TidTilEfterårsferien
    setTimeout(Updatedata,1000);
    
}

window.onload = Updatedata();
