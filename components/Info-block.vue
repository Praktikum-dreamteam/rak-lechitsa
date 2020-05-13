<template>
  <section class="form page__cover">
    <div class="page__cover-container form__container">
      <SectionTitle theme="white">Расскажите свою историю</SectionTitle>
      <div class="form__content">
        <SectionText class="form__subtitle" theme="white">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </SectionText>
        <div class="tabs">
          <div class="tabs__radios">
            <Radio class="tabs__radio" theme="white" name="form" id="long"
              >1-й вариант</Radio
            >
            <Radio class="tabs__radio" theme="white" name="form" id="short"
              >2-й вариант</Radio
            >
          </div>
          <div class="tabs__texts">
            <p theme="white" class="tabs__text">
              Заполнить подробную форму прямо на сайте и мы опубликуем вашу
              историю после проверки. Пожалуйста, заполняйте все пункты
              корректно, если вы испытаете какие-то сложности, воспользуйтесь
              2-м вариантом.
            </p>
            <Button
              @btn-click="$emit('openFormClick')"
              class="form__button"
              theme="violet"
              >Заполнить форму</Button
            >
          </div>
        </div>

        <!-- <p class="form__content"> Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.</p> -->
      </div>
    </div>
    <!-- <button class="button form__button"> Оставить контакт </button> -->
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
import Radio from '@/components/ui/Radio';
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
export default {
  components: {
    Button,
    Radio,
    SectionTitle,
    SectionText,
  },
};
</script>

<style scoped>
.form {
  background-color: #f7f7f7;
}
.form__container {
  padding: 100px 60px;
}
.form__content {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.form__stories {
  min-width: 105px;
  list-style: none;
  padding-left: 0;
  margin-left: 195px;
  margin-right: 40px;
}

.form__subtitle {
  max-width: 340px;
}

.form__button {
  margin-top: 56px;
}

@media screen and (max-width: 1280px) {
  .form__subtitle {
    max-width: 305px;
  }
  .form__container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media screen and (max-width: 1024px) {
  .form__subtitle {
    max-width: 260px;
  }
}

@media screen and (max-width: 768px) {
  .form__content {
    margin-top: 26px;
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .form__subtitle {
    max-width: 100%;
  }
}
</style>
