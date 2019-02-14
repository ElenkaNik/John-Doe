$('#form').on('submit', doSubmit);

    function clearForm(){
        $('#Field1').val("");
        $('#Field3').val("");
        $('#Field4').val("");
    }
    
    function clearStatusMessage()
    {
        $("#status").text("");
    }

    function validateName(){
        clearStatusMessage();
        
        let nameInput = $('#Field1');
        let name = nameInput.val();
        let regexp = new RegExp("^[a-zA-Zа-яА-Я]+");
        
        let valid = regexp.test(name);
        let error = $("#form1 > p.error");
        
        if (valid) {
            error.text("");
        } else {
            error.text("Quaeso a nomine");
        }
    
        return valid;
    }

    function validateEmail(){
        clearStatusMessage();
    
        let emailInput = $('#Field3');
        let email = emailInput.val();
        let regexp = new RegExp("^[.a-zA-Zа-яА-Я0-9_\-]{4,}@[a-zA-Z0-9\-]{4,}(\.[a-zA-Z]{2,4}){1,2}$");
        
        let valid = regexp.test(email);
        let error = $("#form3 > p.error");
        
        if (valid) {
            error.text("");
        } else {
            error.text("Quaeso an email");
        }
    
        return valid;
    }
    
    function validateMessage(){
        clearStatusMessage();
        
        let messageInput = $('#Field4');
        let message = messageInput.val();
        let regexp = new RegExp("[a-zA-Zа-яА-Я]+");
        
        let valid = regexp.test(message);
        let error = $("#form4 > p.error");
        
        if (valid) {
            error.text("");
        } else {
            error.text("Quaeso a nuntii");
        }
    
        return valid;
    }

    function doSubmit(){
        let valid = validateName() && validateEmail() && validateMessage();
        let status = $("#status");
        
        if (valid){
            status.removeClass("error")
                  .addClass("success")
                  .text("Gratias agimus tibi propter verbum tuum!");
            clearForm();
        } else {
            status.removeClass("success")
                  .addClass("error")
                  .text("Quaeso, corrigere erroribus");
        }
        return false;
    }