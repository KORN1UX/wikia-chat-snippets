/*{{CodeMenu}}<source lang="javascript">
  ##  ## ##  (Author: KORNiUX)
  ## ## ### ## ## #
  ####   ##  ###    Edit Approving v1.2
  ##  ## ## ## ## #
  -----------------------------------------------
  With love from Russia. 2014. Personal Use Only.
*/
if (wgAction == "edit" && wgNamespaceNumber == 0) {
    var TMP_button = $('.buttons > #wpSave').val(); 
    $('.buttons > #wpSave')
    .addClass('secondary')
    .prop('type', 'button')
    .val(TMP_button + '(+)')
    .dblclick(function() { 
        $(this).prop('type', 'submit')
        .removeClass('secondary')
        .val(TMP_button);
     });
     if ('ontouchstart' in window || 'onmsgesturechange' in window) {
        $('.buttons > #wpSave').prop('type', 'submit').removeClass('secondary').val(TMP_button);
     };
}; 
//</source>
