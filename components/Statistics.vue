<template>
  <section class="statistics content-margin page__section">
    <SectionTitle theme="white">Статистика по онкозаболеваниям</SectionTitle>
    <ul class="statistics__forms">
      <li class="statistics__form">
        <p class="statistics__text">
          Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
          000 человек.
        </p>
        <ProgressBar :value="1" :maxValue="3" />
        <h3 class="statistics__subtitle">1 из 3</h3>
        <p class="statistics__content">Левада-Центр 2018</p>
      </li>
      <li class="statistics__form">
        <p class="statistics__text">2,6% Россиян имеют онкозаболевания.</p>
        <ProgressBar :value="2.6" :maxValue="100" />
        <h3 class="statistics__subtitle">3 700 000</h3>
        <p class="statistics__content">Росстат 2018</p>
      </li>
      <li class="statistics__form">
        <p class="statistics__text">
          На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.
        </p>
        <DoubleProgressBar :oldValue="50" :newValue="40" :maxValue="100" />
        <h3 class="statistics__subtitle">&uarr;28%</h3>
        <p class="statistics__content">МНИОИ Герцена 2018</p>
      </li>
      <li class="statistics__form">
        <p class="statistics__text">
          На 25% снизилась смертность в течение первого года после постановки
          диагноза.
        </p>
        <DoubleProgressBar :oldValue="50" :newValue="40" :maxValue="100" />
        <h3 class="statistics__subtitle">&darr;25&#37;</h3>
        <p class="statistics__content">МНИОИ Герцена 2018</p>
      </li>
    </ul>
  </section>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';

export default {
  components: {
    ProgressBar,
    DoubleProgressBar,
    SectionTitle,
    SectionText,
  },
};
</script>

<style scoped>
.statistics__forms {
  margin-top: 70px;
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
}

.statistics__form {
  flex-grow: 1;
  max-width: 300px;
  min-height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.statistics__text {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  text-align: left;
  position: absolute;
  top: 20px;
  left: 20px;
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
</style>
