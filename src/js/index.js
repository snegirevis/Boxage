import {add_size, add_color, add_object} from './adding.js'

$(document).ready(function () {

    $('#size_toggler').click(function () {
      $('#sizes').toggleClass('d-none');
      $('#size_toggler').children('i').toggleClass('fa-chevron-up fa-chevron-down')
    });

    $('#color_toggler').click(function () {
        $('#colors').toggleClass('d-none');
        $('#color_toggler').children('i').toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('#add_size').on('click', function(){
      add_size();
    });

    $('#add_color').on('click', function(){
      add_color();
    });

    $('.add_button').on('click', function(){
     add_object();
    });


})