/* 
        Selector
    ================
 */
const myItem = document.querySelector("#items");
const myQuantity = document.querySelector("#quantity");
const myAddBtn = document.querySelector("#addBtn");
const myOutput = document.querySelector("#myOutput");
const myTable = document.querySelector("#myTable");
const myTotalCost = document.querySelector("#totalCost");
const myBtn = document.querySelector(".my_Btn");
const myTarget = document.querySelector(".myTarget");

/* 
        Function
    ================
 */
products.forEach(element => {
    const newOpt = new Option(element.name,element.id);
    myItem.append(newOpt)
});
const calculate = ()=>{
    const myresult = document.querySelectorAll('.total');
    myTotalCost.innerText = [...myresult].reduce((pv,cv)=> pv +Number(cv.innerText),0)
}

const myFunction = (a)=>{
    a.preventDefault()
    const myCheck = products.find((p)=> {
      return  p.id == myItem.value
    });
    let cost = myCheck.price * myQuantity.value;
    const myTr = document.createElement("tr");
    // <td class="my_Btn"><button class=" btn btn-outline-danger btn-sm bi bi-trash3" ></button></td>
    myTr.innerHTML = ` 
                        <td>${myCheck.name}<br><span class="small text-muted delBtn my_Btn">Cancal</span></td>
                        <td class="text-end">${myCheck.price}</td>
                        <td class="text-end">${myQuantity.value}</td>
                        <td class="text-end total">${cost}</td>
                    `;
    myTable.append(myTr);
    myOutput.reset();

    calculate();    
}
myTarget.addEventListener('click',(d)=>{ 
    if(d.target.classList.contains("my_Btn")){
        if(confirm("Confirm to Cancal")){
             d.target.parentElement.parentElement.remove();
        }
    calculate();
    }
    
})
/*
        Process
    ===============
 */
myOutput.addEventListener("submit",myFunction);




