import {create_div} from './creating.js'

export function add_size(){

 $("#adding_area_size").append($('<div class="row justify-content-center mt-2">' +
 '<input class="col-3 add_item size" type="text" placeholder="Размер" >' +
 '<input class="col-3 add_item size_amount" type="text" placeholder="Количество" >' +
'</div>'))
}

export function add_color (){
    $("#adding_area_color").append($('<div class="row justify-content-center mt-2">' +
    '<input class="col-3 add_item color" type="text" placeholder="Цвет" >' +
    '<input class="col-3 add_item color_amount" type="text" placeholder="Количество" >' +
   '</div>'))
}

export function add_object(){
  
    let sizes =()=>{
        sizes =[];
        let count = $(".size").length; 
        $(".size").each(function(){
         sizes.push(parseInt($(this).val()));});
       return sizes;   
    };

    let sizes_amount =()=>{
        sizes_amount =[];
        let count = $(".size_amount").length; 
        $(".size_amount").each(function(){
         sizes_amount.push(parseInt($(this).val()));});
       return sizes_amount;   
    };

    let colors =()=>{
        colors =[];
        let count = $(".color").length; 
        $(".color").each(function(){
         colors.push($(this).val());});
       return colors;   
    };

    let colors_amount =()=>{
        colors_amount =[];
        let count = $(".color_amount").length; 
        $(".color_amount").each(function(){
         colors_amount.push(parseInt($(this).val()));});
       return colors_amount;   
    };

    let product ={
       name: $('#name').val(),
       description: $('#description').val(),
       sizes: sizes(),
       sizes_amount: sizes_amount(),
       colors: colors(),
       colors_amount: colors_amount()
    }

    create_div(product)
    
    
}



