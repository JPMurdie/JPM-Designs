var slideOne = 1;
var slideTwo = 0;
var slideThree = 0;
var slideFour = 0;

function slideInfo(callerID) {

    console.log(callerID);

    switch (callerID) {
        case 'myProjects':

            if (slideOne % 2 === 0) {
                slideOne = slideOne + 1
                $('.bioSlide').animate({ 'top': '+=115%' }, 1000);
            } else {
                slideOne = slideOne + 1
                $('.bioSlide').animate({ 'top': '-=115%' }, 400);
            }

            slideTwo = slideTwo + 1

            if (slideTwo % 2 === 0) {
                $('.projectSlide').animate({ 'left': '-=115%' }, 400);
            } else {
                $('.projectSlide').animate({ 'left': '+=115%' }, 1000);
            };
            break;

    }



};

