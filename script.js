
produkterdiv = document.getElementById("produkterdiv")
handlekurvknapp = document.getElementById("vishandlekurv")
handlekurvdiv = document.getElementById("handlekurv")

handlekurvknapp.addEventListener("click", function(){
    let totalpris = 0
    handlekurvdiv.innerHTML = ""
    for(let produkt of produkter){
        let mengdeprodukt = handlekurv.filter(x => x==produkt).length
        console.log(handlekurv)
        console.log(handlekurv.filter(x => x==produkt).length)
        if(mengdeprodukt > 0){
            
            let produktp = document.createElement("p")
            produktp.innerHTML = mengdeprodukt + " " + produkt.navn
            handlekurvdiv.appendChild(produktp)
            if(produkt.xforysalg != null){
                let xfory = produkt.xforysalg.split(":")
                console.log(xfory)
                for(let i = 1; i <= mengdeprodukt / Number(xfory[0]); i++){ //dette fungerer ikke helt riktig ennå
                    mengdeprodukt -= Number(xfory[0]) - Number(xfory[1])
                }
            }
            totalpris += (mengdeprodukt * produkt.pris) * (1.0 - produkt.prosentsalg)
        }
    }
    let pristag = document.createElement("p")
    pristag.innerHTML = totalpris + "kr"
    handlekurvdiv.appendChild(pristag)
})

let handlekurv = [

]

class produkt{
    constructor(navn, pris, antallsolgt, img, prosentsalg, xforysalg){
        this.navn = navn
        this.originalpris = pris
        this.pris = pris
        this.antallsolgt = antallsolgt
        this.prosentsalg = prosentsalg
        this.xforysalg = xforysalg
        this.img = img
    }
}

produkter = [
    new produkt("Stor Fisk", 1500, 3, "static/images/storfisk.jpg", 0.0, null),
    new produkt("Liten Fisk", 250, 3, "static/images/litenfisk.jpg", 0.0, "3:2"),

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