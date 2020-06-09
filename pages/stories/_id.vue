<template>
  <div class="page">
    <Container class="container">
      <div class="author">
        <img class="author__image" :src="`${baseUrl}${getSrc}`" alt />
        <h1 class="author__name">{{ currentStory.title }}</h1>
        <div class="author__panel">
          <!-- Fix!!!! -->
          <share-btn @btn-click="openPopup" theme="share"
            >Поделитесь &#8599;</share-btn
          >
          <p class="author__date">{{ getdate(currentStory.date) }}</p>
        </div>
      </div>

      <div class="text-container">
        <div v-html="currentStory.text"></div>
        <div class="btn-container">
          <share-btn @btn-click="openPopup" theme="share_long"
            >Поделитесь этой статьей в своих социальных сетях &#8599;</share-btn
          >
        </div>
      </div>

      <ul class="stories-container">
        <story-card
          v-for="story in stories"
          :key="story.id"
          class="stories-container__item"
          :id="story.id"
          :src="`${baseUrl}${getSmallSrc(story)}`"
          :name="story.author"
          :description="story.title"
        ></story-card>
      </ul>

      <nuxt-link
        class="history__link"
        to="/stories"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        >Больше статей</nuxt-link
      >
    </Container>
  </div>
</template>

<script>
import StoryCard from '~/components/blocks/StoryCard';
import Button from '@/components/ui/Button';
import Container from '~/components/blocks/Container';
export default {
  validate({ params, store }) {
    return store.getters['stories/getStories'].some(
      story => story.id == params.id
    );
  },
  head() {
    return {
      title: `${this.currentStory.author} - РАКЛЕЧИТСЯ.РФ`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            `${this.currentStory.author}. РАКЛЕЧИТСЯ.РФ — проект Фонда Хабенского. Истории людей, победивших рак, но не свои привычки.` ||
            '',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится' || '',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.currentStory.author} - РАКЛЕЧИТСЯ.РФ` || '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            `${this.currentStory.author}. РАКЛЕЧИТСЯ.РФ — проект Фонда Хабенского. Истории людей, победивших рак, но не свои привычки.` ||
            '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.currentStory.ImageUrl[0].url}` || '',
        },
      ],
    };
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
    };
  },
  components: {
    'story-card': StoryCard,
    'share-btn': Button,
    Container,
  },
  methods: {
    openPopup() {
      this.$store.commit('popup/openShare');
    },
    getdate(date) {
      const textDate = new Date(date);
      const month = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
      ];
      return `${textDate.getDate()} ${
        month[+textDate.getMonth()]
      } ${textDate.getFullYear()}`;
    },
    getSmallSrc(story) {
      if (story) {
        if (story.ImageUrl[0].formats.small)
          return story.ImageUrl[0].formats.small.url.slice(1);
        if (story.ImageUrl[0].formats.medium)
          return story.ImageUrl[0].formats.medium.url.slice(1);
        if (story.ImageUrl[0].formats.large)
          return story.ImageUrl[0].formats.large.url.slice(1);
        if (story.ImageUrl[0].formats.thumbnail)
          return story.ImageUrl[0].formats.thumbnail.url.slice(1);
      } else return 'history.png';
    },
  },
  computed: {
    currentStory() {
      const allStories = this.$store.getters['stories/getStories'];
      return this.$store.getters['stories/getStories'].find(
        item => item.id == this.$route.params.id
      );
    },
    stories() {
      const allStories = this.$store.getters['stories/getStories'];
      const stories = [];
      for (let i = 0; i < 4; i++) {
        if (
          stories.includes(
            allStories[Math.floor(Math.random() * allStories.length)]
          )
        ) {
          i--;
        } else {
          stories.push(
            allStories[Math.floor(Math.random() * allStories.length)]
          );
        }
      }
      if (process.browser) {
        if (window.innerWidth > 1000) {
          return stories.slice(0, 4);
        } else if (window.innerWidth <= 1000 && window.innerWidth >= 690) {
          return stories.slice(0, 3);
        } else {
          return stories.slice(0, 2);
        }
      }
    },
    getSrc() {
      if (this.currentStory) {
        if (this.currentStory.ImageUrl[0].formats.large)
          return this.currentStory.ImageUrl[0].formats.large.url.slice(1);
        if (this.currentStory.ImageUrl[0].formats.medium)
          return this.currentStory.ImageUrl[0].formats.medium.url.slice(1);
        if (this.currentStory.ImageUrl[0].formats.small)
          return this.currentStory.ImageUrl[0].formats.small.url.slice(1);
        if (this.currentStory.ImageUrl[0].formats.thumbnail)
          return this.currentStory.ImageUrl[0].formats.thumbnail.url.slice(1);
      } else return '/history.png';
    },
  },
};
</script>

