let myLeads =[]


// myLeads=JSON.parse(myLeads)
// myLeads.push("murthy")
// myLeads=JSON.stringify(myLeads)

const inputEl = document.querySelector("#input-el")
const inputBtn=document.querySelector("#input-btn")
const deleteBtn=document.querySelector("#delete-btn")
const ulEl=document.querySelector("#ul-el")
const contaEl=document.querySelector("#conta")

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick",function(){
    console.log("hello")
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

inputBtn.addEventListener("click" ,function(){

    myLeads.push(inputEl.value)
    //console.log(myLeads)
    inputEl.value=""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    
    // contaEl.innerHTML="<button>hello</button>"//for creating button from js
    //console.log(localStorage.getItem("myLeads"))
})
function renderLeads()
{
    myLists=""   
    
    for(let i=0;i<myLeads.length;i++)
    {
//for rendering items stored in arrays as lists

        // ulEl.innerHTML="<li>"+myLeads[i]+"</li>"

    //    const li=document.createElement("li")
    //    li.textContent=myLeads[i]
    //    ulEl.append(li)

    myLists += "<li><a href='#' target='_blank'>"+myLeads[i]+"</a></li>"
    // myLists += 
    // <li>
    //     <a target='_blank' href='${myLeads[i]}'>
    //         ${myLeads[i]}
    //     </a>
    // </li>

    }
    
    ulEl.innerHTML=myLists
    
}



    
