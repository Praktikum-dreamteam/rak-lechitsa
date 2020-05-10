<template>
  <section class="forma-history">
    <h2 class="content-title forma-title">Расскажите свою историю</h2>
    <div class="forma-text">
      <p class="content-subtitle forma-subtitle">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </p>
      <ul class="forma-stories">
        <li class="forma-story">1-й вариант</li>
        <li class="forma-story">2-й вариант</li>
      </ul>
      <p class="forma-content">
        Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
        после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
        испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
      </p>
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
export default {
  components: {
    Button,
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

.content-title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
}

.content-subtitle {
  max-width: 413px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  text-align: left;
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

.forma-story {
  color: #000000;
  /* color: #A2A2A2; */
}

.forma-content {
  max-width: 640px;
  margin-right: 0;
}

.forma-button {
  margin-top: 56px;
  margin-left: 680px;
}
</style>
