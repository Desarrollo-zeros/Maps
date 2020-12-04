var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];


$(document).ready(function (){



    //loader Map Colombia
    $("#colombia").load("img/Colombia.svg");
    $("#colombia1").load("img/Colombia.svg");
    var items = document.querySelectorAll('.circle-menu-box a.menu-item');

    for(var i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (40 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

        items[i].style.top = (40 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }





    setTimeout(function(){


        $("path.cls-1").on("mouseover",function(){
            $("path.cls-1").css("fill", "#d2d2e6");
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            $(this).css("fill", "#"+randomColor);
        })

        $("path.cls-1").click(function(){
            $("#colombia").css("width","90%");
            console.log("img/departamentos/"+$(this).attr("url"));
            $("#colombia").load("img/departamentos/"+$(this).attr("url")+".svg");
        });


        $description = $(".description");

        $('path.cls-1').hover(function() {
            $(this).attr("class", "cls-1 heyo");
            $description.addClass('active');
            $description.html($(this).attr('title'));
        }, function() {
            $description.removeClass('active');
        });

        $(document).on('mousemove', function(e){
            $description.css({
                left:  e.pageX-400,
                top:   e.pageY - 150
            });
            console.log($description);
        });




    },1000);






});