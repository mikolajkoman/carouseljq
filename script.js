
$(function(){

    var carouselList = $("#carousel ul");
    var dots = $(".dots");
    var prev = $(".glyphicon-chevron-left");
    var next = $(".glyphicon-chevron-right");

    var current = 0,
            offset = -400;

    function initDots() {

        var k = carouselList.find('li').length-1;

        for (var c = 0; c < k ; c++) {

            var element = $('<button class="btn-primary">o</button>');
            element.on('click', changeSlide.bind(this, c));


            dots.append(element)

        }

    }
    prev.click( function () {

        current--;
        carouselList.css({marginLeft: current*offset });
        if (current < 0){
            current = carouselList.find('li').length-1;
        }

    }) ;
    next.click( function () {

        current++;
        carouselList.css({marginLeft: current*offset });
        if (current == carouselList.find('li').length-1){
            current = 0;
        }


    }) ;

    // function moveFirstSlide() {

    //      current = 0;

    //      var firstItem = carouselList.find("li:first");
    //      var lastItem = carouselList.find("li:last");
    //      lastItem.after(firstItem)

    //     carouselList.css({marginLeft:-40});
    // }

    function changeSlide(selected) {

        if (selected != undefined) {

            current = selected;

        } else {

            current++;

        }

        if (current >= carouselList.find('li').length - 1) {

            carouselList.animate({marginLeft: current*offset }, 500, function() {

              current = 0;
              carouselList.css({marginLeft: current*offset });

            });

        } else {

            carouselList.animate({marginLeft: current*offset }, 500);

        }
    }



            current = 0;
    console.log(carouselList);

    
    

    initDots();

    var current = 0;

    // function changeSlide() {

    //     current++;

    //     if (current >= carouselList.children().length-1) {

    //         carouselList.animate({marginLeft: '-=400' }, 500, moveFirstSlide);

    //     } else {

    //         carouselList.animate({marginLeft: '-=400' }, 500);

    //     }

    // }
    setInterval(changeSlide, 2000)




});
