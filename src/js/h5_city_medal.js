$(function(){
    resetScale();
    $(window).resize(function(){
        resetScale();
    });

    cityMedal.init();
});

var medal_list = [{
    "medal_id": 6200,
    "img_up": "./src/images/temp/1.png",
    "name": "成都站",
    "end": 1500911999000,
    "target": 6660,
    "is_progress": 2,
    "img_down": "./src/images/city-1.png",
    "start": 1500652800000,
}, {
    "medal_id": 6201,
    "img_up": "./src/images/temp/2.png",
    "name": "昆明站",
    "end": 1501343999000,
    "target": 6660,
    "is_progress": 2,
    "img_down": "",
    "start": 1501257600000,
}, {
    "medal_id": 11001,
    "img_up": "./src/images/temp/xian.png",
    "target": 6660,
    "end": 1503158399000,
    "name": "西安站",
    "is_progress": 1,
    "img_down": "./src/images/city-1.png",
    "start": 1503072000000,
}, {
    "medal_id": 11002,
    "img_up": "./src/images/temp/4.png",
    "name": "敦煌站",
    "end": 1503763199000,
    "target": 6660,
    "is_progress": 0,
    "img_down": "",
    "start": 1503676800000,
}, {
    "medal_id": 11003,
    "img_up": "./src/images/temp/3.png",
    "name": "上海站",
    "end": 1504367999000,
    "target": 6660,
    "is_progress": 0,
    "img_down": "",
    "start": 1504281600000,
}];

var cityMedal = {
    'currentMedal': {},
    'init': function(){
        var self = this;
        //self.getCityList();
        Medal.init(medal_list);
        $('.container').removeClass('hidden');
        $('.loading').hide();

        self.initEvents();
    },
    'initEvents': function(){
        var self = this;
        $('.guide').click(function(){
            $(this).hide();
        });

        $('[data-action]').click(function(){
            var $_this = $(this);
            var action = $_this.data('action');
            switch (action){
                case 'ruleTipOpen':
                    self.ruleTip.open();
                    break;
                case 'ruleTipClose':
                    self.ruleTip.close();
                    break;
                case 'toJoin':
                    self.joinSuccess();
                    //self.toJoin();
                    break;
            }
        })
    },
    'ruleTip': {
        'open': function(){
            $('.J-rule-tip').show();
            $('.J-rule-tip .rule-box').addClass('visible');
        },
        'close': function(){
            $('.J-rule-tip').hide();
            $('.J-rule-tip .rule-box').removeClass('visible');
        }
    },
    'toJoin': function(){
        var self = this;
        if(global.browser().lemon){
            self.joinSignUp();
        }else{
            location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.lemon.running';
        }
    },
    'joinSignUp': function(){
        var self = this;
        var userInfo = global.getUserInfo();
        $('.loading').show();
        var data = {
            user_id: userInfo.user_id,
            token: userInfo.token,
            medal_id: self.currentMedal.medal_id,
            interface: '/api/v1/medal/sign_up',
            server: page.isDev(parseInt(userInfo.user_id)) ? 'dev' : 'product'
        };
        console.log('data-->', data);
        $.ajax({
            type: "GET",
            cache: false,
            url: "/home/score/curl-get",
            data: data,
            dataType: "json",
            success: function (res) {
                console.log(res);
                if(res.code || res.error_code){
                    $.alert(res.msg, res.error_code);
                }else{
                    self.joinSuccess();
                }
                $('.loading').hide();
            },
            error: function (err) {
                $('.loading').hide();
                $.alert('网络出错', '');
            }
        });
    },
    'joinSuccess': function(){
        $('.container').addClass('flipping');
        setTimeout(function(){
            $('.bottom-btn-box').addClass('join-change');
            setTimeout(function(){
                $('.container').addClass('has-join').removeClass('flipping');
            }, 1200);
        }, 800);
    },
    'getCityList': function(){
        var self = this;
        var userInfo = global.getUserInfo();
        $('.loading').show();
        var data = {
            user_id: userInfo.user_id,
            token: userInfo.token,
            interface: global.browser().lemon ? '/api/v1/medal/city_list' : '/api/v1/medal/web_city_list',
            server: page.isDev(parseInt(userInfo.user_id)) ? 'dev' : 'product'
        };
        console.log('data-->', data);
        $.ajax({
            type: "GET",
            cache: false,
            url: "/home/score/curl-get",
            data: data,
            dataType: "json",
            success: function (res) {
                console.log(res);
                if(res.code || res.error_code){
                    $.alert(res.msg, '');
                }else{
                    Medal.init(res.data.records);
                    $('.J-join-num').html(res.data.sign_num);
                    if(res.data.is_sign){
                        $('.container').addClass('has-join');
                    }
                }
                $('.container').removeClass('hidden');
                $('.loading').hide();
            },
            error: function (err) {
                $('.loading').hide();
                $.alert('网络出错', '');
                $('.container').removeClass('hidden');
            }
        });
    }
};

