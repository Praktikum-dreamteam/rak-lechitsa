<template>
  <Container>
    <section class="statistics content-margin">
      <SectionTitle theme="white">{{ Content.title }}</SectionTitle>
      <ul class="statistics__forms">
        <StatsCard
          v-for="stat in stats"
          :key="stat.id"
          :description="stat.description"
          :summary="stat.summary"
          :source="stat.source"
          :currentValue="stat.currentValue"
          :maxValue="stat.maxValue"
          :oldValue="stat.oldValue"
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
  components: {
    SectionTitle,
    SectionText,
    Container,
    StatsCard,
  },
  props: {
    Content: Object,
    title: String,
    subtitle: String,
    author: String,
    value: Number,
    maxValue: Number,
    oldValue: Number,
  },
  computed: {
    stats() {
      return this.$store.getters['statistics/getStatistics'];
    },
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
