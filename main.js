$( document ).ready(function () {
    $(".list_video_related .item_related .item").slice(0, 9).show();
    if ($(".list_video_related .item_related .item:hidden").length != 0) {
        $(".see-more").show();
    }else{
        $(".see-more").hide();
    }
    $(".see-more").on("click", function(e){
        e.preventDefault();
        $(".list_video_related .item_related .item:hidden").slice(0, 6).slideDown();
        if($(".list_video_related .item_related .item:hidden").length == 0) {
            $(".see-more").fadeOut('slow');
        }
    });
    $('.video_detail .user_profile .copy_video_link .copy_link i').click(function() {
        var linkValue = $('.user_profile .copy_video_link .copy_link .link>span').text();

        // Sao chép nội dung vào bộ nhớ tạm
        navigator.clipboard.writeText(linkValue)
            .then(function() {
                alert('Đã sao chép đường liên kết vào bộ nhớ tạm.');
            })
            .catch(function() {
                alert('Không thể sao chép đường liên kết vào bộ nhớ tạm.');
            });
    });
    // Lấy giá trị của các phần tử h1
    var followers1 = parseInt($('.follower_1').text().replace(/,/g, ''));
    var followers2 = parseInt($('.follower_2').text().replace(/,/g, ''));
    var likeSocial1 = parseInt($('.like_social_1').text().replace(/,/g, ''));
    var likeSocial2 = parseInt($('.like_social_2').text().replace(/,/g, ''));
    // So sánh số lượng người theo dõi và thêm class cho số lớn hơn
    if (followers1 > followers2) {
        $('.follower_1').addClass('max');
    } else if (followers2 > followers1) {
        $('.follower_2').addClass('max ');
    }
    if (likeSocial1 > likeSocial2) {
        $('.like_social_1').addClass('max');
    } else if (likeSocial2 > likeSocial1) {
        $('.like_social_2').addClass('max ');
    }
    // Tính tổng
    var sumFlower = followers1 + followers2;
    var sumLike = likeSocial1 + likeSocial2;

    // Hiển thị kết quả trong thẻ khác
    $('.social-item span.total_follower').text(sumFlower.toLocaleString());
    $('.social-item span.total_like_gap').text(sumLike.toLocaleString());
//end
    // compareUser lấy user

    $('.item_search_content_1').click(function() {
        // Lấy thẻ div đích mà bạn muốn chuyển vào
        var destinationDiv = $('#compareUser .item_search_content.user_1');

        // Di chuyển thẻ div với class 'item_search_content' vào thẻ div đích
        $(this).appendTo(destinationDiv);
        $('.list_search_mobile_1').hide();
    });
    $('.item_search_content_2').click(function() {
        // Lấy thẻ div đích mà bạn muốn chuyển vào
        var destinationDiv = $('#compareUser .item_search_content.user_2');

        // Di chuyển thẻ div với class 'item_search_content' vào thẻ div đích
        $(this).appendTo(destinationDiv);
        $('.list_search_mobile_2').hide();
    });

// Kiểm tra kích thước màn hình ban đầu và chuyển vị trí các thẻ div
    checkScreenWidth();
    // Xử lý sự kiện khi kích thước màn hình thay đổi
    $(window).resize(function() {
        checkScreenWidth();
    });
    function checkScreenWidth() {
        // Kiểm tra kích thước màn hình
        var screenWidth = $(window).width();

        if (screenWidth <= 768) {
            // Nếu màn hình là mobile, di chuyển các thẻ div vào mobileContainer
            $('form.search_user_1').appendTo('.search_mobile_1');
            $('form.search_user_2').appendTo('.search_mobile_2');
            $('.item-search_1').appendTo('.list_search_mobile_1');
            $('.item-search_2').appendTo('.list_search_mobile_2');
            $('#compareUser .search-select .search .txt_search').appendTo('#txt_search');
        }
    }
    $('section.introduce .content_introduce .what_about').click(function() {
        var $this = $(this).find('i');
        $this.toggleClass('fa-plus fa-minus');
        $this.parent().next().slideToggle();
    });

//end
    $('.rectangle_serach').click(function(e){
        e.preventDefault();
        $(".rectangle-bottom-bt").slideToggle();
        $(this).toggleClass("btn-color");
    });
    $(".nav-bar").click(function (){
        $(".modal_menu-mobile").addClass("show-mobile");
        $("body").css("overflow", "hidden");
    });
    $(".menu-mobile").click(function(event) {
        event.stopPropagation();
    });
    $(".modal_menu-mobile").click(function() {
        $(this).removeClass("show-mobile");
        $("body").css("overflow", "visible");
    });


});
function myFunction() {
    var input = $(".search-txt");
    var filter = input.val().toUpperCase();
    var ul = $(".item-search");
    var li = ul.find(".item_search_content_1");
    var liID = ul.find(".item_search_content");
    var notFoundText = $(".txt_search .content-search");
    li.each(function() {
        var a = $(this).find(".conten-item-search-right").find("strong").eq(0);
        var txtValue = a.text();
        if (filter === "") {
            $(this).css("display", "none");
        }else if (txtValue.toUpperCase().indexOf(filter) > -1) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");

        }
    });
    liID.each(function() {
        var a = $(this).find(".conten-item-search-right").find("strong").eq(0);
        var txtValue = a.text();
        if (filter === "") {
            $(this).css("display", "none");
        }else if (txtValue.toUpperCase().indexOf(filter) > -1) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");

        }
    });

    // Kiểm tra xem có kết quả tìm kiếm hay không
    if (li.filter(":visible").length === 0) {
        notFoundText.show();
    } else {
        notFoundText.hide();
    }
    if (liID.filter(":visible").length === 0) {
        notFoundText.show();
    } else {
        notFoundText.hide();
    }

}
function myFunctionRight() {
    var input = $(".search-txt_right");
    var filter = input.val().toUpperCase();
    var ul = $(".item-search");
    var li = ul.find(".item_search_content_2");
    var notFoundText = $(".txt_search .content-search");
    li.each(function() {
        var a = $(this).find(".conten-item-search-right").find("strong").eq(0);
        var txtValue = a.text();
        if (filter === "") {
            $(this).css("display", "none");
        }else if (txtValue.toUpperCase().indexOf(filter) > -1) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");

        }
    });

    // Kiểm tra xem có kết quả tìm kiếm hay không
    if (li.filter(":visible").length === 0) {
        notFoundText.show();
    } else {
        notFoundText.hide();
    }

}