var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
    
   $('Section#screenshots a').on('click', function(){
       $('div#modal img').attr('src',$(this).attr('data-image-url'));
       
   }); 
    
   var nav = $(".navbar-fixed-top");
   var distance = $(".navbar-fixed-top").offset();
    
    if(distance.top >= 300)
        {
        nav.addClass('effect');
            
        }
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        if(scroll >= 300)
        {    
           nav.addClass('effect');
                
           $('#menu-img').css('display','block');    
          
           $('#menus').css('transition','all 1s');
            
           $('#menus').css('margin-top','0%');    
           
           $('#small-logo').css('display','block');
            
           //$('#menus .collapse').hide(1500);
        }
        else
        {
        nav.removeClass('effect');
            
        $('#menu-img').css('display','none');    
        $('#menu-points').css('display','none');   
        $('#menus').css('transition','all 1s');
        $('#menus').css('margin-top','5%');    
        $('#small-logo').css('display','none'); 
        $('#menus .collapse').hide(1500);    
              }
    })
    
    
    $('#Home div p').waypoint(function(){
        $('#Home div p').addClass('animated fadeInUp')
    },{
        offset: ''
    });
    
    
    $('#menu-points a').click(function(){
        $('#menu-points').css('display','none');
    });
    
     $('#menus a').click(function(){
        $('#menus .collapse').slideToggle(1000);
    });
    
    $('#menus button').click(function(){
        $('#menus .collapse').slideToggle(1000);
    });
    
    
     $('#service .blue-circle2').waypoint(function(){
        $('#service .blue-circle2').addClass('animated fadeInUp')
    },{
        offset: '50%'
    });
    
    $('#service .blue-circle2b').waypoint(function(){
        $('#service .blue-circle2b').addClass('animated fadeInUp')
    },{
        offset: '50%'
    });
    
    $('#service .blue-circle2c').waypoint(function(){
        $('#service .blue-circle2c').addClass('animated fadeInUp')
    },{
        offset: '50%'
    });
    
    $('#about .blue-circle').waypoint(function(){
        $('#about .blue-circle').addClass('animated fadeInUp')
    },{
        offset: '50%'
    });
    

    $('#group .blue-circle').waypoint(function(){
        $(this.element).addClass('animated fadeInUp')
    },{
        offset: '50%'
    });
    
      $('#cap .blue-circle').waypoint(function(){
        $(this.element).addClass('animated fadeInUp')
    },{
        offset: '50%'
    });
    
    $('#features .blue-circle').waypoint(function(){
        $(this.element).addClass('animated fadeInUp')
    },{
        offset: '50%'
    });
    
    $('#group .right-features').waypoint(function(){
        $(this.element).addClass('animated zoomIn')
        $(this.element).css({'opacity':1});
    },{
        offset: '50%'
    });
    
 $(document).ready(function(){
  $('.btn-contact').click(function(){
   
   var email = $('#form_email').val();
   var name = $('#form_name').val();
   var message = $('#form_text').val();
   
   console.log(name+' ... '+email+' ... '+message);
   
      if(name != "" && email != "" && message != "")
	  {  
		$.ajax({
		type: "POST",
		url:'submit.php',
		data:{name:name,message:message,email:email},
		success:function(){
		  $('#pop-background').fadeIn();
			$('#pop-box').fadeIn();
			return false;
		}
		});
	  }
  });
});

    
    
    $('.features-image img').waypoint(function(){
        $('.features-image img').addClass('animated rubberBand')
    },{
        offset: '50%'
    });
    
     $('#screenshots .col-xs-12').waypoint(function(){
        $(this.element).addClass('animated zoomIn');
        $(this.element).css({'opacity':1});
    },{
        offset: '50%'
    });
    
    
     $('#download div.phone img').waypoint(function(){
        $(this.element).addClass('animated fadeInRight');
    },{
        offset: '50%'
    });
    
     $('#download .platforms > div').waypoint(function(){
        $(this.element).addClass('animated fadeInUp');
    },{
        offset: '50%'
    });
    
    
    
    
    $('#menu-img').click(function(){
        $('#menu-points').slideToggle(500);
    });
    
    $('#form').bootstrapValidator({
        message:'This Value is not valid',
        feedbackIcons:{
            valid:'glyphicon glyphicon-ok',
            invalid:'glyphicon glyphicon-remove',
            validating:'glyphicon glyphicon-refresh',
        },
        fields:{
            name:{
                validators:{
                    notEmpty:{
                        message:'This field is required and cannot be empty'
                    },
                }
            },
            email:{
                validators:{
                    notEmpty:{
                        message:'This field is required and cannot be empty'
                    },
                    emailAddress:{
                        message:'This Input is not a valid address'
                    }
                }
            },
            message:{
                validators:{
                    notEmpty:{
                        message:'This message is cannot be empty,who sends an empty message???'
                    },
                }
            },
        }
    })
       .on('sucess.form.bv',function(e) {
        e.preventDefault();
        
        var $form = $(e.target);
        
        var bv = $form.data('bootstrapValidator');
        
        $.post($form.attr('action'), $form.serialize(), function(result){
            console.log(result);
        },'json' );
    })
   
});


smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutQuad',
    updateURL: false,
    offset:0
    
});


$(document).ready(function() {
    
	
	
	$('#close').click(function() {
        $('#pop-background').fadeOut();
		$('#pop-box').fadeOut();
        window.location.href = 'index.html#support';
		return false;
    });
	
	$('#pop-background').click(function() {
        $('#pop-background').fadeOut();
		$('#pop-box').fadeOut();
        window.location.href = 'index.html#support';
		return false;
    });
	
});



}
/*
     FILE ARCHIVED ON 10:30:43 Aug 29, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:31:11 Aug 27, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 14.186
  exclusion.robots.policy: 0.184
  load_resource: 354.391
  LoadShardBlock: 100.956 (3)
  exclusion.robots: 0.199
  PetaboxLoader3.datanode: 213.053 (5)
  CDXLines.iter: 22.663 (3)
  PetaboxLoader3.resolve: 121.482 (2)
  esindex: 0.014
  captures_list: 142.765
*/