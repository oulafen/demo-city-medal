$(function(){
    resetScale();
    $(window).resize(function(){
        resetScale();
    });

    cityMedal.init();
});

var medal_list = [{
    "success_msg": "果然，你完成了这次约定，”跑动西安“已为你点亮，下一站，我们约敦煌，等你哦！",
    "start_time": "2017-09-02 00:00:00",
    "is_gain": 1,
    "medal_id": 11001,
    "img_up": "http://statics.oulafen.com/h5_city_medal/image/color-html-global_city_2017_xianan.png",
    "target": 6660,
    "end": 1504454399000,
    "name": "西安站",
    "is_progress": 2,
    "fail_msg": "你知道吗，虽然你失约了，虽然”跑动成都“未能成行，可我依旧愿意在下一站等你，西安，我们一起！",
    "img_down": "http://statics.oulafen.com/h5_city_medal/image/color-big-global_city_2017_xianann_down.png",
    "start": 1504281600000,
    "end_time": "2017-09-03 23:59:59",
    "gain_time": 0
}, {
    "success_msg": "果然，你完成了这次约定，”跑动敦煌“已为你点亮，下一站，我们约上海，等你哦！",
    "start_time": "2017-09-09 00:00:00",
    "is_gain": 1,
    "medal_id": 11002,
    "img_up": "http://statics.oulafen.com/h5_city_medal/image/color-html-global_city_2017_dunhuang.png",
    "name": "敦煌站",
    "end": 1505059199000,
    "target": 6660,
    "is_progress": 2,
    "fail_msg": "你知道吗，虽然你失约了，虽然”跑动敦煌“未能成行，可我依旧愿意在下一站等你，上海，我们一起！",
    "img_down": "",
    "start": 1504886400000,
    "end_time": "2017-09-10 23:59:59",
    "gain_time": 0
}, {
    "success_msg": "果然，你完成了这次约定，”跑动上海“已为你点亮，下一站，我们约洛阳，等你哦！",
    "start_time": "2017-09-16 00:00:00",
    "is_gain": 1,
    "medal_id": 11003,
    "img_up": "http://statics.oulafen.com/h5_city_medal/image/color-html-global_city_2017_shanghai.png",
    "name": "上海站",
    "end": 1505663999000,
    "target": 6660,
    "is_progress": 2,
    "fail_msg": "你知道吗，虽然你失约了，虽然”跑动上海“未能成行，可我依旧愿意在下一站等你，洛阳，我们一起！",
    "img_down": "http://statics.oulafen.com/h5_city_medal/image/color-big-global_city_2017_shanghai_down.png",
    "start": 1505491200000,
    "end_time": "2017-09-17 23:59:59",
    "gain_time": 0
}, {
    "success_msg": "果然，你完成了这次约定，”跑动洛阳“已为你点亮，下一站，我们约香港，等你哦！",
    "start_time": "2017-09-23 00:00:00",
    "is_gain": 0,
    "medal_id": 11005,
    "img_up": "http://statics.oulafen.com/h5_city_medal/image/color-html-global_city_2017_luoyang.png",
    "name": "洛阳站",
    "end": 1506268799000,
    "target": 6660,
    "is_progress": 2,
    "fail_msg": "你知道吗，虽然你失约了，虽然”跑动洛阳“未能成行，可我依旧愿意在下一站等你，香港，我们一起！",
    "img_down": "http://statics.oulafen.com/h5_city_medal/image/color-big-global_city_2017_shanghai_down.png",
    "start": 1506096000000,
    "end_time": "2017-09-24 23:59:59",
    "gain_time": 0
}, {
    "success_msg": "果然，你完成了这次约定，”跑动重庆“已为你点亮，下一站，我们约泰安，等你哦！",
    "start_time": "2017-09-30 00:00:00",
    "is_gain": 1,
    "medal_id": 11006,
    "img_up": "http://statics.oulafen.com/h5_city_medal/image/color-html-global_city_2017_chongqing.png",
    "name": "重庆站",
    "end": 1506873599000,
    "target": 6660,
    "is_progress": 2,
    "fail_msg": "你知道吗，虽然你失约了，虽然”跑动重庆“未能成行，可我依旧愿意在下一站等你，泰安，我们一起！",
    "img_down": "http://statics.oulafen.com/h5_city_medal/image/color-big-global_city_2017_shanghai_down.png",
    "start": 1506700800000,
    "end_time": "2017-10-01 23:59:59",
    "gain_time": 0
}, {
    "success_msg": "果然，你完成了这次约定，”跑动泰安“已为你点亮，下一站，我们约杭州，等你哦！",
    "start_time": "2017-10-14 00:00:00",
    "is_gain": 0,
    "medal_id": 11007,
    "img_up": "http://statics.oulafen.com/h5_city_medal/image/color-html-global_city_2017_taian.png",
    "name": "泰安站",
    "end": 1508083199000,
    "target": 6660,
    "is_progress": 2,
    "fail_msg": "你知道吗，虽然你失约了，虽然”跑动泰安“未能成行，可我依旧愿意在下一站等你，杭州，我们一起！",
    "img_down": "http://statics.oulafen.com/h5_city_medal/image/color-big-global_city_2017_shanghai_down.png",
    "start": 1507910400000,
    "end_time": "2017-10-15 23:59:59",
    "gain_time": 0
}, {
    "success_msg": "果然，你完成了这次约定，”跑动杭州“已为你点亮，下一站，我们约大连，等你哦！",
    "start_time": "2017-10-21 00:00:00",
    "is_gain": 0,
    "medal_id": 11008,
    "img_up": "http://statics.oulafen.com/h5_city_medal/image/color-html-global_city_2017_hangzhou.png",
    "name": "杭州站",
    "end": 1508687999000,
    "target": 6660,
    "is_progress": 2,
    "fail_msg": "你知道吗，虽然你失约了，虽然”跑动杭州“未能成行，可我依旧愿意在下一站等你，大连，我们一起！",
    "img_down": "http://statics.oulafen.com/h5_city_medal/image/color-big-global_city_2017_shanghai_down.png",
    "start": 1508515200000,
    "end_time": "2017-10-22 23:59:59",
    "gain_time": 0
}, {
    "success_msg": "果然，你完成了这次约定，”跑动大连“已为你点亮，下一站，我们约深圳，等你哦！",
    "start_time": "2017-10-28 00:00:00",
    "is_gain": 1,
    "medal_id": 11009,
    "img_up": "http://statics.oulafen.com/h5_city_medal/image/color-html-global_city_2017_dalian.png",
    "name": "大连站",
    "end": 1509292799000,
    "target": 6660,
    "is_progress": 2,
    "fail_msg": "你知道吗，虽然你失约了，虽然”跑动大连“未能成行，可我依旧愿意在下一站等你，深圳，我们一起！",
    "img_down": "http://statics.oulafen.com/h5_city_medal/image/color-big-global_city_2017_shanghai_down.png",
    "start": 1509120000000,
    "end_time": "2017-10-29 23:59:59",
    "gain_time": 0
}];

