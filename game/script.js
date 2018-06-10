(function(){
    "use strict";

    // Update the count down every 1 second
    var start_timer;
    var start_enemie;
    function set_timer_value(){
        
        var numberString = $('.timer').html();
        var amount = + numberString.replace(/,/g, '');

        // Time calculations for days, hours, minutes and seconds
        var seconds = 1;

        // Display the result in the element with id="demo"
        $('.timer').html(amount + seconds);

    }
    
    //Start game
    $('.start-game').click(function(){
        if( $('.timer').html()==0){
            start_timer = setInterval(set_timer_value, 1000);
        }
        create_enemies();
        start_enemie = setInterval(move_enemie, 1000);
    })

    //Stop game
    $('.stop-game').click(function(){
        clearInterval(start_timer);
        clearInterval(start_enemie);
        $('.start-game').html('Reset');
    })

    function create_enemies(){
        $('.canvas').append('<div class="enemie"></div>');
    }

    function move_enemie(){
        $('.enemie').css({
            top: parseInt($('.enemie').css('top'), 10) + 20 + 'px'
        })

        var position_top = $('.enemie').position().top;
        var height_of_enemie = $('.enemie').height();
        var enemie_body = position_top + height_of_enemie;

        console.log(position_top);
        console.log(get_player_position());
        if(enemie_body>=get_player_position()){
            alert('game over');
            clearInterval(start_timer);
            clearInterval(start_enemie);
        }
    }

    function get_player_position(){
        var actual_player_position = $('.player').position();
        actual_player_position = actual_player_position.top;
        return actual_player_position;
    }

}());