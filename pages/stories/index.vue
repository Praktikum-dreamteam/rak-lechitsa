<template>
  <Container>
    <div class="stories">
      <a href="#top" name="top"></a>
      <h1 class="stories__title">Истории неизлечимых привычек</h1>
      <form class="input-container" @submit.prevent="search">
        <input
          class="input-container__input"
          type="text"
          name="name"
          v-model="queries"
        />
        <button class="input-container__button">Поиск</button>
      </form>
      <client-only>
        <template>
          <non-search v-if="stories.length === 0" />
          <ul class="stories-container" v-else>
            <li
              v-for="story in stories"
              :key="story.id"
              class="stories-container__item"
            >
              <story-card
                :id="story.id"
                :src="`https://strapi.kruzhok.io${getSmallSrc(story)}`"
                :name="story.author"
                :description="story.title"
              ></story-card>
            </li>
          </ul>
        </template>
        <pagination
          v-if="stories.length !== 0"
          href="#top"
          :totalItems="this.allStories.length"
          :itemsPerPage="itemsPerPage"
          @onPageChanged="changeIndex"
        >
        </pagination>
      </client-only>
    </div>
  </Container>
</template>

<script>
import Button from '@/components/ui/Button';
import StoryCard from '@/components/StoryCard';
import Pagination from '@/components/ui/Pagination';
import Container from '@/components/Container';
import NonSearch from '@/components/NonSearch';
export default {
  data() {
    return {
      storiesName: '',
      queries: '',
      startIndex: 0,
      itemsPerPage: 16,
      allStories: '',
    };
  },
  components: {
    'button-ui': Button,
    'story-card': StoryCard,
    'non-search': NonSearch,
    pagination: Pagination,
    Container,
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
      if (!this.allStories) {
        this.allStories = this.$store.getters['stories/getStories'];
      }
      return this.allStories.filter(
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
    getSmallSrc(story) {
      if (story.ImageUrl[0].formats.small)
        return story.ImageUrl[0].formats.small.url;
      if (story.ImageUrl[0].formats.medium)
        return story.ImageUrl[0].formats.medium.url;
      if (story.ImageUrl[0].formats.large)
        return story.ImageUrl[0].formats.large.url;
      if (story.ImageUrl[0].formats.thumbnail)
        return story.ImageUrl[0].formats.thumbnail.url;
      else return '/history.png';
    },
    search() {
      const arr = this.queries.split(' ');
      const stories = this.$store.getters['stories/getStories'];
      this.allStories = stories.filter(item => {
        return arr.every(el => {
          return Object.values(item)
            .join('')
            .toLowerCase()
            .includes(el.toLowerCase());
        });
      });
    },
  },
  head() {
    return {
      title: 'РАКЛЕЧИТСЯ.РФ Истории неизлечимых привычек',
    };
  },
};
</script>

<style scoped>
.stories {
  padding-top: 100px;
}

.stories__title {
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
  padding-left: 10px;
  padding-right: 10px;
}

.input-container__button {
  padding: 0;
  width: 226px;
  height: 52px;
  color: #fff;
  font-size: 16px;
  line-height: 19px;
  background-color: #613a93;
  border: none;
  cursor: pointer;
}

.input-container__button:hover {
  opacity: 0.9;
  transition: ease 0.3s;
}

.stories-container {
  padding: 0;
  margin-bottom: 140px;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 70px;
}

@media (max-width: 1320px) {
  .stories__title {
    line-height: 32px;
    font-size: 28px;
  }

  .stories-container {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 1180px) {
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
  .stories {
    padding-top: 80px;
  }

  .stories__title {
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
  .stories-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }
}

@media (max-width: 500px) {
  .stories {
    padding-top: 50px;
  }

  .stories__title {
    line-height: 21px;
    font-size: 18px;
    text-align: left;
  }

  .input-container__button {
    color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    background-image: url('/search.svg');
    width: 48px;
  }

  .stories-container {
    max-width: 290px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
  }
}
</style>
