$(function(){
    $('.follow-btn').delegate('.unfollow', 'hover', function(event) {
        if( event.type === 'mouseenter' )
            $(this).text('Unfollow').addClass('action');
        else
            $(this).text('Following').removeClass('action');
    });
    $('.follow-btn').delegate('.unfollow', 'click', function(e) {
        e.preventDefault();
        var item = $(this);
        $.post( $(this).attr("href"), function() {
            $(item).attr('class', 'follow')
            .text('Follow')
            .attr('href', $(item).attr('href').replace(/unfollow/i, 'follow_all'));
            var followers = +$('#followers').data('followers');
            $('#followers').data('followers', followers - 1);
            $('#followers').text(followers - 1);
        });
      });
      
    $('.follow-btn').delegate('.follow', 'click', function(e) {
        e.preventDefault();
        var item = $(this);
        $.post( $(this).attr('href'), function() {
            $(item).attr('class', 'unfollow')
            .text('Following')
            .attr('href', $(item).attr('href').replace(/follow_all/i, "unfollow"));
            var followers = +$('#followers').data('followers');
            $('#followers').data('followers', followers + 1);
            $('#followers').text(followers + 1);
        });
    });
});
