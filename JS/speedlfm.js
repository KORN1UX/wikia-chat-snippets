//{{CodeMenu}}<source lang="javascript">

function SpeedLFM(api){
    var Infoblock = $('#SpeedLFM'),
        User = Infoblock.data('user'), 
        LFMApi = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + User + '&limit=1&api_key=' + api + '&format=json';
    Infoblock.html('<img src="http://slot1.images.wikia.nocookie.net/__cb1398770351/common/skins/common/images/ajax.gif" width="60px" class="floatleft" id="LFMCover" /> <span id="LFMtrack"></span>');

    $.getJSON(LFMApi, function(data) {
        if (!data.recenttracks.track[0]) {
        lfmartist = '<span id="SpeedLFMLP">Last Played: ' + data.recenttracks.track.artist['#text'];
        lfmtrack = data.recenttracks.track['name'] + '</span>';
        lfmimage = data.recenttracks.track.image[1]['#text'];  
        } 
        else {
        lfmartist = data.recenttracks.track[0].artist['#text'];
        lfmtrack = data.recenttracks.track[0]['name'];
        lfmimage = data.recenttracks.track[0].image[1]['#text'];
        }
        if (!lfmimage) {
            $('#LFMCover').attr('src', 'http://images.wikia.com/korniux/images/a/a9/UnknownTrack.png');
        } else {
            $('#LFMCover').attr('src', lfmimage); 
        }   
        $('#LFMtrack').html(lfmartist + ' — ' + lfmtrack); 
    });
}

if ($('#SpeedLFM').length) {
    SpeedLFM(SpeedLFMAPI);
}
//</source>