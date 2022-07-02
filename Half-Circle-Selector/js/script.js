$(".accordion-element-common").click(function () {
    
    // Accordion section is closed
    if ( $(this).hasClass('accordion_closed') ){
         
        $(this).siblings('.accordion-element-text').first().slideDown();
        
        $(this).toggleClass('accordion_closed');
        $(this).toggleClass('accordion_open');
  
         
         
    } else if ( $(this).hasClass('accordion_open') ) {
        
        $(this).siblings('.accordion-element-text').first().slideUp();
        
        $(this).toggleClass('accordion_closed');
        $(this).toggleClass('accordion_open');
        
          
    }
  
  
  
  
  });