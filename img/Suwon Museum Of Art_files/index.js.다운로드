let hd = document.querySelector("header"),
    main = document.querySelector(".menu"),
    hdText = document.querySelectorAll(".menu li a"),
    loginBox = document.querySelector(".login"),
    sub = document.querySelector(".sub"),
    H1 = document.querySelector("h1 img");
console.log(loginBox);

let fall1 = document.querySelector(".fall1"),
    fall2 = document.querySelector(".fall2"),
    fall3 = document.querySelector(".fall3");

let B1 = document.querySelector(".B1"),
    B2 = document.querySelector(".B2"),
    B3 = document.querySelector(".B3");

let L1 = document.querySelector(".L1"),
    L2 = document.querySelector(".L2");

let section = document.querySelector("#section"),
    sec1 = document.querySelector(".sec1"),
    jul = document.querySelector(".jul"),
    julArrow = document.querySelector(".julArrow"),
    up1 = document.querySelector(".up1"),
    up2 = document.querySelector(".up2"),
    up3 = document.querySelector(".up3"),
    upT1 = document.querySelector(".upT1"),
    upT2 = document.querySelector(".upT2"),
    upT3 = document.querySelector(".upT3");

let slide = document.querySelectorAll(".slides li"),
    slides = document.querySelector(".slides"),
    slideWrap = document.querySelector(".slideWrap");

//비주얼
fall1.style.height = "380px";
fall2.style.height = "380px";
fall3.style.height = "380px";

//세로스크롤

B2.style.margin = 0;
B3.style.margin = 0;

let textChange = () => {
    hdText.forEach((change) => {
        change.style.color = "#222";
    })
}

let textReturn = () => {
    hdText.forEach((change) => {
        change.style.color = "#fff";
    })
}



const mediaQuery = window.matchMedia('(min-width:1200px)')
function HandleQuery(e) {
    if (e.matches) {
        window.addEventListener('scroll', () => {
            // console.log(window.scrollY, "세로");

            let scrollY = window.scrollY



            if (scrollY > 700) {
                L1.style.width = "210px";
                main.style.borderColor = "#222";
                textChange();
                H1.style.filter = "invert(0%)";
                loginBox.style.color = "#222";
            } else {
                L1.style.width = "0";
                main.style.borderColor = "#fff";
                textReturn();
                H1.style.filter = "invert(100%)";
                loginBox.style.color = "#fff";
            }
            if (scrollY > 900) {
                B1.style.marginLeft = 0;
            } else {
                B1.style.marginLeft = "300px";
            }
            if (scrollY > 1700) {
                B2.style.marginLeft = 0;
            } else {
                B2.style.marginLeft = "200px";
            }
            if (scrollY > 3000) {
                B3.style.marginLeft = 0;
            } else {
                B3.style.marginLeft = "200px";
            }
            if (scrollY > 3500) {
                L2.style.width = "225px";
            } else {
                L2.style.width = "0";
            }
            if (scrollY > 5400) {
                sec1.style.opacity = 1;
                section.style.paddingTop = "500px";
            } else {
                sec1.style.opacity = 0;
                section.style.paddingTop = "1000px";
            }
            if (scrollY > 7300) {
                jul.style.position = "fixed";
                jul.style.top = "65%";
                jul.style.right = "16%";
            }
            if (scrollY > 8200) {
                julArrow.style.opacity = "1";
                jul.style.opacity = "1";
            } else {
                julArrow.style.opacity = "0";
                jul.style.opacity = "0";
                jul.style.transition = "0.5s";
            }
            if (scrollY > 7750 && scrollY < 15000) {
                slideWrap.style.position = "fixed";
                slideWrap.style.top = "350px";

            } else {
                slideWrap.style.position = "relative";
            }
            if (scrollY > 8500 && scrollY < 9500) {
                up1.style.top = "80%";
                up1.style.opacity = "1"
                up1.style.position = "fixed";
                up1.style.left = "50%";
                up1.style.transform = "translateX(-50%)";

                upT1.style.top = "80%";
                upT1.style.opacity = "1"
                upT1.style.position = "fixed";
                upT1.style.right = "15%";
                upT1.style.transform = "translateX(-50%)";
            } else {
                up1.style.opacity = "0"
                up1.style.transition = "0"

                upT1.style.opacity = "0"
                upT1.style.transition = "0"
            }
            if (scrollY > 10000 && scrollY < 11000) {
                up2.style.top = "80%";
                up2.style.opacity = "1"
                up2.style.position = "fixed";
                up2.style.left = "50%";
                up2.style.transform = "translateX(-50%)";

                upT2.style.top = "80%";
                upT2.style.opacity = "1"
                upT2.style.position = "fixed";
                upT2.style.right = "15%";
                upT2.style.marginTop = "20px";
                upT2.style.transform = "translateX(-50%)";
            } else {
                up2.style.opacity = "0"
                up2.style.transition = "0"

                upT2.style.opacity = "0"
                upT2.style.transition = "0"
            }
            if (scrollY > 11500 && scrollY < 12500) {
                up3.style.top = "80%";
                up3.style.opacity = "1"
                up3.style.position = "fixed";
                up3.style.left = "50%";
                up3.style.transform = "translateX(-50%)";

                upT3.style.top = "80%";
                upT3.style.opacity = "1"
                upT3.style.position = "fixed";
                upT3.style.right = "15%";
                upT3.style.transform = "translateX(-50%)";
            } else {
                up3.style.opacity = "0"
                up3.style.transition = "0"

                upT3.style.opacity = "0"
                upT3.style.transition = "0"
            }
        })

        //가로 스크롤
        window.addEventListener('scroll', function () {
            let trX = -1 / 18 * this.window.scrollY + 1000 / 18
            // console.log(trX, "가로")

            if (trX < -130) {
                this.document.querySelector('.innerScroll').style.transform = `translateX(-130vw)`
            } else if (trX < 0) {
                document.querySelector('.innerScroll').style.transform = `translateX(${trX}vw)`
            }
        })




        //슬라이드
        let currentIndex = 1;

        const totalSlides = slide.length;

        const firstClone = slide[0].cloneNode(true);
        firstClone.classList.add('clone')
        slides.appendChild(firstClone);

        const lastClone = slide[totalSlides - 1].cloneNode(true);
        lastClone.classList.add('clone');
        slides.insertBefore(lastClone, slide[0]);

        const slideWidth = slide[0].clientWidth;
        // // const slideHeight = 1000;

        slides.style.transform = `translateX(${-slideWidth}px)`

        function slideShow(index) {
            slides.style.transition = `transform 0.5s ease-in-out`;
            slides.style.transform = `translateX(${-index * slideWidth}px)`;
        }

        function nextSlide() {
            currentIndex++;
            slideShow(currentIndex);

            if (currentIndex === totalSlides + 1) {
                setTimeout(() => {
                    slides.style.transition = 'none';
                    currentIndex = 1;
                    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`
                }, 500)
            }
        }

        setInterval(nextSlide, 3000);

        slideShow(currentIndex);


    }
}
HandleQuery(mediaQuery);