Cufon.replace('h1',{
textShadow: '#00397d 1px 1px'
});
Cufon.replace('h4',{
textShadow: '#fff 1px 1px'
});
Cufon.replace('h5',{
textShadow: '#fff 1px 1px'
});
Cufon.replace('#services h3',{
textShadow: '#fff 1px 1px'
});
Cufon.replace('#subheader h2',{
textShadow: '#fff 1px 1px'
});
Cufon.replace('ul:has(ul) > li   a',{
textShadow: 'white 1px 1px',
hover: 'true'
});
Cufon.replace('#content h3',{
});
Cufon.replace('#leftcolumn h2',{
});
Cufon.replace('#footer h3',{
			  textShadow: '#022e5f 1px 1px'
});
Cufon.replace('#featured h2',{
textShadow: '#00397d 1px 1px'
});
function mainmenu(){
$("#nav .inner ul ul").css({display: "none"}); // Opera Fix
$("#nav .inner ul li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).slideDown(400, 'easeInQuad');
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
}
 $(document).ready(function(){					
	mainmenu();
	 $('#submitform').ajaxForm({
			target: '#error',
			success: function() {
			$('#error').animate({ opacity: 1 }, 400);
			}
		});  
	$('.portitem').hover(function() { //mouse in
		$(this).find('span').animate({ bottom: '11px' }, 400);
	}, function() { //mouse out
		$(this).find('span').animate({ bottom: '-30px' }, 400);
	});
	 		$("#nav ul li ul").each(function(i){
      $(this).hover(function(){
        $(this).parent().find("a").slice(0,1).addClass("active");
      },function(){
        $(this).parent().find("a").slice(0,1).removeClass("active");
      });
    });	
});