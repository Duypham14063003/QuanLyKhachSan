const textareaEl = document.getElementById("textarea")
const remainingEl = document.getElementById("remaining-container")
const totalEl = document.getElementById("total-container")

// totalEl.innerText = textareaEl.value.length
textareaEl.addEventListener("keyup",()=>{
    updatteCount()
})

function updatteCount(){
    totalEl.innerText = textareaEl.value.length
    remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length
}