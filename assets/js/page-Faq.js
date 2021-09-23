$(document).ready(function(){
    $('.check-panel').click(function(event){
        const id = this.id.split('_')[1];
        var checkId = $(this).attr('class').split(' ');
        if(checkId.find(e=>e=='active')=='active'){
            $(this).removeClass('active');
            $(`#check_${id}`).css("color","white");
            $(`#panel_${id}`).removeClass('panel-hien');
            $(`#giam_${id}`).text('+').css("color","white");
        }
        else{
            $(this).addClass('active');
            $(`#check_${id}`).css("color","#EC9123");
            $(`#panel_${id}`).addClass('panel-hien');
            $(`#giam_${id}`).text('-').css("color","#EC9123");
        }
        
        
    });
});

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