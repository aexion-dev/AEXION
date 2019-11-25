var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "I Did",
                headlineSecondLine: "What?",
                sublineFirstLine: "UX DESIGN",
                sublineSecondLine: "APP DEVELOPMENT",
                bgImg: "img/ididwhat_bg.jpg",
                rectImg: "img/ididwhat_thumb.png",
                icoImg: "img/ididwhat_icon.png"
            },
            {
                headlineFirstLine: "ELISIAN",
                headlineSecondLine: "Cosmetics",
                sublineFirstLine: "BRANDING",
                sublineSecondLine: "PACKAGE DESIGN",
                bgImg: "img/elisian_bg.jpg",
                rectImg: "img/elisian_thumb.png",
                icoImg: "img/elisian_icon.png"
            },
            {
                headlineFirstLine: "AMS",
                headlineSecondLine: "Construction",
                sublineFirstLine: "BRAND IDENTITY",
                sublineSecondLine: "WEB DESIGN",
                bgImg: "img/ams_bg.jpg",
                rectImg: "img/ams_thumb.png",
                icoImg: "img/ams_icon.png"
            },
            {
                headlineFirstLine: "COYOTE",
                headlineSecondLine: "BOXING",
                sublineFirstLine: "LOGO DESIGN",
                sublineSecondLine: "BRAND IDENTITY",
                bgImg: "img/cbc_bg.jpg",
                rectImg: "img/cbc_thumb.png",
                icoImg: "img/cbc_icon.png"
            },
            {
                headlineFirstLine: "",
                headlineSecondLine: "Compass",
                sublineFirstLine: "UX DESIGN",
                sublineSecondLine: "WEB DESIGN",
                bgImg: "img/compass_bg.jpg",
                rectImg: "img/compass_thumb.png",
                icoImg: "img/compass_icon.png"
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})
