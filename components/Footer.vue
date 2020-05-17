<template>
  <footer class="footer">
    <Container class="footer__container">
      <h2 class="footer__title">
        Спасибо всем, кто помог состояться этому проекту
      </h2>
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
          <share-btn @btn-click="openPopup" theme="share"
            >Поделитесь &#8599;</share-btn
          >
        </li>
      </ul>
      <copyright class="copyright footer__copyright"
        >Рак Лечится {{ getDate() }}</copyright
      >
      <copyright>
        Сделано студентами
        <a
          class="footer__link"
          href="https://praktikum.yandex.ru"
          target="_blank"
          >Яндекс Практикум</a
        >
      </copyright>
    </Container>
  </footer>
</template>

<script>
import Nav from '@/components/ui/Nav';
import Copyright from '@/components/Copyright';
import Button from '@/components/ui/Button';
import Container from '@/components/Container';

export default {
  methods: {
    getDate() {
      let data = new Date();
      return data.getFullYear();
    },
    openPopup() {
      this.$store.commit('popup/open');
    },
  },
  components: {
    'footer-nav': Nav,
    copyright: Copyright,
    'share-btn': Button,
    Container,
  },
};
</script>

<style scoped>
.footer__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
}

.footer__subtitle {
  font-size: 18px;
  line-height: 24px;
}
.footer {
  width: 100%;
  background-color: #fbfbfb;
}
.footer__title {
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  max-width: 340px;
  margin-bottom: 110px;
}
.footer__nav {
  margin-left: 113px;
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
.footer__link {
  color: #898989;
  text-decoration: none;
}
.footer__link:hover,
.footer__social-link:hover {
  opacity: 0.8;
  transition: 0.3s;
}
.footer__copyright {
  width: 400px;
}
@media screen and (max-width: 1280px) {
  .footer__social-link {
    font-size: 16px;
  }
  .footer__title {
    font-size: 28px;
    line-height: 32px;
  }
  .footer__nav {
    margin-left: 102px;
  }
}
@media screen and (max-width: 1024px) {
  .footer__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 240px;
  }
  .footer__nav {
    margin-left: 30px;
  }
}
@media screen and (max-width: 1000px) {
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

@media screen and (max-width: 750px) {
  .footer__container {
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
}
@media screen and (max-width: 452px) {
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
  .footer__title {
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
