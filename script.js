
produkterdiv = document.getElementById("produkterdiv")
handlekurvknapp = document.getElementById("vishandlekurv")
handlekurvdiv = document.getElementById("handlekurv")

handlekurvknapp.addEventListener("click", function(){
    for(let produkt of produkter){
        let mengdeprodukt = handlekurv.filter(x => x==produkt).length
        console.log(handlekurv)
        console.log(handlekurv.filter(x => x==produkt).length)
        if(mengdeprodukt > 0){
            let produktp = document.createElement("p")
            produktp.innerHTML = mengdeprodukt + " " + produkt.navn
            handlekurvdiv.appendChild(produktp)
        }
    }
})

let handlekurv = [

]

class produkt{
    constructor(navn, pris, antallsolgt, img){
        this.navn = navn
        this.originalpris = pris
        this.pris = pris
        this.antallsolgt = antallsolgt
        this.img = img
    }
}

produkter = [
    new produkt("Stor Fisk", 1500, 3, "static/images/storfisk.jpg"),
    new produkt("Liten Fisk", 242, 3, "static/images/litenfisk.jpg"),

]

for(let produkt of produkter){
    produktdiv = document.createElement("div")
    produktdiv.id = "produktdiv"

    produktnavn = document.createElement("p")
    produktnavn.innerHTML = produkt.navn
    produktdiv.appendChild(produktnavn)

    produktbilde = document.createElement("img")
    produktbilde.src = produkt.img
    produktbilde.style.width = "50%"
    produktdiv.appendChild(produktbilde)

    produktpris = document.createElement("p")
    produktpris.innerHTML = produkt.pris + "Kr"
    produktdiv.appendChild(produktpris)

    produktkjøpeknapp = document.createElement("Button")
    produktkjøpeknapp.innerHTML = "Legg til i handlekurv"
    produktkjøpeknapp.addEventListener("click", function(){
        handlekurv.push(produkt)
    })
    produktdiv.appendChild(produktkjøpeknapp)

    produkterdiv.appendChild(produktdiv)
    
}