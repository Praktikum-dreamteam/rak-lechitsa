<template>
  <Container>
    <section class="statistics content-margin">
      <SectionTitle theme="white">Статистика по онкозаболеваниям</SectionTitle>
      <ul class="statistics__forms">
        <StatsCard
          v-for="stat in stats"
          :key="stat.id"
          :title="stat.title"
          :subtitle="stat.subtitle"
          :author="stat.author"
          :value="stat.value"
          :maxValue="stat.maxValue"
        ></StatsCard>
      </ul>
    </section>
  </Container>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
import Container from '@/components/Container';
import StatsCard from '@/components/StatsCard';
export default {
  data() {
    return {
      stats: [
        {
          id: 1,
          title: `Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48
                918 000 человек.`,
          subtitle: '1 из 3',
          author: 'Левада-Центр 2018',
          value: 1,
          maxValue: 3,
        },
        {
          id: 2,
          title: `2,6% Россиян имеют онкозаболевания.`,
          subtitle: '3 700 000',
          author: 'Росстат 2018',
          value: 2.6,
          maxValue: 100,
        },
        {
          id: 3,
          title: `На 28% выросла доля выявления заболеваний на ранней стадии за 10
              лет.`,
          subtitle: '28%',
          author: 'МНИОИ Герцена 2018',
          value: 40,
          maxValue: 100,
          oldValue: 50,
        },
        {
          id: 4,
          title: `На 25% снизилась смертность в течение первого года после
              постановки диагноза.`,
          subtitle: '25%',
          author: 'МНИОИ Герцена 2018',
          value: 40,
          maxValue: 100,
          oldValue: 50,
        },
      ],
    };
  },

  components: {
    SectionTitle,
    SectionText,
    Container,
    StatsCard,
  },
  props: {
    title: String,
    subtitle: String,
    author: String,
    value: Number,
    maxValue: Number,
    oldValue: Number,
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
</style>
