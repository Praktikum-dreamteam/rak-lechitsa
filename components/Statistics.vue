<template>
  <section class="statistics content-margin">
    <h2 class="content-title statistics-title">
      Статистика по онкозаболеваниям
    </h2>
    <ul class="statistics-forms">
      <li class="statistics-form">
        <p class="statistics-text">
          Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
          000 человек.
        </p>
        <div class="rectangle">
          <div id="rectangle-left rectangle-left_big"></div>
          <div id="rectangle-right"></div>
        </div>
        <h3 class="statistics-subtitle">1 из 3</h3>
        <p class="statistics-content">Левада-Центр 2018</p>
      </li>
      <li class="statistics-form">
        <p class="statistics-text">2,6% Россиян имеют онкозаболевания.</p>
        <div class="rectangle">
          <div id="rectangle-left rectangle-left_small"></div>
          <div id="rectangle-right"></div>
        </div>
        <h3 class="statistics-subtitle">3 700 000</h3>
        <p class="statistics-content">Росстат 2018</p>
      </li>
      <li class="statistics-form">
        <p class="statistics-text">
          На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.
        </p>
        <div class="rectangle">
          <div id="rectangle"></div>
          <div id="rectangle"></div>
        </div>
        <h3 class="statistics-subtitle">&uarr;28%</h3>
        <p class="statistics-content">МНИОИ Герцена 2018</p>
      </li>
      <li class="statistics-form">
        <p class="statistics-text">
          На 25% снизилась смертность в течение первого года после постановки
          диагноза.
        </p>
        <div class="rectangle">
          <div id="rectangle"></div>
          <div id="rectangle"></div>
        </div>
        <h3 class="statistics-subtitle">&darr;25&#37;</h3>
        <p class="statistics-content">МНИОИ Герцена 2018</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
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

.statistics-forms {
  margin-top: 70px;
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
}

.statistics-form {
  min-width: 300px;
  min-height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.statistics-text {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  text-align: left;
  position: absolute;
  top: 20px;
  left: 20px;
}

.statistics-subtitle {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  color: #000000;
  margin-top: 20px;
}

.statistics-content {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
  margin-top: 20px;
}

.rectangle {
  background: #613a93;
  width: 100%;
  height: 40px;
}
</style>
