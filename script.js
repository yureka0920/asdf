
let API_URL = 'https://floating-harbor-78336.herokuapp.com/fastfood';

$(function(){
    $('.btn-search').click(function(){
        let searchKeyword = $('#txt-search').val();
        search(1,10,searchKeyword);
    });
});

    

   
$('#txt-search').on('keypress',function(e){
    if(e.keyCode===13){
        console.log('엔터가 입력되었습니다!');
    }
})

function search(page, perPage, searchKeyword){
    if(typeof page!== 'number' || page <1)
    page =1;
    if(typeof perPage !== 'number' || perPage<=0)
    perPage =10;
$.get(API_URL, {
    page:page,
    searchKeyword : searchKeyword
}, function(data){
    let list = data.list;
    let total = data.total;
    $('.total').html('총' + total + '개의 패스트푸드점을 찾았습니다.');

    let $list = $('.list');

    for(let i =0; i< list.length; i++){
        let item = list[i];

        let $elem = $('#item-template')
        .clone()
        .removeAttr('id');

        $elem.find('.item-no').html(i+1);
        $elem.find('.item-name').html(item.name);
        $elem.find('.item-addr').html(item.addr);

        $list.append($elem)
    }
    showPaging(page,perPage,total);
});
};

function showPaging(page,perPage,total){
    let $paging = $('paging').empty();

    for (let i = 1; i<=5; i++){
    let $elem = $('<a href = "javascript:search('+i+')">'+i+'</a>');

    if(i===page){
        $elem.addClass('current');
    }
    $paging.append($elem);

    let numPage = 5;
    pageStart = Math.floor((page-1)/numPage) * numPage +1;
    pageEnd = pageStart + numPages -1;
    totalPage = Math.floor((total -1) / perPage) +1;
    if(pageEnd > totalPage)
    pageEnd = totalPages;
    

}
}