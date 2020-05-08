<template>
  <section class="history content-margin">
    <h1 class="content-title">Истории неизлечимых привычек</h1>
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
export default {};
</script>

<style scoped>
.button {
  background-color: #fbfbfb;
}

.content-title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
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
