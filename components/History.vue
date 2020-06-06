<template>
  <Container>
    <section class="history">
      <SectionTitle theme="white">{{ Content.title }}</SectionTitle>
      <ul class="history__cards">
        <li v-for="story in stories" :key="story.id" class="history__card">
          <story-card
            :id="story.id"
            :src="`${baseUrl}${getSmallSrc(story)}`"
            :name="story.author"
            :description="story.title"
          ></story-card>
        </li>
      </ul>
      <nuxt-link
        class="history__link"
        to="/stories"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        >Больше статей</nuxt-link
      >
    </section>
  </Container>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import StoryCard from '@/components/StoryCard';
import Container from '@/components/Container';
export default {
  props: {
    Content: Object,
  },
  components: {
    Container,
    SectionTitle,
    'story-card': StoryCard,
  },
  computed: {
    stories() {
      if (process.browser) {
        if (window.innerWidth > 950) {
          return this.$store.getters['stories/getMainStories'].slice(0, 8);
        } else if (window.innerWidth <= 950 && window.innerWidth >= 690) {
          return this.$store.getters['stories/getMainStories'].slice(0, 9);
        } else {
          return this.$store.getters['stories/getMainStories'].slice(0, 6);
        }
      }
    },
  },
  data() {
    return {
      mainStories: [8, 7, 6, 5],
      hover: false,
      baseUrl: process.env.baseUrl,
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
.history {
  padding-top: 100px;
  padding-bottom: 100px;
}
.history__cards {
  padding: 0;
  list-style-type: none;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(4, minmax(208px, 300px));
  justify-content: center;
  column-gap: 40px;
  row-gap: 70px;
}
.history__card-title {
  margin-top: 20px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}
.history__card-subtitle {
  max-width: 245px;
  margin-top: 14px;
  font-size: 14px;
  line-height: 18px;
  color: #666;
}
.history__card-img {
  object-fit: cover;
  width: 100%;
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
@media screen and (max-width: 1280px) {
  .history__cards {
    row-gap: 70px;
    margin-top: 60px;
  }
  .history__link {
    height: 78px;
  }
}
@media screen and (max-width: 1024px) {
  .history__cards {
    row-gap: 70px;
    margin-top: 55px;
    row-gap: 45px;
    column-gap: 30px;
  }
  .history__card-title {
    margin-top: 14px;
  }
  .history__link {
    margin-top: 40px;
    height: 50px;
  }
  .history__card-subtitle {
    max-width: 195px;
  }
}
@media screen and (max-width: 950px) {
  .history__cards {
    grid-template-columns: repeat(3, minmax(180px, 300px));
    column-gap: 40px;
    row-gap: 20px;
  }
  .history__card-title {
    font-size: 18px;
    line-height: 22px;
  }
  .history__card-subtitle {
    font-size: 13px;
    max-width: 190px;
    line-height: 16px;
  }
}
@media screen and (max-width: 690px) {
  .history__cards {
    grid-template-columns: repeat(2, minmax(180px, 300px));
  }
}
@media screen and (max-width: 450px) {
  .history__cards {
    grid-template-columns: repeat(1, minmax(208px, 300px));
  }
  .history__card-subtitle {
    max-width: 290px;
    margin-top: 12px;
  }
  .history__link {
    font-size: 13px;
  }
}
</style>
