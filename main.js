function Updatedata(){

    var datoer = [new Date("2023-10-14") - new Date(),new Date("2023-12-21") - new Date(),new Date("2025-6-28") - new Date()]
    var events = ["Efterårsferien","Juleferien","Min dimmisionsdag"]
    for (let i = 0; i < 3; i++){
        var months = Math.floor(datoer[i]/(1000*60*60*24*30))
        var days = Math.floor((datoer[i] % (1000*60*60*24*30))/(1000*60*60*24))
        var timer = Math.floor((datoer[i] % (1000*60*60*24))/(1000*60*60))
        var minutter = Math.floor((datoer[i] %(1000*60*60))/(1000*60))
        var sec = Math.floor((datoer[i] % (1000*60)) / 1000)

        document.getElementById("count"+(i+1)).innerHTML = "Der er " + months + " måneder, " + days + " dage , "+ timer +"  timer, "+ minutter +" minutter og "+ sec +" sekunder til " + events[i]

        if (months<0){
            document.getElementById("count"+(i+1)).innerHTML = "EVENT OVERSKREVET"
        }
    }
    setTimeout(Updatedata,1000);
}

window.onload = Updatedata;
