function draftLyricsChanged() {
    var draft_text = $('#txtLyrics').val();
    var csrf_token = $('input[name=csrfmiddlewaretoken]').val();

    $.ajax({
        'url': 'letrista2marke37',
        'data': {
            'text': draft_text,
            'csrfmiddlewaretoken': csrf_token
        },
        'type': 'POST',
        'success': function (response) {
            // lyrics = response.lyrics.replace(/\n/g, "<br />");

            // Lyrics.
            $('#divLyrics').html(response.lyrics);
            // Word count.
            $('#spnWordCount').html(response.word_count);
            // Line count.
            $('#spnLineCount').html(response.line_count);

            // Highlight the new content.
            hljs.highlightAll();
        }
    });
}

$(function() {
    $('#txtLyrics').keyup(draftLyricsChanged);

    var has_content = ($('#txtLyrics').val().length) > 0

    if (has_content) {
        // If we have content, we send it to the server.
        draftLyricsChanged()
    } else {
        // Otherwise, we just highlight to not have a blank render
        // on the right (rendered lyrics).
        hljs.highlightAll();
    }
});