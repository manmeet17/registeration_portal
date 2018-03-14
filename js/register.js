$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });

function validate(con,callback){
    var fields={
    name : $('input[name=fname]').val(),
    email: $('input[name=email]').val(),
    room : $('input[name=room').val(),
    regNo : $('input[name=regNo]').val(),
    mobile : $('input[name=mobile]').val(),
    github : $('input[name=github]').val(),
    linkedin: $('input[name=linkedin]').val(),
    skills: $('input[name=skills]').val(),
    };
    console.log(fields);
    if( fields.name.length==0 || fields.email.length==0 || fields.mobile.length!=10 || fields.room.length==0 || fields.regNo.length!=9 || fields.skills.length==0 ){
        swal({
            title: "Failed",
            text: "Make sure you have filled all the fields correctly",
            icon: "error"
        })
    }
    else{
        // console.log("Called");
        con=true;
        callback(fields);
    }
}

function request(fields){
    $.ajax({
        url: 'https://hackoverflow-api.herokuapp.com/new-student',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(fields),
        success: function(res){
            console.log(res);
            if(res.status==200){
                swal({
                    title: "Success",
                    text: "You have registered for hackoverflow",
                    icon: "success"
                }).then((res) =>{
                    window.location.href="./index.html";
                    // window.location.href="/";
                });
            }
            else{
                swal({
                    title: "Failed",
                    text: fields.name+" has already registered for Hackoverflow",
                    icon: "error"
                })
            }
        }
    });
}


$('form').submit(function(e){
    e.preventDefault();
    validate(true,request);
});