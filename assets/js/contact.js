
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

 //xư lý ẩn hiện thanh tìm kiếm
 $(document).ready(function(){
     document.getElementById('tk').style.display="none";
     $('.search-icon').click(function(event){
        document.getElementById('tk').style.display="block";
     })
 })