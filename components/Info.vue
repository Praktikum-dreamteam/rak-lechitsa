<template>
  <section class="info">
    <h1 class="title title-info">#РАКЛЕЧИТСЯ</h1>
    <SectionTitle theme="violet">О проекте</SectionTitle>
    <div class="info-content">
      <SectionText class="info-subtitle" theme="violet">
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </SectionText>
      <div class="ihfo-paragraphs">
        <Radio theme="violet">Рак Лечится</Radio>
        <Radio theme="violet">Фонд Хабенского</Radio>
      </div>
      <div class="ihfo-texts">
        <p class="ihfo-text">
          Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но одна
          болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и
          лучшее доказательство — люди с их неизлечимыми особенностями, которые
          сумели победить рак.
        </p>
        <p class="ihfo-text">
          Рак лечится — проект Благотворительного Фонда Константина Хабенского и
          Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей
          к раку и заставить каждого поверить: онкологическое заболевание — это
          не приговор.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import Radio from '@/components/ui/Radio';
export default {
  components: {
    SectionTitle,
    Radio,
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 92px;
  line-height: 111px;
  text-transform: uppercase;
}

.info {
  width: 100%;
  min-height: 689px;
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 90px 60px 100px 60px;
}

.title-info {
  color: #ffffff;
}

.info-title {
  color: #ffffff;
  margin-top: 70px;
  margin-left: 0;
  text-align: left;
}

.info-content {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}

.info-subtitle {
  color: #dedede;
}

.ihfo-paragraphs {
  text-align: right;
  margin-right: 40px;
  min-width: 154px;
  margin-left: 146px;
}

.ihfo-paragraph {
  margin-bottom: 10px;
}

.ihfo-paragraph_isactiv {
  color: #ffffff;
}

.ihfo-paragraph {
  color: #dedede;
}

.ihfo-texts {
  max-width: 640px;
  margin-right: 0;
  color: #dedede;
}

.ihfo-text {
  margin-bottom: 30px;
}
</style>
