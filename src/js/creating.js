export function create_div(product){

    $('#products').prepend($('<div class="product_div">'+
    '<h1 class="product_h1">'+`${product.name}`+'</h1>'+
    '<p class="product_p text-center">'+`${product.description}`+'</p>'+
    '<hr class="product_hr">'+
    '<div class="sizes_div">'+
     `${sizes_html()}`+
    '</div>'+
    '<hr class="product_hr">'+ 
    '<div class="colors_div">'+
    `${colors_html()}`+
    '</div>'+
    '<div class="trash_icon">'+
    '<i class="fa fa-trash"></i>'+
    '</div>'+
    '</div>'));
   
    function sizes_html(){   
     let sizes_html = '';
       for (let i = 0; i<product.sizes.length; i++){
        sizes_html += '<div class="size_div">'+
        '<p class="size_p">'+`${product.sizes[i]}`+'</p>'+
        '<p class="amount_p">'+`${product.sizes_amount[i]}`+'</p>'+
        '<div class="buttons">'+
        '<button class="button_size size_plus" type="button">+</button>'+
        '<button class="button_size size_minus" type="button">-</button>'+
        '</div>'+        
        '</div>';
        };
        
      return sizes_html;
    }

    $('.size_plus').on('click', function(){
        let current_amount = $(this).parents().children('.amount_p').html();
        let current_int = Number.parseInt(current_amount,10);
        current_int++;
        $(this).parents().children('.amount_p').text(current_int);
        });
       
    $('.size_minus').on('click', function(){
        let current_amount = $(this).parents().children('.amount_p').html();
        let current_int = Number.parseInt(current_amount,10);
        if(current_int==0) return
        else{
            current_int--;
        }
        $(this).parents().children('.amount_p').text(current_int);
      });  
     
   
      function colors_html(){
        let colors_html = '';
        for (let i = 0; i<product.colors.length; i++){
         colors_html += '<div class="color_div">'+
         '<div class="color_describer">'+
         '<div class="circle_icon align-self-center" style="background-color:'+`${product.colors[i]}`+';"></div>'+
         '<p class="size_p">'+`${product.colors[i]}`+'</p>'+
         '</div>'+
         '<p class="amount_p">'+`${product.colors_amount[i]}`+'</p>'+
         '<div class="buttons">'+
         '<button class="button_size color_plus" type="button">+</button>'+
         '<button class="button_size color_minus" type="button">-</button>'+
         '</div>'+        
         '</div>';
         };
         
       return colors_html;
      }

      $('.color_plus').on('click', function(){
        let current_amount = $(this).parents().children('.amount_p').html();
        let current_int = Number.parseInt(current_amount,10);
        current_int++;
        $(this).parents().children('.amount_p').text(current_int);
        });
       
    $('.color_minus').on('click', function(){
        let current_amount = $(this).parents().children('.amount_p').html();
        let current_int = Number.parseInt(current_amount,10);
        if(current_int==0) return
        else{
            current_int--;
        }
        $(this).parents().children('.amount_p').text(current_int);
      }); 
      
    $('.fa-trash').on('click', function(){
      $(this).parents('.product_div').remove();
    }) ;
    
}
