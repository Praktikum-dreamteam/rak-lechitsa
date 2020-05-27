<template>
  <Container>
    <section class="stories content-margin">
      <div class="story">
        <a
          class="story-src"
          href="https://www.instagram.com/raklechitsa/"
          target="_blank"
        >
          <SectionTitle theme="white">{{ Content.title }}</SectionTitle>
        </a>
        <div class="story-subtitle" v-html="Content.text"></div>
      </div>

      <template>
        <ul class="story-images">
          <li
            class="story-images__item"
            v-for="photo in instagram"
            :key="instagram.indexOf(photo)"
          >
            <a class="story-images__link" :href="photo.url" target="_blank">
              <img
                class="story-images__image"
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
import SectionTitle from '@/components/SectionTitle';
import Container from '@/components/Container';
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
};
</script>

<style scoped>
.stories {
  display: flex;
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
  color: #666;
  font-size: 18px;
  line-height: 22px;
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

.story-images__link {
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
  display: block;
}

.story-images__image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  width: 100%; /**либо max-width 100%, чтоб вместить всю картинку в ячейку */
  object-fit: cover;
}

@media (max-width: 1281px) {
  .story-images {
    max-width: 765px;
    grid-template-columns: repeat(4, 171px);
    grid-gap: 23px;
  }
  .story-subtitle {
    font-size: 16px;
    line-height: 20px;
  }
  .story-src::after {
    width: 153px;
  }
}
@media (max-width: 1062px) {
  .story-images {
    max-width: 604px;
    grid-template-columns: repeat(4, 136px);
    grid-gap: 20px;
  }

  .story-src::after {
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
    grid-template-columns: repeat(2, 170px);
    grid-template-rows: repeat(4, 170px);
    grid-gap: 20px;
  }
  .story-subtitle {
    font-size: 13px;
    line-height: 16px;
  }
}
@media (max-width: 550px) {
  .stories {
    max-width: 90%;
  }
  .story-images {
    max-width: 400px;
    grid-template-columns: repeat(2, 140px);
    grid-template-rows: repeat(4, 140px);
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
  }

  .story {
    align-items: flex-start;
    margin-bottom: 40px;
  }
}
</style>
