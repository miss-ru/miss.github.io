function price_table(name_table){
    if(name_table == 'hairstyle_man' || name_table == 'hairstyle_children' ){
        $('.menu-length-hair').css('display', "none");
    }else{
        $('.menu-length-hair').css('display', "");
    }

    if(name_table != "hairstyle_woman"){
        var arr_table = obj_table[name_table]
        $('.for_table').html('')
        for(let i =0; i < arr_table.length; i++){
            $('.for_table').append('<tr><th scope="row">'+(i+1)+'</th><td>'+arr_table[i][0]+'</td> <td class="td-center">'+arr_table[i][1]+'</td> </tr>')
        } 
    }else{
        price_table('hairstyle_woman_short')
    }
    pos_menu();  
}

//price_table('hairstyle_man');

    
function pos_menu(){
    var position_menu_top = $('.table').height() +  $('.menu-hairstyle').height() +  $('.menu-length-hair').height() + 50;
    console.log($(document).height(), $(window).height(), position_menu_top)

    if($(window).height() > position_menu_top){
        position_menu_top = $(window).height();
    }

    $('.menu').css("top", position_menu_top )
    $('.contacts').css("top", position_menu_top + 30 + $('.menu').height())
}

function pos_menu_index(){
    $('.menu').css("top", $(document).height() )
    $('.contacts').css("top", $(document).height() + $('.menu').height())
}