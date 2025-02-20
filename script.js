//your JS code here. If required.
let inputName = document.getElementById('name')
let inputMail = document.getElementById('mail')
let submitBtn = document.getElementById('btn')
let checkMark = document.getElementById('check')

// submitBtn.disabled="true";

checkMark.addEventListener('change',()=>{
    submitBtn.disabled=!checkMark.checked
})
submitBtn.addEventListener('click',validateform)
function validateform(){
    let name = inputName.value
    let gmail = inputMail.value
    if(name.length<=4){
        alert("Name should have more than 5word")
    }
    else if(!gmail.includes("@")){
        alert("add @")
    }
}

