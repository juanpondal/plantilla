function SubForm (){
    SubForm.ajax({
        url:'https://api.apispreadsheets.com/data/410/',
        type:'post',
        data:$("#form-body").serializeArray(),
        success: function(){
            alert("Form Data Submitted :)")
        },
        error: function(){
            alert("There was an error :(")
        }
    });
}