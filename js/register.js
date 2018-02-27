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
            name: $('input[name=fname]').val(),
            email: $('input[name=email]').val(),
            room: $('input[name=room').val(),
            regNo: $('input[name=regNo]').val(),
            mobile: $('input[name=mobile]').val(),
            github: $('input[name=github]').val(),
            linkedin: $('input[name=linkedin]').val(),
            skills: $('input[name=skills]').val()
            }
            console.log(name,email,room,regNo);
    if( name.length==0 || email.length==0 || room.length==0 || regNo.length==0){
        swal({
            title: "Failed",
            text: "Make sure you have filled all the required fields",
            icon: "error"
        })
    }
    else{
        console.log("Called");
        con=true;
        callback();
    }
}

function request(){
    $.ajax({
        url: 'https://hackoverflow-api.herokuapp.com/new-student',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
            name: $('input[name=fname]').val(),
            email: $('input[name=email]').val(),
            room: $('input[name=room').val(),
            regNo: $('input[name=regNo]').val(),
            mobile: $('input[name=mobile]').val(),
            github: $('input[name=github]').val(),
            linkedin: $('input[name=linkedin]').val(),
            skills: $('input[name=skills]').val()
        }),
        success: function(res){
            swal({
                title: "Success",
                text: "You have registered for hackoverflow",
                icon: "success"
            }).then((res) =>{
                window.location.href="/";
                // window.location.href="/";
            });
        }
    });
}


$('button').on('click', function(e){
    e.preventDefault();
    request();
});