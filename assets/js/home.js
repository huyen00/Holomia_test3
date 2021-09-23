$(document).ready(function(){
    $('.search-icon').on('click',function(event){
        event.preventDefault();
        $('.main-search').slideToggle();
    });
});
//xu lys carousel 2 
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
//xu lý Isotope 
$(document).ready(function(){
    $('.menu-img-conent').isotope({
      itemSelector: '.hinh'
    });
    $('.menu-img-item').click(function(event){
      $('.menu-img-item.active').removeClass('active');
      $(this).addClass('active');
      var _type= $(this).data('type');
      var ten_loai = $(this).text();
      $('.title').text(ten_loai);
      _type='.'+_type;
      $('.menu-img-conent').isotope({
        filter:_type
      });
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
//xử lý khi active 
 $(document).ready(function(){
    $('.compe-item').click(function(event){
      $('.compe-item.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  