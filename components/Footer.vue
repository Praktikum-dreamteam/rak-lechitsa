<template>
  <footer class="footer">
    <div>
      <h2 class="footer__title">
        Спасибо всем, кто помог состояться этому проекту
      </h2>
      <copyright>Рак Лечится 2020</copyright>
    </div>
    <footer-nav class="footer__nav" />
    <div class="footer__container">
      <ul class="footer__list-items">
        <li class="footer__list-item">
          <p class="asd">
            Мы в
            <a
              href="https://instagram.com"
              class="footer__social-link"
              target="_blank"
              >Инстаграме</a
            >
            и
            <a
              href="https://youtube.com"
              class="footer__social-link"
              target="_blank"
              >Youtube</a
            >
          </p>
        </li>
        <li class="footer__list-item">
          <a href="" class="footer__social-link">Поделитесь &#8599;</a>
        </li>
      </ul>
      <copyright>Сделано студентами Яндекс Практикум</copyright>
    </div>
  </footer>
</template>

<script>
import Nav from '@/components/Nav';
import Copyright from '@/components/Copyright';

export default {
  components: {
    'footer-nav': Nav,
    copyright: Copyright,
  },
};
</script>

<style scoped>
.asd {
  font-size: 18px;
  line-height: 24px;
}
.footer {
  margin: 0 auto;
  max-width: 1440px;
  padding: 60px 4%;
  display: flex;
  flex-wrap: wrap;
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
  margin-left: 8.5%;
}
.footer__list-items {
  align-self: flex-end;
  list-style: none;
  padding: 0;
  margin-bottom: 126px;
}
.footer__list-item {
  margin: 0 56px 44px auto;
}
.footer__list-item:last-child {
  margin-bottom: 0;
}
.footer__container {
  margin: 0 0 0 auto;
  display: flex;
  flex-direction: column;
}
.footer__social-link {
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: black;
}
</style>
