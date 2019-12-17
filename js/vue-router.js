Vue.component('loading-screen', {
  template: '#loading-screen'
})

const Home = {
    template: '#home',
    data() {
      return {
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
                icoImg: "img/ididwhat_icon.png",
                routeURL: "/i-did-what"
            },
            {
                headlineFirstLine: "ELISIAN",
                headlineSecondLine: "Cosmetics",
                sublineFirstLine: "BRANDING",
                sublineSecondLine: "PACKAGE DESIGN",
                bgImg: "img/elisian_bg.jpg",
                rectImg: "img/elisian_thumb.png",
                icoImg: "img/elisian_icon.png",
                routeURL: "/elisian"
            },
            {
                headlineFirstLine: "AMS",
                headlineSecondLine: "Building",
                sublineFirstLine: "BRAND IDENTITY",
                sublineSecondLine: "WEB DESIGN",
                bgImg: "img/ams_bg.jpg",
                rectImg: "img/ams_thumb.png",
                icoImg: "img/ams_icon.png",
                routeURL: "/i-did-what"
            },
            {
                headlineFirstLine: "COYOTE",
                headlineSecondLine: "BOXING",
                sublineFirstLine: "LOGO DESIGN",
                sublineSecondLine: "BRAND IDENTITY",
                bgImg: "img/cbc_bg.jpg",
                rectImg: "img/cbc_thumb.png",
                icoImg: "img/cbc_icon.png",
                routeURL: "/i-did-what"
            },
            {
                headlineFirstLine: "Compass",
                headlineSecondLine: " ",
                sublineFirstLine: "UX DESIGN",
                sublineSecondLine: "WEB DESIGN",
                bgImg: "img/compass_bg.jpg",
                rectImg: "img/compass_thumb.png",
                icoImg: "img/compass_icon.png",
                routeURL: "/i-did-what"
            }
        ]
      }
    },
    mounted() {/*
      var productRotatorSlide = document.getElementById("app");
      var startX = 0;
      var endX = 0;

      productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

      productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

      productRotatorSlide.addEventListener("touchend", function(event) {
          var threshold = startX - endX;

          if (threshold < 250 && 0 < this.currentSlide) {
              this.currentSlide--;
          }
          if (threshold > -250 && this.currentSlide < this.slides.length - 1) {
              this.currentSlide++;
          }
      }.bind(this));
    */},
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        },
        prevSlide() {
          if ( 0 < this.currentSlide) {
              this.currentSlide--;
          }
        },
        nextSlide() {
          if ( this.currentSlide < this.slides.length - 1) {
              this.currentSlide++;
          }
        }
    }

}

const IDidWhat = {
    template: '#project-template',
    mounted() {
      var Scrollbar = window.Scrollbar;
      Scrollbar.init(document.querySelector('#scrollbar'), {
        damping: 0.1
      });
    },
};

const Elisian = {
    template: '#elisian-project',
    mounted() {
      var Scrollbar = window.Scrollbar;
      Scrollbar.init(document.querySelector('#scrollbar'), {
        damping: 0.1
      });
    },
};

const AMSBuilding = {
    template: '#project-template'
};

const CoyoteBoxing = {
    template: '#project-template'
};

const Compass = {
    template: '#project-template'
};

const routes = [
    { path: '', component: Home },
    { path: '/i-did-what', component: IDidWhat },
    { path: '/elisian', component: Elisian },
    { path: '/ams-building', component: AMSBuilding },
    { path: '/coyote-boxing', component: CoyoteBoxing },
    { path: '/compass', component: Compass }
]

const router = new VueRouter({
    routes
});

new Vue({
    router,
    data: {
      isLoading: true
    },
    mounted() {

      //Loading Screen
      $('.loadingBar').delay(1500).animate({width: '100%'}, 2000);
      $('.loadingElements').delay(500).animate({opacity: '1'}, 1000);

      setTimeout(() => {
        $('.wrapper').addClass('fade-load');
        $('.loadingContainer').fadeOut(1000, function() {
          $('.splashScreen').fadeOut(2000, function() {
              this.isLoading = false;
          });
        });
      }, 4500)
    }
}).$mount('#app');
