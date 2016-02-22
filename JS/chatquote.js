//{{CodeMenu}}
//<source lang="javascript">
// Chat messages counter in tab
// Code: kx // Idea: ru.elderscrolls community


// Execute
if (wgCanonicalSpecialPageName == 'Chat') {

$('title').prepend('(' + $('.Chat li').length + ') ');

// Add "onDOMNodeInserted" event
$('.Chat ul').on('DOMNodeInserted', function (e) {
	var re = /[0-9]+/,
		title = $('title'),
		result = re.exec(title.text());
	if (!result) {
	title.prepend('(' + $('.Chat li').length + ') ');
	}
	title.text(title.text().replace(/[0-9]+/,$('.Chat li').length));
});
}
//</source>
