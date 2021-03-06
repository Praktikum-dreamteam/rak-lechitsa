<template>
  <Container>
    <div class="stories">
      <h1 class="stories__title">Истории неизлечимых привычек</h1>
      <form class="input-container" @submit.prevent="search">
        <input
          class="input-container__input"
          type="text"
          name="name"
          v-model="queries"
        />
        <button
          class="input-container__clear"
          @click="resetSearch"
          type="button"
        >
          Очистить
        </button>
        <button class="input-container__button" type="submit">Поиск</button>
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
                :src="`${baseUrl}${getSmallSrc(story)}`"
                :name="story.author"
                :description="story.title"
              ></story-card>
            </li>
          </ul>
        </template>
        <pagination
          v-if="stories.length !== 0"
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
import StoryCard from '~/components/blocks/StoryCard';
import Pagination from '@/components/ui/Pagination';
import Container from '~/components/blocks/Container';
import NonSearch from '~/components/blocks/NonSearch';
export default {
  head() {
    if (this.metas) {
      return {
        title: this.metas.meta_title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.metas.meta_description || '',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.metas.meta_keywords || '',
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.metas.meta_title || '',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.metas.meta_description || '',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.metas.og_image || '',
          },
        ],
      };
    }
  },
  data() {
    return {
      storiesName: '',
      queries: '',
      startIndex: 0,
      itemsPerPage: 16,
      allStories: '',
      baseUrl: process.env.baseUrl,
      metas: {
        meta_title: 'РАКЛЕЧИТСЯ.РФ',
        meta_description:
          'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
        og_image: 'static/bg-2.png',
        meta_keywords: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
      },
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
        this.allStories = this.getAllStories();
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
        return story.ImageUrl[0].formats.small.url.slice(1);
      if (story.ImageUrl[0].formats.medium)
        return story.ImageUrl[0].formats.medium.url.slice(1);
      if (story.ImageUrl[0].formats.large)
        return story.ImageUrl[0].formats.large.url.slice(1);
      if (story.ImageUrl[0].formats.thumbnail)
        return story.ImageUrl[0].formats.thumbnail.url.slice(1);
      else return 'history.png';
    },
    search() {
      const arr = this.queries.split(' ');
      this.allStories = this.getAllStories();
      const stories = this.allStories;
      this.changeIndex(1);
      this.allStories = stories.filter(item => {
        return arr.every(el => {
          return Object.values(item)
            .join('')
            .toLowerCase()
            .includes(el.toLowerCase());
        });
      });
    },
    resetSearch() {
      this.queries = '';
      this.allStories = this.getAllStories();
    },
    getAllStories() {
      return this.$store.getters['stories/getStories'];
    },
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
  position: relative;
}

.input-container__clear {
  position: absolute;
  right: 20%;
  top: 29.46%;
  color: #666;
  background: none;
  border: none;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
}

.input-container__clear:focus {
  outline: none;
}

.input-container__clear:hover {
  opacity: 0.9;
  transition: ease 0.3s;
}

.input-container__input {
  outline: none;
  width: 81.36%;
  margin-right: 1.52%;
  height: 52px;
  border: 1px solid #e8e8e8;
  font-family: inherit;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
}

.input-container__input:focus {
  outline-offset: -2px;
  outline: 3px solid #613a93;
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

  .input-container__clear {
    right: 21%;
  }
}

@media (max-width: 1230px) {
  .input-container__clear {
    right: 22%;
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
  .input-container__clear {
    top: 26%;
    right: 23%;
  }
}

@media (max-width: 1100px) {
  .input-container__clear {
    font-size: 15px;
    right: 24%;
  }
}

@media (max-width: 1000px) {
  .input-container__clear {
    right: 26%;
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

  .input-container__clear {
    right: 27.5%;
  }
}

@media (max-width: 840px) {
  .input-container__clear {
    color: transparent;
    font-size: 1px;
    width: 20px;
    height: 20px;
    top: 29%;
    right: 31%;
    background-repeat: no-repeat;
    background-image: url('/search-reset.png');
    background-position: center;
  }
}

@media (max-width: 750px) {
  .input-container__clear {
    right: 32.5%;
  }
}

@media (max-width: 685px) {
  .stories-container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }

  .input-container__clear {
    right: 35.5%;
  }
}

@media (max-width: 610px) {
  .input-container__clear {
    right: 38%;
  }
}

@media (max-width: 555px) {
  .input-container__clear {
    right: 41%;
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

  .input-container__clear {
    right: 21%;
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

  /* why not? */
  @media (max-width: 230px) {
    .input-container__clear {
      right: 27%;
    }
  }
}
</style>
