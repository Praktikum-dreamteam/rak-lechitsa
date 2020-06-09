<template>
  <Container>
    <section class="stories content-margin">
      <div class="story">
        <a
          class="story__src"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
        >
          <SectionTitle class="story__title" theme="white">{{
            Content.title
          }}</SectionTitle>
        </a>
        <div class="story__subtitle" v-html="Content.text"></div>
      </div>

      <template>
        <ul class="story__images">
          <li
            class="story__images-item"
            v-for="photo in instagram"
            :key="instagram.indexOf(photo)"
          >
            <a class="story__images-link" :href="photo.url" target="_blank">
              <img
                class="story__image"
                :src="photo.display_url"
                alt="Фото из инстаграма Раклечится"
              />
            </a>
          </li>
        </ul>
      </template>
    </section>
  </Container>
</template>

<script>
import SectionTitle from '~/components/blocks/SectionTitle';
import Container from '~/components/blocks/Container';
export default {
  props: {
    Content: Object,
  },
  components: {
    SectionTitle,
    Container,
  },
  computed: {
    instagram() {
      return this.$store.getters['instagram/getPosts'].slice(0, 8);
    },
  },
  async created() {
    await this.$store.dispatch('instagram/GET_PHOTOS');
  },
};
</script>

<style scoped>
.stories {
  display: flex;
}

.story {
  margin-right: 110px;
}

.story__title:hover {
  opacity: 0.7;
  transition: 0.3s ease;
}

.section-title {
  align-self: center;
  text-align: center;
}

.story__subtitle {
  margin-top: 32px;
  max-width: 80%;
  color: #666;
  font-size: 18px;
  line-height: 22px;
  max-width: 413px;
}

.story__src {
  text-decoration: none;
}

.story__src::after {
  content: '';
  height: 2px;
  background: #000;
  display: block;
  width: 174px;
}
.content-margin {
  margin: 100px auto;
}
.story__images {
  width: 100%;
  max-width: 900px;
  display: grid;
  list-style: none;
  padding-left: 0;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 30px;
}

.story__images-link {
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
  display: block;
}

.story__image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1281px) {
  .story__images {
    margin-top: -10px;
    grid-gap: 23px;
  }
  .story__subtitle {
    max-width: 305px;
  }
  .story__src::after {
    width: 153px;
  }
}
@media (max-width: 1062px) {
  .story__images {
    max-width: 604px;
    grid-gap: 20px;
  }
  .story__subtitle {
    max-width: 260px;
  }

  .story__src::after {
    width: 131px;
  }
}

@media (max-width: 875px) {
  .stories {
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

  .story__subtitle {
    text-align: center;
    max-width: 380px;
    padding: 0;
  }

  .story__images {
    max-width: 688px;
    grid-gap: 20px;
  }
}
@media (max-width: 765px) {
  .stories {
    margin-top: 70px;
  }

  .story__images {
    max-width: 500px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  .story__subtitle {
    font-size: 13px;
    line-height: 16px;
  }
}
@media (max-width: 550px) {
  .stories {
    max-width: 90%;
  }
  .story__images {
    max-width: 400px;
    grid-gap: 10px;
  }
}
@media (max-width: 410px) {
  .stories {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .story__images {
    max-width: 290px;
  }

  .story {
    align-items: flex-start;
    margin-bottom: 40px;
  }
}
</style>
