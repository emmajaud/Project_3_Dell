t = setInterval(function(){
    var card_1 = $('div#closeablecard');
    var card_2 = $('div#closeablecard2');
    if (card_1.length == 0 && card_2.length == 0 ){
        console.log("both gone")
        $('#footer').css({"position": "absolute", "bottom": "0", "width": "100%"})
        clearInterval(t);
    }
}, 500);