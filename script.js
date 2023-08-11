//...........media для меню

const mediaQueryMax500 = window.matchMedia('(max-width: 500px)');
const mediaQueryMin501 = window.matchMedia('(min-width: 501px)')

if (mediaQueryMax500.matches) {
    function ourworks() {
        let myDropdown1 = document.getElementById("button1").getBoundingClientRect().x;
        let myDropdown1y = document.getElementById("button1").getBoundingClientRect().y;

        document.getElementById("myDropdown1").classList.toggle("show");
        document.getElementById("myDropdown1").style.left = "0px";
        document.getElementById("myDropdown1").style.marginTop = "0";
        document.getElementById("myDropdown1").style.width = "100%";
        document.querySelector(".menu_item_btn").style.paddingRight = "0";
        document.querySelector(".menu_item_btn").style.paddingLeft = "0";
    }

    function order_data() {
        let myDropdown2 = document.getElementById("button2").getBoundingClientRect().x;
        let myDropdown2y = document.getElementById("button2").getBoundingClientRect().y;

        document.getElementById("myDropdown2").classList.toggle("show");
        document.getElementById("myDropdown2").style.left = "0";
        document.querySelector(".menu_item_btn").style.paddingRight = "0";
        document.querySelector(".menu_item_btn").style.paddingLeft = "0";
        document.getElementById("myDropdown2").style.marginTop = "0";
        document.getElementById("myDropdown2").style.width = "100%";
    }

    function about_us() {
        let myDropdown3 = document.getElementById("button3").getBoundingClientRect().x;
        let myDropdown3y = document.getElementById("button3").getBoundingClientRect().y;

        document.getElementById("myDropdown3").classList.toggle("show");
        document.getElementById("myDropdown3").style.left = "0px";
        document.getElementById("myDropdown3").style.marginTop = "0";
        document.getElementById("myDropdown3").style.width = "100%";
        document.querySelector(".menu_item_btn").style.paddingRight = "0";
        document.querySelector(".menu_item_btn").style.paddingLeft = "0";
    }
}

if (mediaQueryMin501.matches) {
    function ourworks() {
        let myDropdown1 = document.getElementById("button4").getBoundingClientRect().x;
        let myDropdown1y = document.getElementById("button4").getBoundingClientRect().y;

        document.getElementById("myDropdown4").classList.toggle("show");
        document.getElementById("myDropdown4").style.left = `${myDropdown1}px`;
        document.getElementById("myDropdown4").style.marginTop = "2.5vw";
    }

    function order_data() {
        let myDropdown2 = document.getElementById("button5").getBoundingClientRect().x;
        let myDropdown2y = document.getElementById("button5").getBoundingClientRect().y;

        document.getElementById("myDropdown5").classList.toggle("show");
        document.getElementById("myDropdown5").style.left = `${myDropdown2}px`;
        document.getElementById("myDropdown5").style.marginTop = "2.5vw";
    }

    function about_us() {
        let myDropdown3 = document.getElementById("button6").getBoundingClientRect().x;
        let myDropdown3y = document.getElementById("button6").getBoundingClientRect().y;

        document.getElementById("myDropdown6").classList.toggle("show");
        document.getElementById("myDropdown6").style.left = `${myDropdown3/*-  window.innerWidth * 0.025*/}px`;
        document.getElementById("myDropdown6").style.marginTop = "2.5vw";
    }
}


//.........date

Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();

// Преобразуем месяца
switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}

document.querySelector(".day").innerHTML = Day;
document.querySelector(".month").innerHTML = fMonth;
document.querySelector(".year").innerHTML = Year;

//scroll

function getBodyScrollTop() {
    let offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);

    if (offset < window. innerWidth * 0.17) {
        document.querySelector('.menu').classList.add("absolute-menu");
        document.querySelector('.menu').classList.remove("fixed-menu-top");
    }

    if (offset > window. innerWidth * 0.17) {
        document.querySelector('.menu').classList.add("fixed-menu-top");
        document.querySelector('.menu').classList.remove("absolute-menu");
    }
}

window.addEventListener("scroll", getBodyScrollTop);