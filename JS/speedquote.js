// Speed quote of message by KORN1UX{{CodeMenu}}
//<syntaxhighlight lang="javascript">
$('body').click(function(){
	$('.Chat span.message').click(function(){
	var messg = $(this).text().replace(/\n/,'\n> '),
	    typein = $('.Write textarea').val();
	$('.Write textarea').val('> ' + messg + '\n').focus();
	}).css('cursor','pointer');
});
//</syntaxhighlight>
