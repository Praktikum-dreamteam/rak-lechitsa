<template>
  <div class="stats-card">
    <div class="stats-card__height"></div>
    <div class="stats-card__content">
      <p class="stats-card__text">{{ description }}</p>
      <div class="stats-card__graphs">
        <ProgressBar
          v-if="oldValue == 0"
          :value="currentValue"
          :maxValue="maxValue"
        />
        <DoubleProgressBar
          v-else
          :oldValue="oldValue || 30"
          :value="currentValue || 50"
          :maxValue="maxValue || 100"
        />
        <h3 class="stats-card__subtitle">{{ summary }}</h3>
        <p class="stats-card__author">{{ source }}</p>
      </div>
    </div>
  </div>
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
  props: {
    description: String,
    summary: String,
    source: String,
    currentValue: Number,
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
.stats-card__height {
  position: relative;
  padding-top: 100%;
}
.stats-card__content {
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
.stats-card {
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
.stats-card__text {
  width: auto;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  text-align: left;
}
.stats-card__subtitle {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  color: #000000;
  margin-top: 20px;
}
.stats-card__author {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #666666;
  margin-top: 20px;
}
@media screen and (max-width: 1280px) {
  .stats-card__content {
    padding: 18px;
  }
}
@media screen and (max-width: 1160px) {
  .stats-card__subtitle {
    font-size: 26px;
    line-height: 30px;
  }
  .stats-card__content {
    padding: 10px;
  }
  .stats-card {
    margin-right: 30px;
    flex-basis: calc((100% - 90px) / 4);
  }
  .stats-card__author {
    font-size: 10px;
    line-height: 14px;
  }
  .stats-card__text {
    font-size: 10px;
    line-height: 14px;
  }
}
@media screen and (max-width: 950px) {
  .stats-card__content {
    padding: 10px;
  }
  .stats-card {
    margin-right: 20px;
    flex-basis: 216px;
  }
}
</style>
