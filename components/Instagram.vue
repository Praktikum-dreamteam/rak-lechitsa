<template>
  <Container>
    <section class="stories content-margin">
      <div class="story">
        <div class="story">
      <a
        class="story-src"
        href="https://www.instagram.com/raklechitsa/"
        target="_blank"
      >
        <SectionTitle theme="white">Инстаграм</SectionTitle>
      </a>
      <SectionText class="story-subtitle" theme="white">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </SectionText>
    </div>

    <ul class="story-images">
      <li v-for="post in posts" :key="post.id" class="story-images__item">
        <a class="story-images__link" :href="post.data.url" target="blank">
          <img
            :src="post.data.img"
            :alt="post.data.alt"
            class="story-images__image"
          />
        </a>
      </li>
    </ul>
    </section>
  </Container>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
import Container from '@/components/Container';
export default {
  components: {
    SectionTitle,
    SectionText,
    Container,
  },
  computed: {
    posts() {
      return this.$store.getters['instagram-posts/getPosts'];
    },
  },
};
</script>

<style scoped>
.stories {
  display: flex;
  overflow: hidden;
  justify-content: space-between;
}

.story {
  margin-right: auto;
}

.section-title {
  align-self: center;
  text-align: center;
}

.story-subtitle {
  margin-top: 32px;
  max-width: 80%;
}

.story-src {
  text-decoration: none;
}

.story-src::after {
  content: '';
  height: 2px;
  background: #000;
  display: block;
  width: 174px;
}
.content-subtitle {
  max-width: 413px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  text-align: left;
}
.content-margin {
  margin: 100px auto;
}
.story-images {
  max-width: 900px;
  display: grid;
  list-style: none;
  padding-left: 0;
  grid-template-columns: repeat(4, 195px);
  grid-template-rows: repeat(2, 195px);
  grid-gap: 30px;
}
.story-images__image {
  width: 100%;
  height: 100%;
}
@media (max-width: 1281px) {
  .story-images {
    max-width: 765px;
    grid-template-columns: repeat(4, 171px);
    grid-template-rows: repeat(2, 171px);
    grid-gap: 27px;
  }

  .story-src::after {
    width: 153px;
  }
}
@media (max-width: 1025px) {
  .story-images {
    max-width: 604px;
    grid-template-columns: repeat(4, 136px);
    grid-template-rows: repeat(2, 136px);
    grid-gap: 20px;
  }

  .story-src::after {
    width: 131px;
  }
}

@media (max-width: 875px) {
  .stories {
    max-width: 90%;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .story-images {
    grid-gap: 5px;
  }
}

@media (max-width: 820px) {
  .stories {
    max-width: 87%;
    flex-direction: column;
    margin: 80px auto;
    align-items: center;
  }

  .story {
    margin: 0 auto 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .story-subtitle {
    max-width: 380px;
    padding: 0;
  }

  .story-images {
    max-width: 688px;
    grid-template-columns: repeat(4, 157px);
    grid-template-rows: repeat(2, 157px);
    grid-gap: 20px;
  }
}
@media (max-width: 765px) {
  .stories {
    margin-top: 70px;
  }

  .story-images {
    max-width: 500px;
    grid-template-columns: repeat(4, 110px);
    grid-template-rows: repeat(2, 110px);
    grid-gap: 20px;
  }
}
@media (max-width: 550px) {
  .stories {
    max-width: 90%;
  }
  .story-images {
    max-width: 400px;
    grid-template-columns: repeat(2, 180px);
    grid-template-rows: repeat(4, 180px);
    grid-gap: 10px;
  }
}
@media (max-width: 410px) {
  .stories {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .story-images {
    max-width: 290px;
    grid-template-columns: repeat(2, 140px);
    grid-template-rows: repeat(4, 140px);
  }

  .story {
    align-items: flex-start;
    margin-bottom: 40px;
  }
}
</style>