var cityMedal = {
    'counter': 30,
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
        //console.log('currentIndex-->', self.currentIndex);
        if(self.currentIndex % 2 != 0){
            self.rotateAngle = -180;
            var $_earth = self._page.find('.earth-box');
            $_earth.removeClass('rotate_0').addClass('rotate_1');
            $_earth.css({
                '-webkit-transform': 'rotate(' + self.rotateAngle + 'deg)',
                '-o-transform': 'rotate(' + self.rotateAngle + 'deg)',
                'transform': 'rotate(' + self.rotateAngle + 'deg)'
            });
        }
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
        var city_template = '<li class="#cityClass#"> <img class="city" src="#cityIcon#" alt=""> <img class="people" src="#peopleIcon#" alt=""> </li>';
        var medalHtml = '';
        var cityHtml = '';
        var medal_list_2 = medal_list.concat(medal_list);
        cityMedal.currentMedal = medal_list[0];
        for(var i = 0; i < medal_list_2.length; i++){
            var medal = medal_list_2[i];
            if(medal.is_progress == 1){ //正在进行中, (0未开始, 1进行中, 2已结束)
                self.currentIndex = i;
                cityMedal.currentMedal = medal;
            }
            medalHtml += medal_template.replace('#stationName#', medal.name ? medal.name : '???')
                .replace('#medalIcon#', medal.img_up.length ? ( medal.is_gain ? medal.img_up : medal.img_up.replace('color', 'gray') ) : './src/images/medal-default.png')
                .replace('#date#', medal.start ? (formatDate(medal.start) + '-' + formatDate(medal.end) ) : '');

            var isOushu = i % 2 == 0;
            cityHtml += city_template.replace('#cityIcon#', medal.img_down.length ? medal.img_down : '" style="display: none;')
                .replace('#peopleIcon#', './src/images/' + (isOushu ? 'city-default-0.png' : 'city-default-1.png' ) )
                .replace('#cityClass#', isOushu ? 'city-default-0' : 'city-default-1');

        }
        $('.J-station-name').html(cityMedal.currentMedal.name);
        $('.J-date').html(formatDate(cityMedal.currentMedal.start) + '-' + formatDate(cityMedal.currentMedal.end));
        $('.J-page0-date').html(formatDate(cityMedal.currentMedal.start - 86400000 * 5) + '-' + formatDate(cityMedal.currentMedal.end));
        $('.J-medal-current').attr('src',  cityMedal.currentMedal.img_up.length ? cityMedal.currentMedal.img_up : './src/images/medal-default.png');
        self._medalLists.html('').append(medalHtml);
        self._cityLists.html('').append(cityHtml);
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