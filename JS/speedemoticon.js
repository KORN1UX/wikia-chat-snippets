//{{CodeMenu}}<syntaxhighlight lang="javascript">
importStylesheetURI('http://korniux.wikia.com/wiki/SpeedEmoticon/style.css?action=raw&ctype=text/css');

$('.Write').append('<div id="SpeedEmoticon"><img src="http://images1.wikia.nocookie.net/central/images/a/ac/Emoticon_laughing.png" style="border: none !important;"/></div>');
$('#SpeedEmoticon').append('<div id="poplist"></div>').mouseenter(function(){
		$('#poplist').css({				
				top: ($('#SpeedEmoticon').offset().top - $('#poplist').height() - 8),
				left: ($('#SpeedEmoticon').offset().left - $('#poplist').width() - 8)
			});
	});
$('#poplist').load('/wiki/MediaWiki:Emoticons?action=render', function(){
	$('#poplist img')	.click(function(){
		var txt = $(this).parent().children('ul').children('li:first-child').text().replace(/\s/g, ''),
			messg = $('.message textarea').val();
		$('.message textarea').val(messg + txt + ' ').focus();
	});
	$('#poplist div').attr('style', '');
	console.log('SpeedEmoticon v1.7')
});
//</syntaxhighlight>