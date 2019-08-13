

// 전체 메뉴
var menuModal = $("#ModalMenuWrap");
function menuOpen() {
  menuModal.css("display", "block");
}
function menuClose() {
  menuModal.css("display", "none");
}

// 맵 이동
function moveMap(title){
  console.log("move map : " + title);
  var _map = window.frameElement._map;
  _map.do.changeMap(title);
}

// tabs
function switchTab(data_tab) {
  var tabs = document.querySelectorAll(".hana-tabs > .tab");
  for (var i = 0; i < tabs.length; i++) {
    if(tabs[i].getAttribute("data-tabId") === data_tab){
      tabs[i].className = 'tab active';
    }else{
      tabs[i].className = 'tab';
    }
  }
}

// button group active
function activeBtnGroup(e) {
  var btns = $(".hana-btn-group .active");

  if(btns !== null){
    btns.removeClass("active");
  }
  $(e.target).addClass("active");
}

// date picker event
(function(){
  var theDate = new Date();
  var today = new Date();
  showTheDate(theDate.getFullYear(), theDate.getMonth());

  var changeDate = theDate;
  var yyyy = changeDate.getFullYear();
  var mm = changeDate.getMonth();
  $('#js-hanaDatePrev').on("click", function() {
    // 한달 간격으로 감소..
    mm = mm - 1;
    if(mm < 0){
      yyyy = yyyy - 1;
      mm = 11;
    }
    showTheDate(yyyy, mm);
  });
  $('#js-hanaDateNext').on("click", function() {
    if(today.getFullYear() === yyyy && today.getMonth() === mm){
      return;
    }
    mm = mm + 1;
    if(mm > 11){
      yyyy = yyyy + 1;
      mm = 0;
    }
    showTheDate(yyyy, mm);
  });

  function showTheDate(year, month) {
    if(today.getFullYear() === year && today.getMonth() === month){
      $('#js-hanaDateNext').attr('disabled', 'disabled');
    }else{
      $('#js-hanaDateNext').attr('disabled', false);
    }

    $('#hana-date').text(year + '-' + (month + 1));
  }
}());

// menu
(function(){
  // 메뉴 클릭시 slideToggle 이벤트
  $("#menuNav a").on("click", function(e){
    e.preventDefault();
    var link = $(this);
    var closest_ul = link.closest("ul");
    var parallel_active_links = closest_ul.find(".active");
    var closest_li = link.closest("li");
    var link_status = closest_li.hasClass("active");
    var count = 0;

    closest_ul.find("ul").slideUp(function() {
      if (++count === closest_ul.find("ul").length)
        parallel_active_links.removeClass("active");
    });

    if (!link_status) {
      closest_li.siblings().removeClass("active");
      closest_li.children("ul").slideDown();
      closest_li.addClass("active");
    }
  })
}());