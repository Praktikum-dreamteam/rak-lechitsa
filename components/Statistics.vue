<template>
  <Container>
    <section class="statistics content-margin">
      <SectionTitle theme="white">Статистика по онкозаболеваниям</SectionTitle>
      <ul class="statistics__forms">
        <li class="statistics__form">
          <div class="statistics__form-height"></div>
          <div class="statistics__form-content">
            <p class="statistics__text">
              Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48
              918 000 человек.
            </p>
            <div class="statistics__graphs">
              <ProgressBar :value="1" :maxValue="3" />
              <h3 class="statistics__subtitle">1 из 3</h3>
              <p class="statistics__content">Левада-Центр 2018</p>
            </div>
          </div>
        </li>
        <li class="statistics__form">
          <div class="statistics__form-height"></div>
          <div class="statistics__form-content">
            <p class="statistics__text">2,6% Россиян имеют онкозаболевания.</p>
            <div class="statistics__graphs">
              <ProgressBar :value="2.6" :maxValue="100" />
              <h3 class="statistics__subtitle">3 700 000</h3>
              <p class="statistics__content">Росстат 2018</p>
            </div>
          </div>
        </li>
        <li class="statistics__form">
          <div class="statistics__form-height"></div>
          <div class="statistics__form-content">
            <p class="statistics__text">
              На 28% выросла доля выявления заболеваний на ранней стадии за 10
              лет.
            </p>
            <div class="statistics__graphs">
              <DoubleProgressBar
                :oldValue="50"
                :newValue="40"
                :maxValue="100"
              />
              <h3 class="statistics__subtitle">&uarr;28%</h3>
              <p class="statistics__content">МНИОИ Герцена 2018</p>
            </div>
          </div>
        </li>
        <li class="statistics__form">
          <div class="statistics__form-height"></div>
          <div class="statistics__form-content">
            <p class="statistics__text">
              На 25% снизилась смертность в течение первого года после
              постановки диагноза.
            </p>
            <div class="statistics__graphs">
              <DoubleProgressBar
                :oldValue="50"
                :newValue="40"
                :maxValue="100"
              />
              <h3 class="statistics__subtitle">&darr;25&#37;</h3>
              <p class="statistics__content">МНИОИ Герцена 2018</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </Container>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
import Container from '@/components/Container';
export default {
  components: {
    ProgressBar,
    DoubleProgressBar,
    SectionTitle,
    SectionText,
    Container,
  },
};
</script>

<style scoped>
.statistics {
  padding-top: 100px;
  padding-bottom: 100px;
}
.statistics__forms {
  display: flex;
  overflow-x: auto;
  margin-top: 70px;
  list-style: none;
  padding-left: 0;
}
.statistics__form-height {
  position: relative;
  padding-top: 100%;
}
.statistics__form-content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  padding: 20px;
}
.statistics__form {
  font-size: 0;
  flex-shrink: 0;
  margin-right: 40px;
  flex-basis: calc((100% - 120px) / 4);
  height: 100%;
  position: relative;
}
.statistics__form:last-of-type {
  margin: 0;
}
.statistics__text {
  width: auto;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  text-align: left;
}
.statistics__subtitle {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  color: #000000;
  margin-top: 20px;
}
.statistics__content {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
  margin-top: 20px;
}
@media screen and (max-width: 1280px) {
  .statistics__form-content {
    padding: 18px;
  }
}
@media screen and (max-width: 1150px) {
  .statistics__subtitle {
    font-size: 26px;
    line-height: 30px;
  }
  .statistics__form-content {
    padding: 10px;
  }
  .statistics__form {
    margin-right: 30px;
    flex-basis: calc((100% - 90px) / 4);
  }
  .statistics__content {
    font-size: 10px;
    line-height: 14px;
  }
  .statistics__text {
    font-size: 10px;
    line-height: 14px;
  }
}
@media screen and (max-width: 950px) {
  .statistics__form-content {
    padding: 10px;
  }
  .statistics__form {
    margin-right: 20px;
    flex-basis: 216px;
  }
}
</style>
