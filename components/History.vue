<template>
  <section class="history content-margin">
    <SectionTitle>Истории неизлечимых привычек</SectionTitle>
    <ul class="history-grids">
      <li class="history-grid">
        <img class="history-img" src="./../static/history.png" alt="" />
        <h2 class="history-title">Владимир Тен</h2>
        <p class="history-subtitle">
          Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
        </p>
      </li>
      <li class="history-grid">
        <img class="history-img" src="./../static/history.png" alt="" />
        <h2 class="history-title">Владимир Познер</h2>
        <p class="history-subtitle">
          Я боюсь акул — и, в отличии от рака, это не лечится.
        </p>
      </li>
      <li class="history-grid">
        <img class="history-img" src="./../static/history.png" alt="" />
        <h2 class="history-title">Александр Тарханов</h2>
        <p class="history-subtitle">
          Я не могу победить свою пунктуальность в отличии от рака.
        </p>
      </li>
      <li class="history-grid">
        <img class="history-img" src="./../static/history.png" alt="" />
        <h2 class="history-title">Владимир Тен</h2>
        <p class="history-subtitle">
          Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
        </p>
      </li>
      <li class="history-grid">
        <img class="history-img" src="./../static/history.png" alt="" />
        <h2 class="history-title">Владимир Тен</h2>
        <p class="history-subtitle">
          Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
        </p>
      </li>
      <li class="history-grid">
        <img class="history-img" src="./../static/history.png" alt="" />
        <h2 class="history-title">Владимир Познер</h2>
        <p class="history-subtitle">
          Я боюсь акул — и, в отличии от рака, это не лечится.
        </p>
      </li>
      <li class="history-grid">
        <img class="history-img" src="./../static/history.png" alt="" />
        <h2 class="history-title">Александр Тарханов</h2>
        <p class="history-subtitle">
          Я не могу победить свою пунктуальность в отличии от рака.
        </p>
      </li>
      <li class="history-grid">
        <img class="history-img" src="./../static/history.png" alt="" />
        <h2 class="history-title">Владимир Тен</h2>
        <p class="history-subtitle">
          Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
        </p>
      </li>
    </ul>
    <button class="button history-button">Больше статей</button>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
export default {
  components: {
    SectionTitle,
  },
};
</script>

<style scoped>
.button {
  background-color: #fbfbfb;
}

.content-margin {
  margin: 100px 60px;
}

.history-grids {
  margin: 70px 0;
  display: grid;
  list-style: none;
  padding-left: 0;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: 2fr;
  grid-row: 70px;
  grid-gap: 40px;
}

.history-title {
  margin-top: 20px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
  text-align: left;
}

.history-subtitle {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  text-align: left;
  margin-top: 14px;
}

.history-button {
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
}
</style>
