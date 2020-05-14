<template>
  <div class="page">
    <footer class="footer">
      <div>
        <h2 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h2>
      </div>
      <footer-nav class="footer__nav" />
      <ul class="footer__list-items">
        <li class="footer__list-item">
          <p class="footer__subtitle">
            Мы в
            <a
              href="https://www.instagram.com/raklechitsa/"
              class="footer__social-link"
              target="_blank"
              >Инстаграме</a
            >
            и
            <a
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              class="footer__social-link"
              target="_blank"
              >Youtube</a
            >
          </p>
        </li>
        <li class="footer__list-item">
          <share-btn @btn-click="$emit('openShare')" theme="share"
            >Поделитесь &#8599;</share-btn
          >
        </li>
      </ul>
      <copyright class="copyright footer__copyright"
        >Рак Лечится 2020</copyright
      >
      <copyright>Сделано студентами Яндекс Практикум</copyright>
    </footer>
  </div>
</template>

<script>
import Nav from '~/components/ui/Nav';
import Copyright from '@/components/Copyright';
import Button from '~/components/ui/Button';

export default {
  components: {
    'footer-nav': Nav,
    copyright: Copyright,
    'share-btn': Button,
  },
};
</script>

<style scoped>
.page {
  background-color: #fbfbfb;
}

.footer__subtitle {
  font-size: 18px;
  line-height: 24px;
}
.footer {
  margin: 0 auto;
  max-width: 1440px;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer__title {
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  max-width: 340px;
  margin-bottom: 110px;
}
.footer__nav {
  margin-left: 8.5%;
}
.footer__list-items {
  margin: 0 0 126px auto;
  list-style: none;
  padding: 0;
}
.footer__list-item {
  margin: 0 56px 44px auto;
}
.footer__list-item:last-child {
  margin-bottom: 0;
}
.footer__social-link {
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: black;
}
.footer__social-link:hover {
  opacity: 0.8;
  transition: 0.3s;
}
.footer__copyright {
  width: 400px;
}
/deep/ .btn_theme_share {
  padding: 0;
  font-size: 18px;
  line-height: 24px;
}
@media screen and (max-width: 1280px) {
  .footer {
    padding-left: 50px;
    padding-right: 50px;
  }
  .footer__social-link {
    font-size: 16px;
  }
  .footer__title {
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (max-width: 1024px) {
  .footer__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 240px;
  }
}
@media screen and (max-width: 1000px) {
  .footer /deep/ .nav__list-items {
    display: flex;
    flex-direction: column;
  }
  .footer /deep/ .nav__list-item {
    margin: 0 0 14px 0;
  }
  .footer__list-item {
    margin-bottom: 14px;
  }
  .footer__list-item:last-child {
    margin-bottom: 0;
  }
  .footer__nav {
    margin-left: auto;
  }
  .footer__copyright {
    width: 300px;
  }
}
@media screen and (max-width: 739px) {
  .footer {
    flex-direction: column;
  }
  .footer__title {
    margin-bottom: 50px;
    max-width: 400px;
  }
  .footer__nav {
    margin: 0;
  }
  .footer__list-items {
    margin: 0 0 50px 0;
  }
  .footer__copyright {
    width: auto;
    margin-bottom: 10px;
  }
  .footer__subtitle {
    font-size: 16px;
    line-height: 24px;
  }
  /deep/ .btn_theme_share {
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (max-width: 452px) {
  .footer {
    padding: 50px 15px;
  }
  .copyright {
    font-size: 13px;
    line-height: 18px;
  }
  .footer__subtitle {
    font-size: 13px;
    line-height: 15px;
  }
  .footer__social-link {
    font-size: 13px;
    line-height: 15px;
  }
  /deep/ .btn_theme_share {
    font-size: 13px;
    line-height: 15px;
  }
  .footer__title {
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
