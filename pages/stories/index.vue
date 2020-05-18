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
    <pagination
      :totalItems="this.$store.state.stories.stories.length"
      :itemsPerPage="itemsPerPage"
      @onPageChanged="changeIndex"
    >
    </pagination>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import StoryCard from '@/components/StoryCard';
import Pagination from '@/components/ui/Pagination';
export default {
  data() {
    return {
      storiesName: '',
      startIndex: 0,
      itemsPerPage: 16,
    };
  },
  components: {
    'button-ui': Button,
    'story-card': StoryCard,
    pagination: Pagination,
  },
  computed: {
    stories() {
      if (process.browser) {
        if (window.innerWidth > 920) {
          this.itemsPerPage = 16;
        } else if (window.innerWidth > 500 && window.innerWidth <= 920) {
          this.itemsPerPage = 12;
        } else {
          this.itemsPerPage = 9;
        }
      }

      const allStories = this.$store.getters['stories/getStories'];
      return allStories.filter(
        (item, index) =>
          index >= this.startIndex &&
          index <= this.startIndex + this.itemsPerPage - 1
      );
    },
  },
  methods: {
    changeIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
  },
};
</script>

<style scoped>
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

  .title {
    line-height: 32px;
    font-size: 28px;
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

  .input-container__input {
    height: 46px;
  }

  .input-container__button {
    height: 46px;
  }

  .stories-container {
    grid-column-gap: 30px;
    grid-row-gap: 46px;
  }
}

@media (max-width: 920px) {
  .page {
    max-width: 688px;
    padding-top: 80px;
  }

  .title {
    line-height: 28px;
    font-size: 24px;
    text-align: center;
    margin: 0 auto 50px;
  }

  .stories-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
  }
}

@media (max-width: 685px) {
  .page {
    max-width: 90%;
  }

  .stories-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }
}

@media (max-width: 500px) {
  .page {
    max-width: 290px;
    padding-top: 50px;
  }

  .title {
    line-height: 21px;
    font-size: 18px;
    text-align: left;
  }

  .stories-container {
    max-width: 290px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
  }
}
</style>