var Medal = {
    _page: $('.page-2'),
    _medalLists: $('.J-medal-lists'),
    _cityLists: $('.J-city-lists'),
    isAnimating: false,
    currentIndex: 0,
    rotateAngle: 0,
    totalNum: 0,
    init: function(medal_list){
        var self = this;

        self.setMedalHtml(medal_list);
        self.totalNum = medal_list.length * 2;
        self._medalLists.find('li').eq(self.formatIndex(self.currentIndex)).addClass('current');
        self._cityLists.find('li').eq(self.formatIndex(self.currentIndex)).addClass('current');
        self._cityLists.find('li').eq(self.formatIndex(self.currentIndex + 1)).addClass('current');

        self.initEvent();
    },
    initEvent: function(){
        var self = this;
        var $_body = $("body"),
            startX = 0,
            startY = 0;
        var $_tarchBox = self._page;

        $_tarchBox.on("touchstart", function(e) {
            e.preventDefault();
            startX = e.originalEvent.changedTouches[0].pageX;
            startY = e.originalEvent.changedTouches[0].pageY;
        });
        $_tarchBox.on("touchend", function(e) {
            e.preventDefault();
            var moveEndX = e.originalEvent.changedTouches[0].pageX,
                moveEndY = e.originalEvent.changedTouches[0].pageY,
                X = moveEndX - startX,
                Y = moveEndY - startY;

            var towards = false;
            if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
                //console.log('right-->');
                towards = 'right';
            }
            else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
                //console.log('left-->');
                towards = 'left';
            }

            if(towards && !self.isAnimating){
                self.animate(towards, self.refreshMedalData, self.refreshCityData);
            }
        });
    },
    setMedalHtml: function (medal_list){
        var self = this;
        var medal_template = '<li> <img class="medal" src="#medalIcon#" alt=""> <div class="desc"> <p class="desc-1"><span>#stationName#</span> <span>#date#</span></p> <p>单次里程达到6.66KM</p> <p>即可点亮城市勋章</p> </div> </li>';
        var city_template = '<li> <img src="#cityIcon#" alt=""> </li>';
        var medalHtml = '';
        var cityHtml = '';
        for(var i = 0; i < medal_list.length; i++){
            var medal = medal_list[i];
            if(medal.is_progress == 1){
                self.currentIndex = i;
                cityMedal.currentMedal = medal;
            }
            medalHtml += medal_template.replace('#stationName#', medal.name)
                .replace('#medalIcon#', medal.img_up.length ? medal.img_up : './src/images/medal-default.png')
                .replace('#date#', formatDate(medal.start) + '-' + formatDate(medal.end));

            cityHtml += city_template.replace('#cityIcon#', medal.img_down.length ? medal.img_down : './src/images/city-default.png');
        }
        $('.J-station-name').html(cityMedal.currentMedal.name);
        $('.J-date').html(formatDate(cityMedal.currentMedal.start) + '-' + formatDate(cityMedal.currentMedal.end));
        $('.J-medal-current').attr('src',  cityMedal.currentMedal.img_up.length ? cityMedal.currentMedal.img_up : './src/images/medal-default.png');
        self._medalLists.html('').append(medalHtml + medalHtml);
        self._cityLists.html('').append(cityHtml + cityHtml);
    },
    animate: function(towards, medalCallback, cityCallback){
        var self = Medal;
        self._page.addClass('animated-first-half');
        self.rotateEarth(towards);
        self.isAnimating = true;
        setTimeout(function(){
            medalCallback && medalCallback(towards);
            self._page.addClass('animated-bottom-half');
            setTimeout(function(){
                self._page.removeClass('animated-first-half animated-bottom-half');
                cityCallback && cityCallback(towards);
                self.isAnimating = false;
            }, 800);
        }, 800);
    },
    rotateEarth: function (towards){
        var self = this;
        var $_earth = self._page.find('.earth-box');
        !towards ? towards = 'right' : '';
        if(towards == 'left'){
            self.rotateAngle -= 180;
            self._cityLists.find('li').eq(self.formatIndex(self.currentIndex - 1)).removeClass('current');
            self._cityLists.find('li').eq(self.formatIndex(self.currentIndex + 1)).addClass('current');
        }
        if(towards == 'right'){
            self.rotateAngle += 180;
            self._cityLists.find('li').eq(self.formatIndex(self.currentIndex + 1)).removeClass('current');
            self._cityLists.find('li').eq(self.formatIndex(self.currentIndex - 1)).addClass('current');
        }
        $_earth.css({
            '-webkit-transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-o-transform': 'rotate(' + self.rotateAngle + 'deg)',
            'transform': 'rotate(' + self.rotateAngle + 'deg)'
        });
    },
    refreshMedalData: function(towards){
        var self = Medal;
        if(towards == 'left'){
            self.currentIndex = self.formatIndex(self.currentIndex + 1);
        }else{
            self.currentIndex = self.formatIndex(self.currentIndex - 1);
        }
        self._medalLists.find('li').removeClass('current');
        self._medalLists.find('li').eq(self.currentIndex).addClass('current');
    },
    refreshCityData: function(towards){
        var self = Medal;
        if(towards == 'left'){
            self._cityLists.find('li').eq(self.formatIndex(self.currentIndex - 1)).removeClass('current');
            self._cityLists.find('li').eq(self.formatIndex(self.currentIndex + 1)).addClass('current');
        }else{
            self._cityLists.find('li').eq(self.formatIndex(self.currentIndex + 1)).removeClass('current');
            self._cityLists.find('li').eq(self.formatIndex(self.currentIndex - 1)).addClass('current');
        }

    },
    formatIndex: function(index){
        var self = Medal;
        if(index < 0){
            index = index + self.totalNum;
        }
        if(index >= self.totalNum){
            index = index % self.totalNum;
        }
        return index;
    }
};

function resetScale(){
    var preW = 375;
    var preH = 600;
    var screenW = $(window).width();
    var screenH = $(window).height();
    var scale = screenW / preW; //缩放比
    //长宽比的差
    var diff_wh = preW / preH - screenW / screenH;
    if(diff_wh < 0){
        scale = screenH / preH;
    }
    $('.wrapper').css('-webkit-transform','translateX(-50%) scale('+scale+')')
        .css('-moz-transform','translateX(-50%) scale('+scale+')')
        .css('-ms-transform','translateX(-50%) scale('+scale+')')
        .css('-o-transform','translateX(-50%) scale('+scale+')')
        .css('transform','translateX(-50%) scale('+scale+')');
}

function formatDate(timestamp){
    if(!timestamp){
        return 0;
    }
    var date = new Date(timestamp);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var str = '';
    str += month;
    str += '.';
    str += day;
    return str;
}