<template>
  <div id="section">
      
<section id="video" class="scene scene--large video">
        <div class="grid">
          <div class="grid__item">
            <div class="scene__title">
              <h2>Как это работает?</h2>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="video__frame">
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/5IKPxffsmEo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="scene scene--large faq">
        <div class="grid">
          <div class="grid__item">
            <div class="faq__title">
              <h2>О площадке</h2>
            </div>

            <div class="faq__subtitle">
              <p>
                «Площадка для реального бизнеса «Monopoly Life», предлагает
                каждому желающему стать совладельцем действующего бизнеса и
                получать пассивный доход.
              </p>
            </div>
          </div>

          <div class="grid__item">
            <div class="faq__image">
              <img src="~/assets/img/new/pole.png" alt="" />
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="faq__content">
              <p>
                За подробностями о том, как подбирается бизнес, как можно
                увеличить свой доход, что будет если приобрести золотую или
                платиновую фишку, вы можете найти
                <span class="link js-modal-open" data-target="#modal-faq"
                  >здесь</span
                >.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section id="why-project" class="scene scene--large why-project">
        <div class="grid">
          <div class="grid__item">
            <div class="scene__title">
              <h2>Почему стоит поучаствовать в проекте?</h2>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="why-project__steps">
              <div class="why-project__pacman">
                <img
                  src="~/assets/img/new/pacman.svg"
                  width="418"
                  height="430"
                  alt=""
                />
              </div>

              <div class="why-project__content">
                <div class="swiper-container why-project__slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <ul class="why-project__coins why-project__coins--first">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="~/assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">
                            Доступно <br />
                            для каждого
                          </p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide">
                      <ul class="why-project__coins">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xs">
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="~/assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">Безграничный рост прибыли</p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide">
                      <ul class="why-project__coins">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xs">
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="~/assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">
                            Пассивный <br />
                            доход
                          </p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide">
                      <ul class="why-project__coins">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xs">
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="~/assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">
                            Не требует <br />
                            специальных <br />
                            знаний
                          </p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide">
                      <ul class="why-project__coins">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xs">
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="~/assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">
                            Возможность <br />
                            стать владельцем <br />
                            бизнеса
                          </p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide js-target-slider"></div>

                    <div class="swiper-slide"></div>
                  </div>

                  <div class="swiper-button-next why-project__next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="project__action">
              <button class="btn js-modal-open" data-target="#modal-form">
                Теперь я готов играть
              </button>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>