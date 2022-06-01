

    jQuery(document).ready(function($){
	//		start wow
			new WOW().init();
	//		end wow
	
	//		start isotope
        $(".projects-filter li").on('click', function() {

    		$(".projects-filter li").removeClass("active");
    		$(this).addClass("active");

    		var selector = $(this).attr('data-filter');
    		$(".project-list").isotope({
    			filter: selector,
    		});
    	});
		jQuery(".project-list").isotope();
	//		end isotope

	//		start scrollTop
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
	  
    var topPos = $(this).scrollTop();
	
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
	  
    } else {
      $(scrollTop).css("opacity", "0");
    }

  });
  
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
	
  });
	//		end scrollTop
		
	//		start fixed-menu
		var nav = $('#header');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 125) {
				nav.addClass("fixed-menu");
			} else {
				nav.removeClass("fixed-menu");
			}
		});
	//		end fixed-menu

	//		start section active
            var topMenu = jQuery(".main-menu"),
                offset = 40,
                topMenuHeight = topMenu.outerHeight()+offset,
                // All list items
                menuItems =  topMenu.find('a[href*="#"]'),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var href = jQuery(this).attr("href"),
                  id = href.substring(href.indexOf('#')),
                  item = jQuery(id);
                  //console.log(item)
                  if (item.length) { return item; }
                });

            // so we can get a fancy scroll animation
            menuItems.click(function(e){
              var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
                  offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
              jQuery('html, body').stop().animate({ 
                  scrollTop: offsetTop
              }, 600);
              e.preventDefault();
            });

            // Bind to scroll
            jQuery(window).scroll(function(){
               // Get container scroll position
               var fromTop = jQuery(this).scrollTop()+topMenuHeight;

               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if (jQuery(this).offset().top < fromTop)
                   return this;
               });

               // Get the id of the current element
               cur = cur[cur.length-1];
               var id = cur && cur.length ? cur[0].id : "";               

               menuItems.parent().removeClass("active");
               if(id){
                    menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
               }

            });
	//		end section active
			
			
			$(function(){
				$('.main-menu').slicknav();
			});
			
        });	
	
	
	
	
