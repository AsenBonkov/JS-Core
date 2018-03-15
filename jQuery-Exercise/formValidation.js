function validate() {
    let username = $('#username')
    let email = $('#email')
    let password = $('#password')
    let confirmPass = $('#confirm-password')
    let companyNumber = $('#companyNumber')
    let companyCheckBox = $('#company')
    let companyInfo = $('#companyInfo')
    let submitBtn = $('#submit')
    let validationDiv = $('#valid')
    let allIsValid = true

    companyCheckBox.on('change', function () {
        if (companyCheckBox.is(':checked')) {
            companyInfo.css('display', 'block')
        } else {
            companyInfo.css('display', 'none')
        }
    })

    submitBtn.on('click', function (ev) {
        ev.preventDefault()
        validateForm()
        if (allIsValid === true){
            validationDiv.css('display', 'block')
        }
    })



    function validateForm() {
        validateInputWithRegex(username, /^[A-Za-z0-9]{3,20}$/g)
        validateInputWithRegex(email, /^.*?@.*?\..*$/)
        if (confirmPass.val() === password.val()){
            validateInputWithRegex(password, /^[A-Za-z0-9_]{5,15}$/g)
            validateInputWithRegex(confirmPass, /^[A-Za-z0-9_]{5,15}$/g)
        }else {
            confirmPass.css('border', 'solid red')
            password.css('border', 'solid red')
            allIsValid = false
        }
        if(companyCheckBox.is(':checked')) {
            validateCompanyInfo()
        }
    }
    
    function validateInputWithRegex(input, pattern) {
        if (pattern.test(input.val())){
            input.css('border', 'none')
        }else {
            input.css('border', 'solid red')
            allIsValid = false
        }
    }

    function validateCompanyInfo() {
        let numValue = Number(companyNumber.val())
        if (numValue >= 1000 && numValue <= 9999){
            companyNumber.css('border', 'none')
        }else{
            companyNumber.css('border', 'solid red')
            allIsValid = false
        }
    }

}