<style scoped>
.page {
  width: 100%;
}
.container {
  padding-top: 100px;
  padding-bottom: 100px;
}
.btn-container {
  text-align: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  margin: 70px 0 160px 0;
}
.author {
  margin: 0 auto 130px;
  display: grid;
  grid-column-gap: 60px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.author__image {
  width: 100%;
  max-width: 580px;
  grid-row-start: 1;
  grid-row-end: 3;
}

.author__panel {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-self: end;
  font-size: 18px;
  line-height: 24px;
  color: #121;
  padding-bottom: 20px;
  border-bottom: 1px solid #efefef;
}

.author__name {
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  grid-area: 1 / 2 / 1 / 2;
  border-top: 1px solid #efefef;
  padding-top: 20px;
}

.text-container {
  max-width: 720px;
  margin: 0 auto;
}

.text-container /deep/ p {
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 28px;
}

.text-container /deep/ blockquote {
  font-weight: 600;
}

.stories-container {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(208px, 300px));
  column-gap: 40px;
}
.history__link {
  margin-top: 70px;
  display: flex;
  width: 100%;
  height: 82px;
  background-color: #fbfbfb;
  color: #000;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}
.history__link:hover {
  background-color: #f8f8f8;
}

@media (max-width: 1281px) {
  .author__name {
    font-size: 34px;
    line-height: 44px;
    max-width: 602px;
  }

  .author__image {
    max-width: 518px;
  }
  .btn-container {
    margin: 60px 0 150px 0;
  }
}

@media (max-width: 1025px) {
  .author__name {
    font-size: 30px;
    line-height: 38px;
  }
  .stories-container {
    column-gap: 30px;
  }
  .author__image {
    max-width: 407px;
  }

  .author__panel {
    font-size: 16px;
    line-height: 24px;
  }

  .text-container {
    max-width: 640px;
  }

  p {
    font-size: 18px;
    line-height: 27px;
  }
  .btn-container {
    margin: 46px 0 120px 0;
    padding-top: 24px;
    padding-bottom: 24px;
  }
}

@media (max-width: 1000px) {
  .author {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }

  .author__image {
    order: 1;
    margin: 0 auto 60px;
    max-width: 420px;
  }

  .author__name {
    order: 0;
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 56px;
    text-align: center;
  }

  .author__panel {
    order: 2;
    max-width: 640px;
    margin: 0 auto;
  }

  .stories-container {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
  .btn-container {
    margin: 80px 0 120px 0;
  }
}

@media (max-width: 555px) {
  .container {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .author {
    margin-bottom: 40px;
  }

  .author__name {
    max-width: 290px;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 30px;
  }

  .author__image {
    max-width: 290px;
    margin-bottom: 30px;
  }

  .author__panel {
    max-width: 290px;
    font-size: 13px;
    line-height: 16px;
  }

  .text-container {
    max-width: 290px;
  }

  p {
    font-size: 13px;
    line-height: 16px;
  }

  .stories-container {
    max-width: 290px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 30px;
  }
  .btn-container {
    margin: 40px 0 100px 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media screen and(max-width: 450px) {
  .history__link {
    font-size: 13px;
  }
}
</style>
