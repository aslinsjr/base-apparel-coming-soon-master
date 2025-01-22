const emailAddress = document.querySelector("#email-address")
const submitBtn = document.querySelector("#submit-btn")
const errorSpan = document.querySelector(".error")

let emailValue = ""

emailAddress.addEventListener("change", (e) => {
    
  return emailValue = e.target.value     
    
})

submitBtn.addEventListener("click", () => {

    if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {

        setTimeout(() => {
            errorSpan.classList.add("show-error")
        })

        setTimeout(() => {
            errorSpan.classList.remove("show-error")
        }, 2000)
        
    } else {
        window.location.reload()
    }
    
})

