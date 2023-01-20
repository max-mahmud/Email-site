const submit =document.getElementById("submit");
submit.addEventListener("click", function(){
    const nameId = document.getElementById("inputName");
    const emailId = document.getElementById("inputEmail");
    const massageId = document.getElementById("inputMassage");

    const nameValue = nameId.value;
    const emailValue = emailId.value;
    const massageValue = massageId.value;

    if (nameValue && emailValue && massageValue) {
        console.log(nameValue, emailValue, massageValue);
        const templateParams = {
            nameValue: nameValue,
            nameValue: nameValue,
            massageValue:massageValue
        };
        emailjs.send("service_i4901hp", "template_afzciov", templateParams, "uZCRM7GasQEg72HQn");
    }
})