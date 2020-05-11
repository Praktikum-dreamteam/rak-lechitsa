<template>
  <section class="info page__cover">
    <div class="page__cover-container info__container">
      <p class="info__title">#РАКЛЕЧИТСЯ</p>
      <SectionTitle theme="violet">О проекте</SectionTitle>
      <div class="info__content">
        <SectionText class="info__subtitle" theme="violet">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </SectionText>
        <div class="tabs">
          <div class="tabs__radios">
            <Radio theme="violet">Рак Лечится</Radio>
            <Radio theme="violet">Фонд Хабенского</Radio>
          </div>
          <div class="tabs__texts">
            <SectionText theme="violet" class="tabs__text">
              Есть вещи, которые не лечатся. Особенности характера, страстные
              увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
              приобрели в детстве. Список можно продолжать до бесконечности, но
              одна болезнь в него точно не войдет. Эта болезнь — рак. Рак
              лечится, и лучшее доказательство — люди с их неизлечимыми
              особенностями, которые сумели победить рак.
            </SectionText>
            <SectionText theme="violet" class="tabs__text">
              Рак лечится — проект Благотворительного Фонда Константина
              Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
              изменить отношение людей к раку и заставить каждого поверить:
              онкологическое заболевание — это не приговор.
            </SectionText>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
import Radio from '@/components/ui/Radio';
export default {
  components: {
    SectionTitle,
    SectionText,
    Radio,
  },
};
</script>

<style scoped>
.info__title {
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 73px;
}

.info {
  width: 100%;
  min-height: 689px;
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.info__container {
  padding: 90px 60px 100px 60px;
}

.info__content {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.info__subtitle {
  max-width: 340px;
}
</style>
