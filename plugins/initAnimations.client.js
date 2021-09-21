

module.exports.initAll = () => {
    const { disablePageScroll, enablePageScroll } = require("scroll-lock");
    const { gsap, ScrollTrigger } = require("gsap/all");
   const Swiper = require("swiper/js/swiper");

   
    document.querySelector(".js-collapse-faq-toggle") &&
        document.querySelectorAll(".js-collapse-faq-toggle").forEach((e) => {
            e.addEventListener("click", () => {
                if (e.classList.contains("faq-info__toggle--show"))
                    document.querySelectorAll(".faq-info__collapse").forEach((e) => {
                        e.classList.remove("faq-info__collapse--show");
                    }),
                        document.querySelectorAll(".faq-info__toggle").forEach((e) => {
                            e.classList.remove("faq-info__toggle--show");
                        });
                else {
                    document.querySelectorAll(".faq-info__collapse").forEach((e) => {
                        e.classList.remove("faq-info__collapse--show");
                    }),
                        document.querySelectorAll(".faq-info__toggle").forEach((e) => {
                            e.classList.remove("faq-info__toggle--show");
                        }),
                        e.classList.toggle("faq-info__toggle--show");
                    const t = e.getAttribute("data-target-faq");
                    document
                        .querySelector(t)
                        .classList.toggle("faq-info__collapse--show");
                }
            });
        }),
        (function () {
            const e = document.querySelector(".features__slide"),
                t = document.querySelector(".features");
            document.querySelectorAll(".js-features-button").forEach((o) => {
                o.addEventListener("click", () => {
                    e.classList.contains("swiper-slide-active")
                        ? t.classList.remove("features--yellow")
                        : t.classList.add("features--yellow");
                });
            });
        })(),
        (function () {
            let e = document.querySelector(".features__text");
            let t = e.offsetHeight;
            document.documentElement.style.setProperty(
                "--features-height",
                "".concat(t, "px")
            ),
                window.addEventListener("resize", () => {
                    (t = e.offsetHeight),
                        document.documentElement.style.setProperty(
                            "--features-height",
                            "".concat(t, "px")
                        );
                });
        })(),
        (function () {
            const e = document.querySelector(".header");
            let t = e.offsetHeight;
            document.documentElement.style.setProperty(
                "--header-height",
                "".concat(t, "px")
            ),
                window.addEventListener("resize", () => {
                    (t = e.offsetHeight),
                        document.documentElement.style.setProperty(
                            "--header-height",
                            "".concat(t, "px")
                        );
                });
        })(),
        (function () {
            const e = document.querySelector(".header__open"),
                t = document.querySelector(".header__close"),
                o = document.querySelector(".header__collapse"),
                a = document.querySelectorAll(".header__menu--collapse a");
            e.addEventListener("click", () => {
                o.classList.add("header__collapse--open"), disablePageScroll();
            }),
                t.addEventListener("click", () => {
                    o.classList.remove("header__collapse--open"), enablePageScroll();
                }),
                a.forEach((e) => {
                    e.addEventListener("click", (e) => {
                        o.classList.remove("header__collapse--open"),
                            enablePageScroll();
                    });
                });
        })();
    // const inputPhones = document.querySelectorAll(".input-phone");
    // inputPhones && Inputmask({ mask: "+7(999) 999-99-99" }).mask(inputPhones),
        (function () {
            if (document.querySelector(".modal")) {
                const e = () => {
                    document.querySelectorAll(".modal").forEach((e) => {
                        e.classList.remove("modal--show");
                    });
                };
                document.querySelectorAll(".js-modal-open").forEach((t) => {
                    t.addEventListener("click", () => {
                        e();
                        const o = t.getAttribute("data-target");
                        document.querySelector(o).classList.add("modal--show"),
                            disablePageScroll();
                    });
                }),
                    document.querySelectorAll(".js-modal-close").forEach((e) => {
                        e.addEventListener("click", () => {
                            document.querySelectorAll(".modal").forEach((e) => {
                                e.classList.remove("modal--show"), enablePageScroll();
                            });
                        });
                    }),
                    document.querySelectorAll(".modal__overlay").forEach((e) => {
                        e.addEventListener("click", () => {
                            document.querySelectorAll(".modal").forEach((e) => {
                                e.classList.remove("modal--show"), enablePageScroll();
                            });
                        });
                    }),
                    document.addEventListener("keydown", (e) => {
                        27 === e.keyCode &&
                            document.querySelectorAll(".modal").forEach((e) => {
                                e.classList.remove("modal--show"), enablePageScroll();
                            });
                    });
            }
        })(),
        gsap.registerPlugin(ScrollTrigger),
        document.documentElement.clientWidth >= 1920 &&
        gsap.utils.toArray(".scene--large").forEach((e, t) => {
            ScrollTrigger.create({
                trigger: e,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    switch (t) {
                        case 0:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--active"),
                                        e.classList.remove("navigation__item--back");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(1)")
                                    .classList.add("navigation__item--active");
                            break;
                        case 1:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--active"),
                                        e.classList.remove("navigation__item--back");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(2)")
                                    .classList.add("navigation__item--active");
                            break;
                        case 2:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--active"),
                                        e.classList.remove("navigation__item--back");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(3)")
                                    .classList.add("navigation__item--active");
                            break;
                        case 3:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--active"),
                                        e.classList.remove("navigation__item--back");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(4)")
                                    .classList.add("navigation__item--active");
                            break;
                        case 4:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--active"),
                                        e.classList.remove("navigation__item--back");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(5)")
                                    .classList.add("navigation__item--active");
                            break;
                        case 5:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--active"),
                                        e.classList.remove("navigation__item--back");
                                }),
                                document
                                    .querySelector(".navigation")
                                    .classList.add("navigation--dark"),
                                document
                                    .querySelector(".navigation__item:nth-child(6)")
                                    .classList.add("navigation__item--back");
                    }
                },
                onEnterBack: () => {
                    switch (t) {
                        case 0:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--back"),
                                        e.classList.remove("navigation__item--active");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(1)")
                                    .classList.add("navigation__item--active");
                            break;
                        case 1:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--back"),
                                        e.classList.remove("navigation__item--active");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(2)")
                                    .classList.add("navigation__item--back");
                            break;
                        case 2:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--back"),
                                        e.classList.remove("navigation__item--active");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(3)")
                                    .classList.add("navigation__item--back");
                            break;
                        case 3:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--back"),
                                        e.classList.remove("navigation__item--active");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(4)")
                                    .classList.add("navigation__item--back");
                            break;
                        case 4:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--back"),
                                        e.classList.remove("navigation__item--active");
                                }),
                                document
                                    .querySelector(".navigation")
                                    .classList.remove("navigation--dark"),
                                document
                                    .querySelector(".navigation__item:nth-child(5)")
                                    .classList.add("navigation__item--back");
                            break;
                        case 5:
                            document
                                .querySelectorAll(".navigation__item")
                                .forEach((e) => {
                                    e.classList.remove("navigation__item--back"),
                                        e.classList.remove("navigation__item--active");
                                }),
                                document
                                    .querySelector(".navigation__item:nth-child(6)")
                                    .classList.add("navigation__item--active");
                    }
                },
            });
        });
    const coinsArray = [],
        widthPacman =
            document.querySelector(".why-project__pacman").clientWidth / 2,
        widthPacmanMobile =
            document.querySelector(".why-project__pacman").clientWidth / 1.5,
        centerPacman =
            document.querySelector(".why-project__steps").clientWidth / 2 -
            widthPacman,
        widthCoins = document.querySelector(".why-project__coins").clientWidth,
        sizePacman = document.querySelector(".why-project__pacman").clientWidth,
        offsetCoins = -1 * (widthCoins + sizePacman),
        nextCoins = document.querySelector(".why-project__next"),
        targetSlider = document.querySelector(".js-target-slider");
    gsap.set(".why-project__pacman", { x: centerPacman }),
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function () {
                gsap.to(".why-project__pacman", {
                    x: 0,
                    scrollTrigger: {
                        trigger: ".why-project",
                        start: "top 60%",
                        end: "bottom bottom",
                        once: !0,
                        scrub: !0,
                    },
                });
            },
            "(max-width: 767px)": function () {
                gsap.to(".why-project__pacman", {
                    x: -widthPacmanMobile,
                    scrollTrigger: {
                        trigger: ".why-project",
                        start: "top 60%",
                        end: "bottom bottom",
                        once: !0,
                        scrub: !0,
                    },
                });
            },
        }),
        nextCoins.addEventListener("click", () => {
            gsap.to(".swiper-slide-active p", { opacity: 0, duration: 0.1 }),
                targetSlider.classList.contains("swiper-slide-next") &&
                (console.log("target"),
                    gsap.to(".why-project__pacman", { x: centerPacman, delay: 1 }),
                    gsap.to(nextCoins, { opacity: 0 }));
        }),
        (function () {
            const e = document.querySelector(".promo__frame");
            let t = e.offsetHeight;
            document.documentElement.style.setProperty(
                "--promo-height",
                "".concat(t, "px")
            ),
                window.addEventListener("resize", () => {
                    (t = e.offsetHeight),
                        document.documentElement.style.setProperty(
                            "--promo-height",
                            "".concat(t, "px")
                        );
                });
        })(),
        (function () {
            function e(e, t) {
                const o = !!e && document.querySelector(e);
                o &&
                    (t && t.preventDefault(),
                        gsap.to(window, {
                            duration: 2,
                            scrollTo: o,
                            ease: "power4.out",
                        }));
            }
            document.querySelectorAll("a[href]").forEach((t) => {
                t.addEventListener("click", (o) => {
                    var a;
                    e(
                        (a = t).protocol === window.location.protocol &&
                        a.host === window.location.host &&
                        a.pathname === window.location.pathname &&
                        a.search === window.location.search &&
                        a.hash,
                        o
                    );
                });
            }),
                e(window.location.hash);
        })();
    const swiperFeatures = new Swiper(".features__slider", {
        navigation: { nextEl: ".features__next", prevEl: ".features__prev" },
    }),
        swiperPromo = new Swiper(".promo__slider", {
            navigation: { nextEl: ".promo__next", prevEl: ".promo__prev" },
        }),
        swiperPacman = new Swiper(".why-project__slider", {
            slidesPerView: 1,
            speed: 750,
            navigation: { nextEl: ".why-project__next", prevEl: ".promo__prev" },
            breakpoints: { 992: { slidesPerView: 2 } },
        });
    let vh = 0.01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px")),
        window.addEventListener("resize", () => {
            (vh = 0.01 * window.innerHeight),
                document.documentElement.style.setProperty(
                    "--vh",
                    "".concat(vh, "px")
                );
        });

}
