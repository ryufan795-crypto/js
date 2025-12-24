/* Tanggal Bocoran */
$(document).ready(function () {
    lazyload();
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var thisDay = date.getDay(),
        thisDay = myDays[thisDay];
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;


    $('.title-text').html(thisDay + ', ' + day + ' ' + months[month] + ' ' + year);
});

var slideIndexText = 1;
showSlidesText(slideIndexText);

function plusSlidesText(n) {
    showSlidesText(slideIndexText += n);
}

function currentSlideText(n) {
    showSlidesText(slideIndexText = n);
}

function showSlidesText(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesText");
    if (n > slides.length) { slideIndexText = 1 }
    if (n < 1) { slideIndexText = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexText - 1].style.display = "block";
}

/* Menampilkan Popup Pola Main*/
function show_popup(data, percent, random_1, random_2, random_3, random_4) {
    data = JSON.parse(data.replaceAll('`', '"'));
    slot_leaks_recent[slot_leaks_recent.length] = data['id'];
    $('input[name=slot_leak_id]').val(data['id']);

    if (percent < 30) {
        $("#nama-slot-bad").html("Slot <b>" + data['name'] + "</b>");
        $("#pesan-slot-bad").html("RTP Slot <b>" + data['name'] + "</b> dari provider <b>" + data['provider'] + "</b> sedang rendah, Silahkan Untuk Memilih Slot Dengan RTP yang lebih Tinggi.");
        $("#popup-container-bad").fadeIn(500);
    } else {
        var stake_bet = data['stake_bet'].split(',');

        var lastTime = localStorage.getItem("lastTime_provider_stake_bet_" + data['id']);
        var currentTime = new Date().getTime();
        if (!lastTime || (currentTime - lastTime) >= 180000) {
            localStorage.setItem("lastTime_provider_stake_bet_" + data['id'], currentTime);
            localStorage.setItem("staked_bet_" + data['id'], stake_bet[Math.floor(Math.random() * stake_bet.length)]);
        }

        var stake_bet_now = localStorage.getItem("staked_bet_" + data['id']);

        $("#title-popup-win").html("<b>Tips Bermain Slot " + data['provider'] + "</b>");
        $("#provider").html("<b>" + data['provider'] + "</b>");
        $("#stake_bet").html("<b>" + stake_bet_now + "</b>");
        $("#game_slot").html("<b>" + data['name'] + "</b>");
        $("#description").html(data['provider_description']);

        var tips_type_number_1 = localStorage.getItem("tips_type_number_1_" + data['id']);
        var tips_type_number_2 = localStorage.getItem("tips_type_number_2_" + data['id']);
        var tips_type_number_3 = localStorage.getItem("tips_type_number_3_" + data['id']);
        var tips_type_number_4 = localStorage.getItem("tips_type_number_4_" + data['id']);

        var tips_label_number_1 = localStorage.getItem("tips_label_number_1_" + data['id']);
        var tips_label_number_2 = localStorage.getItem("tips_label_number_2_" + data['id']);
        var tips_label_number_3 = localStorage.getItem("tips_label_number_3_" + data['id']);
        var tips_label_number_4 = localStorage.getItem("tips_label_number_4_" + data['id']);


        if (data['provider'] == "Pragmatic Play") {
            var html_data = '<div class="row mrtop10" id="item_tips_number_1">' +
                '<div style="color: #a3a3a3;">' +
                '<h6 style="margin-bottom: 4px; color: white;"><b><label style="margin: 0px;" class="label_pola" id="label_pola_1">Pola 1: </label><label id="tips_label_number_1" style="margin-bottom: 0px;">' + tips_label_number_1 + '</label></b></h6>' +
                '<label style="margin-bottom: 0px" id="tips_number_1">' + random_1 + '</label>X Spin <label id="tips_type_number_1">' + tips_type_number_1 + '</label>' +
                '</div>' +
                '</div>' +
                '<div class="row mrtop10"  id="item_tips_number_2">' +
                '<div style="color: #a3a3a3;">' +
                '<h6 style="margin-bottom: 4px; color: white;"><b><label style="margin: 0px;" class="label_pola" id="label_pola_2">Pola 2: </label><label id="tips_label_number_2" style="margin-bottom: 0px;">' + tips_label_number_2 + '</label></b></h6>' +
                '<label style="margin-bottom: 0px" id="tips_number_2">' + random_2 + '</label>X Spin <label id="tips_type_number_2">' + tips_type_number_2 + '</label>' +
                '</div>' +
                '</div>' +
                '<div class="row mrtop10"  id="item_tips_number_3">' +
                '<div style="color: #a3a3a3;">' +
                '<h6 style="margin-bottom: 4px; color: white;"><b><label style="margin: 0px;" class="label_pola" id="label_pola_3">Pola 3: </label><label id="tips_label_number_3" style="margin-bottom: 0px;">' + tips_label_number_3 + '</label></b></h6>' +
                '<label style="margin-bottom: 0px" id="tips_number_3">' + random_3 + '</label>X Spin <label id="tips_type_number_3">' + tips_type_number_3 + '</label>' +
                '</div>' +
                '</div>';
            $('#popup-tips-body').html(html_data);
        } else {
            tips_type_number_1 = tips_type_number_1.replaceAll("âŽ", "").replaceAll("âœ…", "");
            tips_type_number_2 = tips_type_number_2.replaceAll("âŽ", "").replaceAll("âœ…", "");
            tips_type_number_3 = tips_type_number_3.replaceAll("âŽ", "").replaceAll("âœ…", "");
            tips_type_number_4 = tips_type_number_4.replaceAll("âŽ", "").replaceAll("âœ…", "");

            var html_data = '<div class="row mrtop10">' +
                '<div style="color: #a3a3a3;">' +
                '<h6 style="margin-bottom: 4px; color: white;"><b>Step 1: Panaskan Mesin Slot!</b></h6>' +
                '<label style="margin-bottom: 0px" id="tips_number_1">' + random_1 + '</label>X Spin ' + tips_type_number_1 + ' (' + tips_label_number_1 + ')' +
                '</div>' +
                '</div>' +
                '<div class="row mrtop10">' +
                '<div style="color: #a3a3a3;">' +
                '<h6 style="margin-bottom: 4px; color: white;"><b>Step 2: Naikkan Bet!</b></h6>' +
                '<label style="margin-bottom: 0px" id="tips_number_2">' + random_2 + '</label>X Spin ' + tips_type_number_2 + ' (' + tips_label_number_2 + ')' +
                '</div>' +
                '</div>' +
                '<div class="row mrtop10">' +
                '<div style="color: #a3a3a3;">' +
                '<h6 style="margin-bottom: 4px; color: white;"><b>Step 3: Stop Spin!</b></h6>' +
                '<label style="margin-bottom: 0px" id="tips_number_3">' + random_3 + '</label>X Spin ' + tips_type_number_3 + ' (' + tips_label_number_3 + ')' +
                '</div>' +
                '</div>' +
                '<div class="row mrtop10">' +
                '<div style="color: #a3a3a3;">' +
                '<h6 style="margin-bottom: 4px; color: red;"><b>Langkah Terakhir</b></h6>' +
                '<label style="margin-bottom: 0px" id="tips_number_4">' + random_4 + '</label>X Spin ' + tips_type_number_4 + ' (' + tips_label_number_4 + ') ' +
                '</div>' +
                '</div>';
            $('#popup-tips-body').html(html_data);
        }


        $("#demo-game").remove();
        if (data['demo'] != null && data['demo'] != "")
            $("#pop-content-detail-game").append('<div id="demo-game" class="row mrtop10">' +
                '<div class="col2 left">Demo Game</div>' +
                '<div class="col2 right" id="demo_button">' +
                '<a href="javascript:void(0)" onclick="show_popup_demo(\'' + (JSON.stringify(data).replaceAll('"', '`')) + '\')" class="btn btn-primary btn-popup-demoplay">Mainkan</a>' +
                '</div>' +
                '<div class="hr"></div>' +
                '</div>');

        $(".slideshow-containerText").html("");
        if (data['tips_title_1'] != '' && data[''] != 'tips_content_1') {
            $(".slideshow-containerText").append('<div class="mySlidesText">' +
                '<p class="sliderTextTitle"><b>' + data['tips_title_1'] + '</b></p>' +
                '<p>' + data['tips_content_1'] + '</p>' +
                '</div>');
        }

        $(".slideshow-containerText").append('<a class="prevText" onclick="plusSlidesText(-1)">&#10094;</a>');
        if (data['tips_title_2'] != '' && data[''] != 'tips_content_2') {
            $(".slideshow-containerText").append('<div class="mySlidesText">' +
                '<p class="sliderTextTitle"><b>' + data['tips_title_2'] + '</b></p>' +
                '<p>' + data['tips_content_2'] + '</p>' +
                '</div>');
        }

        if (data['tips_title_3'] != '' && data[''] != 'tips_content_3') {
            $(".slideshow-containerText").append('<div class="mySlidesText">' +
                '<p class="sliderTextTitle"><b>' + data['tips_title_3'] + '</b></p>' +
                '<p>' + data['tips_content_3'] + '</p>' +
                '</div>');
        }

        if (data['tips_title_4'] != '' && data[''] != 'tips_content_4') {
            $(".slideshow-containerText").append('<div class="mySlidesText">' +
                '<p class="sliderTextTitle"><b>' + data['tips_title_4'] + '</b></p>' +
                '<p>' + data['tips_content_4'] + '</p>' +
                '</div>');
        }

        if (data['tips_title_5'] != '' && data[''] != 'tips_content_5') {
            $(".slideshow-containerText").append('<div class="mySlidesText">' +
                '<p class="sliderTextTitle"><b>' + data['tips_title_5'] + '</b></p>' +
                '<p>' + data['tips_content_5'] + '</p>' +
                '</div>');
        }

        $(".slideshow-containerText").append('<a class="nextText" onclick="plusSlidesText(1)">&#10095;</a>');


        showSlidesText(slideIndexText);
        $("#popup-container-win").fadeIn(500);

        setTimeout(function () {
            var label_pola = $(".label_pola");
            var pola_number = 1;
            for (var i = 1; i <= label_pola.length; i++) {
                if ($("#label_pola_" + i).is(':visible')) { $("#label_pola_" + i).html("Pola " + (pola_number++) + ": "); }
            }
        }, 150);
    }
}

/* Menampilkan Popup Pola Main*/
function show_popup_demo(data) {
    data = JSON.parse(data.replaceAll('`', '"'));
    slot_leaks_recent[slot_leaks_recent.length] = data['id'];

    $("#iframe").attr("src", data['demo']);
    $("#provider-name-demo").html(data['provider']);

    $("#popup-container-demo").fadeIn(500);
}

function demo_fullscreen() {
    var element = document.getElementById("iframe");

    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}

function close_popup() {
    $(".popup-container").fadeOut(500);
    $("#iframe").removeAttr("src");
}

function close_popup_ads_yt() {
    $("#popup-container-ads-yt").fadeOut(500);
    $("#iframeYt").removeAttr("src");
}

function close_popup_demo() {
    $("#popup-container-demo").fadeOut(500);
    $("#iframe").removeAttr("src");
}