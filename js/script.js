function getRandomRoll(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function dice_roll(clicked_id)
{   
    let result;
    switch (clicked_id) {
    	case "d4":
      	     result = Math.floor(getRandomRoll(1,4));
             break;
        case "d6":
      	     result = Math.floor(getRandomRoll(1,6));
             break;
        case "d8":
      	     result = Math.floor(getRandomRoll(1,8));
             break;
        case "d10":
      	     result = Math.floor(getRandomRoll(1,10));
             break;
        case "d12":
      	     result = Math.floor(getRandomRoll(1,12));
             break;
        case "d20":
      	     result = Math.floor(getRandomRoll(1,20));
             break;
        case "d100":
      	     result = Math.floor(getRandomRoll(1,100));
             break;
    }
    document.getElementsByClassName("result")[0].innerHTML = result;
}

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});