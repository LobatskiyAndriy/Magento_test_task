
define([
    'jquery', 
], function ($, core) {
   
    $('.btn-more').on('click',function(){
        let textMore = $(this).parents('.textMore');
        let btnMore = textMore.find('.btn');

        const TextMoreShow =  $(btnMore).data('moreshow');
        const TextMoreHidden =  $(btnMore).data('morehidden');

        textMore.toggleClass('textMore-show')
      
        if(textMore.hasClass('textMore-show')){
            $(btnMore).text(TextMoreHidden);
        }else{
            $(btnMore).text(TextMoreShow);
        }
    })
});
