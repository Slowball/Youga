window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTagContent (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTagContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTagContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    // add timer next

    let deadLine = '2028-10-21';

    function getTimeRemaining (endtime) {
        let x = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((x/1000) % 60);
        let minutes = Math.floor((x/1000/60) % 60);
        let hours = Math.floor(x/(1000*60*60));
        return {
            'total' : x,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours,
        };
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let x = getTimeRemaining(endtime);

            function addZero (num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(x.hours);
            minutes.textContent = addZero(x.minutes);
            seconds.textContent = addZero(x.seconds);

            if (x.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadLine);
});