var indexLangue = 1
var indexCompetence = 1
function ajouterEp(){
    let newInput = document.createElement("textarea")
    newInput.classList.add("form-control")
    newInput.classList.add("m-1")
    newInput.setAttribute("rows" , 3)
    newInput.setAttribute("placeholder" , "Entrer votre experience")

    let epField = document.getElementById("ep-field")
    let epBtn = document.getElementById("epBtn")

    epField.insertBefore(newInput , epBtn)
}

function ajouterFormation(){
    let newInput = document.createElement("textarea")
    newInput.classList.add("form-control")
    newInput.classList.add("m-1")
    newInput.setAttribute("rows" , 3)
    newInput.setAttribute("placeholder" , "Entrer votre fromation")

    let fomationField = document.getElementById("formation-field")
    let formationBtn = document.getElementById("formationBtn")

    fomationField.insertBefore(newInput , formationBtn)
}

function ajouterLangue(){
    let newLabel  = document.createElement("label")
    newLabel.setAttribute("for" , "examplelangue"+indexLangue)
    newLabel.innerHTML = "Langue/niveau"
    newLabel.classList.add("m-1")

    let newInput = document.createElement("input")
    newInput.classList.add("form-control")
    newInput.classList.add("m-1")
    newInput.setAttribute("id" , "examplelangue"+indexLangue)
    newInput.setAttribute("type" , "text")
    newInput.setAttribute("placeholder" , "Entrer la Langue")

    let array = ["Notions","compétences professionnelle limitée","compétences professionnelle","capacité professionnelle complète" , "langue natale"];

    //Create and append select list
    let selectList = document.createElement("select");
    selectList.classList.add("form-control")
    selectList.classList.add("m-1")
    selectList.id = "mySelect";
    

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        let value = 20
        var option = document.createElement("option")
        option.value = ""+value
        value =  value + 20 
        option.text = array[i]
        selectList.appendChild(option)
    }

    let langueField = document.getElementById("langue-field")
    let btnsLangues = document.getElementById("btnsLangues")
    langueField.insertBefore(selectList , btnsLangues)
    langueField.insertBefore(newInput , selectList)
    langueField.insertBefore(newLabel , newInput)



    indexLangue = indexLangue + 1 
}


function ajouterCompetence(){
    let newInput = document.createElement("input")
    newInput.classList.add("form-control")
    newInput.classList.add("m-1")
    newInput.setAttribute("placeholder" , "Entrer votre Compétence")
    newInput.setAttribute("id" , "exampleInputCompetences"+indexCompetence)

    let before = document.getElementById('CompBtn')
    let compfield = document.getElementById('Compfield')

    compfield.insertBefore(newInput ,before)
}