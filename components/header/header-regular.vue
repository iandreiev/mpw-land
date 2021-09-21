<template>
    <div id="header">
              <header class="header">
      <div class="header__wrap">
        <div class="header__list">
          <div class="header__fold">
            <ul class="header__menu">
              <li class="header__logo">
                <a href="/">
                  <picture>
                    <source
                      srcset="~/assets/img/new/logo.svg"
                      media="(max-width: 767px)"
                    />
                    <img src="~/assets/img/new/logo_color.svg" alt="" />
                  </picture>
                </a>
              </li>

              <li class="header__toggle">
                <button class="header__open" type="button">
                  <svg width="32" height="32">
                    <use href="~/assets/img/new/sprite.svg#menu"></use>
                  </svg>
                </button>
              </li>

              <li>
                <button
                  class="btn btn--yellow js-modal-open"
                  type="button"
                  data-target="#modal-form"
                >
                  Играть
                </button>
              </li>
            </ul>
          </div>

          <div class="header__collapse" data-scroll-lock-scrollable>
            <button class="header__close" type="button">
              <svg width="32" height="32">
                <use href="~/assets/img/new/sprite.svg#cross-white"></use>
              </svg>
            </button>

            <nav class="header__nav">
              <ul class="header__menu header__menu--collapse">
                <li><a href="#promo">Monopoly life</a></li>
                <li><a href="#project">Наши проекты</a></li>
                <li><a href="#video">Как это работает?</a></li>
                <li><a href="#faq">О площадке</a></li>
                <li><a href="#features">Преимущества</a></li>
                <li><a href="#why-project">Почему стоит поучаствовать?</a></li>
              </ul>

              <div class="header__social">
                <p>Мы в социальных сетях:</p>

                <ul class="social">
                  <li>
                    <a href="#" target="_blank">
                      <svg width="11" height="24">
                        <use href="~/assets/img/new/sprite.svg#fb"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/MonopolyLife_RUS" target="_blank">
                      <svg width="28" height="24">
                        <use href="~/assets/img/new/sprite.svg#telegram"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/monopolylife.ru?utm_medium=copy_link"
                      target="_blank"
                    >
                      <svg width="24" height="24">
                        <use href="~/assets/img/new/sprite.svg#inst"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC-9c_nnHDZAflOquOjiGcKw"
                      target="_blank"
                    >
                      <svg width="34" height="24">
                        <use href="~/assets/img/new/sprite.svg#youtube"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

        <div class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a class="navigation__link" href="#promo"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#project"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#video"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#faq"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#features"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#why-project"></a>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>