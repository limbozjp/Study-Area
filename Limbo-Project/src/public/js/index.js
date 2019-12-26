import pinyinData from '../json/pinyinData'
export default {
    /**
     * @param 判断页面打开环境
     */
    base_isEquipment () {
        var UA = navigator.userAgent,
        isAndroid = /android|adr|linux/gi.test(UA),
        isIOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid,
        isBlackBerry = /BlackBerry/i.test(UA),
        isWindowPhone = /IEMobile/i.test(UA),
        isMobile = isAndroid || isIOS || isBlackBerry || isWindowPhone;
        return {
            isAndroid: isAndroid,
            isIOS: isIOS,
            isMobile: isMobile,
            isWeixin: /MicroMessenger/gi.test(UA),
            isQQ: /QQ/gi.test(UA),
            isPC: !isMobile,
            isWeibo: /WeiBo/gi.test(UA)
        }
    },
    /**
     * @param 获取当前URL中的参数
     * @param {参数} name
     */
    base_getUrl (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    /**
     * @param 生成min-max/min位随机数 true为min-max/false为min
     * @param {true/false} randomFlag 
     * @param {最小值} min 
     * @param {最大值} max 
     */
    base_randomWord (randomFlag, min, max) {
        var str = "",
            pos,
            range = min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 随机产生
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0; i < range; i++) {
            pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    },
    /**
     * 
     * @param 对象内参数按A-Z进行重新排序
     * @param {对象} arys
     */
    base_objKeySort (arys) {
        //  先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，
        //  newkey是一个数组
        var newkey = Object.keys(arys).sort();
        var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
        for (var i = 0; i < newkey.length; i++) {
            //遍历newkey数组
            newObj[newkey[i]] = arys[newkey[i]];
            //向新创建的对象中按照排好的顺序依次增加键值对
        }
        return newObj; //返回排好序的新对象
    },
    /**
     * 
     * @param {文字转拼音} 
     * @param {text} 需要转换的文字
     */
    base_turnPinYin (text) {
        var textLen = text.length;
        var turnText = "";
        var reg = new RegExp('[a-zA-Z0-9\- ]');
        for (var i = 0; i <textLen; i++) {
            var val = text.substr(i, 1);
            // var name = arraySearch(val, PinYin);
            var name = '';
            for (var n in pinyinData) {
                if (pinyinData[n].indexOf(val) != -1) {
                    if (n.length > 0) {
                        var first = n.substr(0, 1).toUpperCase();
                        var spare = n.substr(1, n.length);
                        name = first + spare;
                    }
                }
            }
            if (reg.test(val)) {
                turnText += val;
            } else if (name !== false) {
                turnText += name;
            }
        }
        turnText = turnText.replace(/ /g, '-');
        while (turnText.indexOf('--') > 0) {
            turnText = turnText.replace('--', '-');
        }
        return turnText;
    },
    /**
     * 
     * @param 获取当前时间
     * @param {20180709103126}
     * @param {2019-03-15 16:08:48}
     */
    base_getNowTime() {
        var nowTime = new Date();
        var nowtimeType;
        var nowYear = nowTime.getFullYear().toString(); //获取完整的年份(4位,1970-????)
        var nowMonth = (nowTime.getMonth() + 1).toString(); //获取当前月份(0-11,0代表1月)
        var nowDate = nowTime.getDate().toString(); //获取当前日(1-31)
        var nowHours = nowTime.getHours().toString(); //获取当前小时数(0-23)
        var nowMinute = nowTime.getMinutes().toString(); //获取当前分钟数(0-59)
        var nowSecond = nowTime.getSeconds().toString(); //获取当前秒数(0-59)
        if (nowMonth < 10) {
            nowMonth = '0' + nowMonth.toString();
        }
        if (nowDate < 10) {
            nowDate = '0' + nowDate.toString();
        }
        if (nowMinute < 10) {
            nowMinute = '0' + nowMinute.toString();
        }
        if (nowSecond < 10) {
            nowSecond = '0' + nowSecond.toString();
        }
        // 20190315160600
        nowtimeType = nowYear + nowMonth + nowDate + nowHours + nowMinute + nowSecond;
        // 2019-03-15 16:08:48
        // nowtimeType = nowYear +'-'+ nowMonth +'-'+ nowDate +' '+ nowHours +':'+ nowMinute +':'+ nowSecond;
        return nowtimeType;
    },
    /** 
     * 时间戳格式化函数 
     * @param  {string} format    格式 
     * @param  {int}    timestamp 要格式化的时间 默认为当前时间 
     * @return {string}           格式化的时间字符串
     * @return {date('Y-m-d','1350052653')}  很方便的将时间戳转换成了2012-10-11
     * @return {date('Y-m-d H:i:s','1350052653')}  得到的结果是2012-10-12 22:37:33
     * @return {时间戳为10位}
     */
    base_timeStamp (format, timestamp) {
        var a, jsdate = ((timestamp) ? new Date(timestamp * 1000) : new Date());
        var pad = function(n, c) {
            if ((n = n + "").length < c) {
                return new Array(++c - n.length).join("0") + n;
            } else {
                return n;
            }
        };
        var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var txt_ordin = { 1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st" };
        var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var f = {
            // Day 
            d: function() { return pad(f.j(), 2) },
            D: function() { return f.l().substr(0, 3) },
            j: function() { return jsdate.getDate() },
            l: function() { return txt_weekdays[f.w()] },
            N: function() { return f.w() + 1 },
            S: function() { return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th' },
            w: function() { return jsdate.getDay() },
            z: function() { return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0 },

            // Week 
            W: function() {
                var a = f.z(),
                    b = 364 + f.L() - a;
                var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
                if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b) {
                    return 1;
                } else {
                    if (a <= 2 && nd >= 4 && a >= (6 - nd)) {
                        nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
                        return date("W", Math.round(nd2.getTime() / 1000));
                    } else {
                        return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
                    }
                }
            },

            // Month 
            F: function() { return txt_months[f.n()] },
            m: function() { return pad(f.n(), 2) },
            M: function() { return f.F().substr(0, 3) },
            n: function() { return jsdate.getMonth() + 1 },
            t: function() {
                var n;
                if ((n = jsdate.getMonth() + 1) == 2) {
                    return 28 + f.L();
                } else {
                    if (n & 1 && n < 8 || !(n & 1) && n > 7) {
                        return 31;
                    } else {
                        return 30;
                    }
                }
            },

            // Year 
            L: function() { var y = f.Y(); return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0 },
            //o not supported yet 
            Y: function() { return jsdate.getFullYear() },
            y: function() { return (jsdate.getFullYear() + "").slice(2) },

            // Time 
            a: function() { return jsdate.getHours() > 11 ? "pm" : "am" },
            A: function() { return f.a().toUpperCase() },
            B: function() {
                // peter paul koch: 
                var off = (jsdate.getTimezoneOffset() + 60) * 60;
                var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
                var beat = Math.floor(theSeconds / 86.4);
                if (beat > 1000) beat -= 1000;
                if (beat < 0) beat += 1000;
                if ((String(beat)).length == 1) beat = "00" + beat;
                if ((String(beat)).length == 2) beat = "0" + beat;
                return beat;
            },
            g: function() { return jsdate.getHours() % 12 || 12 },
            G: function() { return jsdate.getHours() },
            h: function() { return pad(f.g(), 2) },
            H: function() { return pad(jsdate.getHours(), 2) },
            i: function() { return pad(jsdate.getMinutes(), 2) },
            s: function() { return pad(jsdate.getSeconds(), 2) },
            //u not supported yet 

            // Timezone 
            //e not supported yet 
            //I not supported yet 
            O: function() {
                var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
                if (jsdate.getTimezoneOffset() > 0) t = "-" + t;
                else t = "+" + t;
                return t;
            },
            P: function() { var O = f.O(); return (O.substr(0, 3) + ":" + O.substr(3, 2)) },
            //T not supported yet 
            //Z not supported yet 

            // Full Date/Time 
            c: function() { return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P() },
            //r not supported yet 
            U: function() { return Math.round(jsdate.getTime() / 1000) }
        };

        return format.replace(/[/]?([a-zA-Z])/g, function(t, s) {
            if (t != s) {
                // escaped 
                ret = s;
            } else if (f[s]) {
                // a date function exists 
                ret = f[s]();
            } else {
                // nothing special 
                ret = s;
            }
            return ret;
        });
    },
    /**
     * @param {计算两个日期之间相差的天数}
     * @param {date1} yyyymmdd / yyyy-mm-dd 开始时间
     * @param {date2} yyyymmdd / yyyy-mm-dd 结束时间
     */
    base_getDays(date1, date2) {
        date1 = date1.toString();
        date2 = date2.toString();
        date1.match('-') == -1 ? date1 = date1 : date1 = date1.slice(0, 4) + '-' + date1.slice(4, 6) + '-' + date1.slice(6, 8);
        date2.match('-') == -1 ? date2 = date2 : date2 = date2.slice(0, 4) + '-' + date2.slice(4, 6) + '-' + date2.slice(6, 8);
        // console.log(date1, date2);
        var date1Str = date1.split("-"); //将日期字符串分隔为数组,数组元素分别为年.月.日
        //根据年 . 月 . 日的值创建Date对象
        var date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2]);
        var date2Str = date2.split("-");
        var date2Obj = new Date(date2Str[0], (date2Str[1] - 1), date2Str[2]);
        var t1 = date1Obj.getTime();
        var t2 = date2Obj.getTime();
        var dateTime = 1000 * 60 * 60 * 24; //每一天的毫秒数
        var minusDays = Math.floor(((t2 - t1) / dateTime)); //计算出两个日期的天数差
        var days = Math.abs(minusDays) + 1; //取绝对值
        return days;
    },
    /**
     * 
     * @param {计算结束时间 yyyy.mm.dd}
     * @param {开始时间 格式为:yyyy-mm-dd 否则ios无法正常编译} startDate
     * @param {增加时间} valueTime
     * @param {true, false} type
     * 
     */
    base_endTime(startDate, valueTime, type) {
        // console.log(startDate);
        var date = new Date(startDate);
        var newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + valueTime);
        var year1 = date.getFullYear();
        var month1 = date.getMonth() + 1;
        var day1 = date.getDate();
        var year2 = newDate.getFullYear().toString();
        var month2 = newDate.getMonth() + 1;
        var day2 = newDate.getDate();
        month2 < 10 ? month2 = '0' + month2 : month2 = month2;
        day2 < 10 ? day2 = '0' + day2 : day2 = day2;
        // console.log(date);
        var endTime;
        endTime = year2 + '.' + month2 + '.' + day2;
        return endTime;
    },
    /**
     * 
     * @param {倒计时函数}
     * @param {时间戳转为时间hhmmss}
     * @param {time} base_formatDuring时间数组
     * 
     */
    base_countDownTime(time) {
        var hours = time.hours;
        var minutes = time.minutes;
        var seconds = time.seconds;
        var arr;
        var countDown = setInterval(function() {
            seconds = seconds - 1;
            if (seconds < 0) {
                seconds = 59;
                minutes = minutes - 1;
            };
            if (minutes < 0) {
                minutes = 59;
                hours = hours - 1;
            };
            arr = {
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        }, 1000)
    },
    /**
     * 
     * @param {时间戳转时间}
     * @param {mss} 时间戳
     * @param {用于时间戳相减，计算倒计时} 时间戳
     * 
     */
    base_formatDuring(mss) {
        var days = parseInt(mss / (1000 * 60 * 60 * 24));
        var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = parseInt((mss % (1000 * 60)) / 1000);
        hours = hours + days * 24;
        var arr = {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
        return arr;
    },
    /**
     * 
     * @param {数字转化每三位进行分割}  
     * @param {num} 数字
     */
    base_toThousands(num) {
        var num = (num || 0).toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    },
    
}

