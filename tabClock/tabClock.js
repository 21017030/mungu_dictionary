window.onload = function(){
        let years = document.getElementById("year_month_day_week");
        let time = document.getElementById("hour_minute_second");
        setInterval(function(){
            let now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let day = now.getDate();
            let week = now.getDay(); // 0(일)~6(토)
            let hours = now.getHours();
            let min = now.getMinutes();
            let seconds = now.getSeconds();
            let weekDay = ['일요일','월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

            years.innerHTML = year + "년 " + month + "월 " + day + "일 " + weekDay[week]; // 날짜, 시간, 요일 표시
            if(min<10) 
                min = "0" + min;
            if(seconds <10)
                seconds = "0" + seconds;
            if(hours >=0 && hours <12){
                if(hours==0)
                    hours=12;
                hours = "AM &nbsp;" + hours;
            }
            else{
                if(hours==12)
                    hours = "PM &nbsp;" + hours;
                else
                    hours = "PM &nbsp;" + (hours - 12);
            }
            time.innerHTML = hours + ":" + min + ":" + seconds;
                
        }, 500);
    };