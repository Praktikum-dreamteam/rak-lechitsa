<template>
  <section class="forma-history">
    <SectionTitle theme="white">Расскажите свою историю</SectionTitle>
    <div class="forma-text">
      <SectionText class="forma-subtitle" theme="white">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </SectionText>
      <ul class="forma-stories">
        <li class="forma-story"><Radio theme="white">1-й вариант</Radio></li>
        <li class="forma-story"><Radio theme="white">2-й вариант</Radio></li>
      </ul>
      <SectionText class="forma-content" theme="white">
        Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
        после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
        испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
      </SectionText>
      <!-- <p class="forma-content"> Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.</p> -->
    </div>
    <Button
      @btn-click="$emit('openFormClick')"
      class="forma-button"
      theme="violet"
      >Заполнить форму</Button
    >
    <!-- <button class="button forma-button"> Оставить контакт </button> -->
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
.forma-history {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 60px;
}

.forma-text {
  display: flex;
  align-content: space-between;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  text-align: left;
  margin-top: 30px;
}

.forma-stories {
  min-width: 105px;
  list-style: none;
  padding-left: 0;
  margin-left: 195px;
  margin-right: 40px;
}

.forma-subtitle {
  max-width: 340px;
}

/* .forma-story {
  color: #000000;
  color: #A2A2A2;
} */

.forma-content {
  max-width: 640px;
  margin-right: 0;
}

.forma-button {
  margin-top: 56px;
  margin-left: 680px;
}
</style>
