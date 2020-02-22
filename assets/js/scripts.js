var slideOne = 1;
var slideTwo = 2;
var slideThree = 2;
var slideFour = 2;

function slideInfo(callerID) {

    console.log(callerID);

    switch (callerID) {
        case 'myProjects':

            if (slideOne === 1) {
                $('.bioSlide').animate({ 'top': '-=100%' }, 800);
                slideOne = 2
            };

            if (slideTwo === 2) {
                $('.projectSlide').animate({ 'right': '+=105%' }, 1000);
                slideTwo = 1
            };

            if (slideThree === 1) {
                $('.testimonialSlide').animate({ 'top': '+=95%' }, 800);
                slideThree = 2
            };

            if (slideFour === 1) {
                $('.contactMeSlide').animate({ 'left': '-=105%' }, 800);
                slideFour = 2
            };

            break;

        case 'myHome':

            if (slideOne === 2) {
                $('.bioSlide').animate({ 'top': '+=100%' }, 1000);
                slideOne = 1
            };

            if (slideTwo === 1) {
                $('.projectSlide').animate({ 'right': '-=105%' }, 800);
                slideTwo = 2
            };

            if (slideThree === 1) {
                $('.testimonialSlide').animate({ 'top': '+=95%' }, 800);
                slideThree = 2
            };

            if (slideFour === 1) {
                $('.contactMeSlide').animate({ 'left': '-=105%' }, 800);
                slideFour = 2
            };

            break;

        case 'myTestimonials':

            if (slideOne === 1) {
                $('.bioSlide').animate({ 'top': '-=100%' }, 800);
                slideOne = 2
            };

            if (slideTwo === 1) {
                $('.projectSlide').animate({ 'right': '-=105%' }, 800);
                slideTwo = 2
            };

            if (slideThree === 2) {
                $('.testimonialSlide').animate({ 'top': '-=95%' }, 1000);
                slideThree = 1
            };

            if (slideFour === 1) {
                $('.contactMeSlide').animate({ 'left': '-=105%' }, 800);
                slideFour = 2
            };

            break;

        case 'myContactMe':

            if (slideOne === 1) {
                $('.bioSlide').animate({ 'top': '-=100%' }, 800);
                slideOne = 2
            };

            if (slideTwo === 1) {
                $('.projectSlide').animate({ 'right': '-=105%' }, 800);
                slideTwo = 2
            };

            if (slideThree === 1) {
                $('.testimonialSlide').animate({ 'top': '+=95%' }, 800);
                slideThree = 2
            };

            if (slideFour === 2) {
                $('.contactMeSlide').animate({ 'left': '+=105%' }, 1000);
                slideFour = 1
            };
    };
};

