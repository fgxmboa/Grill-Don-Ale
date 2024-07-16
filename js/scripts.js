$(document).ready(function(){
    $("body").css({
        "background-color": "#FFFFFF",
        "color": "#231F20"
    });

    $(".navbar-dark .navbar-brand").css("color", "#FBAD18");

    $(".navbar-dark .navbar-nav .nav-link").css("color", "#FBAD18");

    $(".navbar-dark .navbar-nav .nav-link").hover(
        function() {
            $(this).css("color", "#F26524");
        },
        function() {
            $(this).css("color", "#FBAD18");
        }
    );

    $("h1").css("color", "#C01823");

    $(".btn-primary").css({
        "background-color": "#F26524",
        "border-color": "#F26524"
    });

    $(".btn-primary").hover(
        function() {
            $(this).css({
                "background-color": "#C01823",
                "border-color": "#C01823"
            });
        },
        function() {
            $(this).css({
                "background-color": "#F26524",
                "border-color": "#F26524"
            });
        }
    );

    $("#logoGrill").css({
        "height": "100%",
        "max-height": "50px"
    });

    $(".btn-social").css({
        "color": "#FFFFFF",
        "background-color": "#F26524",
        "border-color": "#F26524"
    });

    $(".btn-social").hover(
        function() {
            $(this).css({
                "background-color": "#C01823",
                "border-color": "#C01823"
            });
        },
        function() {
            $(this).css({
                "background-color": "#F26524",
                "border-color": "#F26524"
            });
        }
    );
    $("#contactForm").on("submit", function(event) {
        event.preventDefault();

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var fechaEvento = $("#datepicker").val().trim();
        var menu = $("#form-menu").val().trim();
        var message = $("#message").val().trim();

        if (name === "" || email === "" || fechaEvento === "" || menu === "" || message === "") {
            swal({
                title: "Formulario incompleto.",
                text: "Por favor, completa todos los campos del formulario.",
                icon: "error",
                button: "Entendido"
            });
        } else {
            swal({
                title: "Formulario Completado",
                text: "Todos los campos están completos. ¡Gracias!",
                icon: "success",
                button: "Aceptar"
            });
        }
    });



    $(".btn-submit").css({
        "margin-top": "5px"
    });
    $(".carousel-item").css({
        "height": "600px"
    });
    $(".carousel-item img").css({
        "width": "100%",
        "height": "100%",
        "object-fit": "cover"
    });
    $(".carousel-item .carousel-image").css({
        "width": "100%",
        "height": "100%",
        "background-size": "cover",
        "background-position": "center"
    });
    $(".accordion-button").css({
        "background-color": "#F26524",
        "border-color": "#F26524",
        "color": "white"
    });

    $(".accordion-button").hover(
        function() {
            $(this).css({
                "background-color": "#C01823",
                "border-color": "#C01823",
                "color": "white"
            });
        },
        function() {
            $(this).css({
                "background-color": "#F26524",
                "border-color": "#F26524",
                "color": "white"
            });
        }
    );

    $(" .menu-section").css({
        "padding": "20px",
    });

    
    $("  .menu-section h2").css({
        "margin-bottom": "20px",
    });

    $(".menu-card").css({
        "margin-bottom": "20px",
        "padding": "20px",
        "text-align": "center"
    });

    $(".menu-card img").css({
        "max-width": "100%",
        "height": "auto"
    });

    $(".menu-card h3").css({
        "margin-top": "15px"
    });

    $('[data-bs-toggle="tooltip"]').tooltip();

    $("#form-control").tooltip();

    $('#datepicker').datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
   });

   var menuDisponible = ["Americano", "Tico", "Argentino"];

   $("#form-menu").autocomplete({
       source: menuDisponible
   });
    
});
