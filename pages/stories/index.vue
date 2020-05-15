<template>
  <div class="page">
    <h1 class="title">Истории неизлечимых привычек</h1>
    <div class="input-container">
      <input class="input-container__input" type="text" name="name" />
      <!-- Дофиксить кнопку-->
      <button-ui class="input-container__button" :theme="'violet'">
        Поиск
      </button-ui>
    </div>

    <ul class="stories-container">
      <li
        v-for="story in stories"
        :key="story.id"
        class="stories-container__item"
      >
        <story-card
          :id="story.cards.id"
          :src="story.cards.src"
          :name="story.cards.name"
          :description="story.cards.description"
        >
        </story-card>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import StoryCard from '@/components/StoryCard';
export default {
  components: {
    'button-ui': Button,
    'story-card': StoryCard,
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
};
</script>

<style scoped>
div,
ul,
li {
  border: 1px solid tomato;
}

.page {
  padding-top: 100px;
  max-width: 1320px;
  margin: 0 auto;
}

.title {
  max-width: 413px;
  margin-bottom: 58px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
}

.input-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
}

.input-container__input {
  width: 81.36%;
  margin-right: 1.52%;
  height: 52px;
  border: 1px solid #e8e8e8;
  font-family: inherit;
  font-size: 18px;
}

.input-container__button {
  padding: 0;
  width: 226px;
  height: 52px;
}

.stories-container {
  padding: 0;
  margin-bottom: 140px;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
}

@media (max-width: 1320px) {
  .page {
    max-width: 1180px;
  }

  .stories-container {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 1180px) {
  .page {
    max-width: 922px;
  }

  .stories-container {
    grid-column-gap: 30px;
    grid-row-gap: 46px;
  }
}

/* Обрезать! */
@media (max-width: 920px) {
  .page {
    max-width: 688px;
  }

  .stories-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
  }
}

@media (max-width: 675px) {
  .page {
    max-width: 290px;
  }

  .stories-container {
    max-width: 290px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
  }
}
</style>
