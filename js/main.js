function But(what){
    for(let i = 1; i < 4; i++){
        document.getElementById(what).style.display = "inline-block"
        for(let i = 1; i < 4; i++){
            if (i != what){
                document.getElementById(i).style.display = "none"
            }
        }
    }
}