/*!
 * CV - Bootstrap Theme (http://themewagon.com.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


//Testimonial


    $(function() {
        $('#testtext-1').show( "slow" );
        $('#testtext-2').hide();
        $('#testtext-3').hide();
        $('div.test-2').addClass('changeafter');
        $('div.test-3').addClass('changeafter');

    $('#test-1').click(function(){
        $('#testtext-1').show( "slow" );
        $('#testtext-2').hide();
        $('#testtext-3').hide();
        $('div.test-1').removeClass('changeafter');
        $('div.test-2').addClass('changeafter');
        $('div.test-3').addClass('changeafter');
    });
    $('#test-2').click(function(){
        $('#testtext-1').hide();
        $('#testtext-2').show( "slow" );
        $('#testtext-3').hide();
        $('div.test-2').removeClass('changeafter');
        $('div.test-1').addClass('changeafter');
        $('div.test-3').addClass('changeafter');
    });
    $('#test-3').click(function(){
        $('#testtext-1').hide();
        $('#testtext-2').hide();
        $('#testtext-3').show( "slow" );
        $('div.test-3').removeClass('changeafter');
        $('div.test-2').addClass('changeafter');
        $('div.test-1').addClass('changeafter');
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
