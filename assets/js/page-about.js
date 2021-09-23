//quay lại đầu trang
$(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
       // console.log(pos_body);
       if(pos_body>400){
          $('.back-to-top').addClass('hien-ra');
       }
       else{
          $('.back-to-top').removeClass('hien-ra');
       }
    });
    
    document.getElementById('quaylai').addEventListener("click", function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    
 });

 //xu ly competition
 $(document).ready(function(){
    $('.nav-compe-item ').click(function(event){

      const id = this.id.split('_')[1];
      var checkId = $(this).attr('class').split(' '); 
      // $(`#compe_${id}`).removeClass('active');
      // $(this).addClass('active');
      
      if(checkId.find(e=>e=='active')=='active'){
         $(this).removeClass('active');
         $(`#compe_${id}`).removeClass('active');
      
     }
     else{
         $(this).addClass('active');
         $(`#compe_${id}`).addClass('active');
     }
    })

   
       })