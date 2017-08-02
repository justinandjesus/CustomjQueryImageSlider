var animTime=600;


function goNext(){
        curr = $('.active');
        next = curr.next();
        if(next.length){
            next.css('opacity','0.0')
            .addClass('active')            
            .animate({opacity: 1.0}, animTime, function(){
              curr.removeClass('active');      
            });
        }
        else{
            next= $('ul.slider .first');
            next.addClass('active');
            curr.animate({opacity:0.0}, animTime, function(){
            curr.removeClass('active');
            curr.css({opacity: 1.0});
            });
        }

}

function goPrev(){
        curr = $('.active');
        prev = curr.prev();
        if(prev.length){  
            prev.addClass('active');
            curr.animate({opacity:0.0}, animTime, function(){
            curr.removeClass('active');
            curr.css({opacity: 1.0});
            });
        }
        else{
           prev= $('ul.slider .last');
           prev.css('opacity','0.0')
            .addClass('active')            
            .animate({opacity: 1.0}, animTime, function(){
              curr.removeClass('active');      
            });
        }

    }


    $(function(){
        
//        For MouseClick
    $('#next').click(goNext);
//          For MouseClick
    $('#prev').click(goPrev);
        
//          For KeyDown
    $(window).keydown(function(e){
        if(e.keyCode==39){
            goNext();
        }
        else if(e.keyCode==37){
            goPrev();
        }
        })
});
    