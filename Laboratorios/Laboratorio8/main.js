//00137118@UCA.EDU.SV

var row = [];
var couterId = 0;
let carnet_field = document.querySelector("#carnet_field");
let schedule = document.querySelector("#schedule_field");
let late_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");
let datetime = new Date();
let carnet_regex = new RegExp("^[0-9]{8}$");
let tbody = document.querySelector("#table_body");
let addStudent = (obj) =>{
   
    let new_row = document.createElement("tr");
    new_row.classList.add("table-active");
    new_row.innerHTML = `<td>${obj.carnet}</td>
        <td>${obj.schedule}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${obj.late}</td>
    `
    tbody.appendChild(new_row);

    var CellContainer = document.createElement("td");
    var CellContainer2 = document.createElement("td");
    var deleteButton = document.createElement("button");
    var ConfirmTxt = document.createElement("input");

    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.innerText = "Drop";
    deleteButton.value = couterId;

    
        deleteButton.addEventListener("click", event => {
            if(carnet_regex.test(ConfirmTxt.value))
            {
                if(ConfirmTxt.value == obj.carnet){
                    var IdElement = event.srcElement.value;
                    var trToDelete = document.querySelector(`button[value = "${IdElement}"]`).parentElement.parentElement;
                    tbody.removeChild(trToDelete);
                    console.log(ConfirmTxt.value)
                    
                        row.forEach((item, index) => {
                            if(item.id == idElement)
                            {
                                row.splice(index,1);
                            }
                        });
                }else{
                    alert("Carnet incorrecto");
                }
            }else{
                alert("Ups. Ha salido mal, el formato de tu carnet no es correcto");
            }
        });

    CellContainer.appendChild(deleteButton);
    new_row.appendChild(CellContainer);
    tbody.appendChild(new_row);
    CellContainer2.appendChild(ConfirmTxt);
    new_row.appendChild(CellContainer2);
    tbody.appendChild(new_row)
    couterId++;
}


let parseLateBool = (value)=>
{
    if(value)
    {
        return "Tardista"
    }
    else{
        return "Puntual"
    }
}

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value;
    let horario = schedule.options[schedule.selectedIndex].text;
    let late = parseLateBool(late_switch.checked);

    let result_obj = 
    {
        "carnet": carnet,
        "schedule": horario,
        "late": late
    }

    if(carnet_regex.test(carnet))
    {
        addStudent(result_obj);
    }
    else{
        alert("Ups. Ha salido mal, el formato de tu carnet no es correcto");
    }
})

carnet_field.addEventListener("keyup",(event)=>
{
    if(event.keyCode == 13)
    {
        submit_btn.click();
    }
})