<template>
  <section class="stories content-margin">
    <div class="story">
      <a
        class="story-src"
        href="https://www.instagram.com/raklechitsa/"
        target="_blank"
      >
        <SectionTitle theme="white">
          Инстаграм
        </SectionTitle>
      </a>
      <SectionText class="story-subtitle" theme="white">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </SectionText>
    </div>

    <!-- переделать на v-for(?) когда будут данные -->
    <ul class="story-images">
      <li class="story-images__item">
        <a class="story-images__link" href="#" target="blank">
          <img
            src="./../static/instagram.png"
            alt=""
            class="story-images__image"
          />
        </a>
      </li>
      <li class="story-images__item">
        <a class="story-images__link" href="#" target="blank">
          <img
            src="./../static/instagram.png"
            alt=""
            class="story-images__image"
          />
        </a>
      </li>
      <li class="story-images__item">
        <a class="story-images__link" href="#" target="blank">
          <img
            src="./../static/instagram.png"
            alt=""
            class="story-images__image"
          />
        </a>
      </li>
      <li class="story-images__item">
        <a class="story-images__link" href="#" target="blank">
          <img
            src="./../static/instagram.png"
            alt=""
            class="story-images__image"
          />
        </a>
      </li>
      <li class="story-images__item">
        <a class="story-images__link" href="#" target="blank">
          <img
            src="./../static/instagram.png"
            alt=""
            class="story-images__image"
          />
        </a>
      </li>
      <li class="story-images__item">
        <a class="story-images__link" href="#" target="blank">
          <img
            src="./../static/instagram.png"
            alt=""
            class="story-images__image"
          />
        </a>
      </li>
      <li class="story-images__item">
        <a class="story-images__link" href="#" target="blank">
          <img
            src="./../static/instagram.png"
            alt=""
            class="story-images__image"
          />
        </a>
      </li>
      <li class="story-images__item">
        <a class="story-images__link" href="#" target="blank">
          <img
            src="./../static/instagram.png"
            alt=""
            class="story-images__image"
          />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
export default {
  components: {
    SectionTitle,
    SectionText,
  },
  data() {
    return {
      //?
    };
  },
};
</script>

<style scoped>
.stories {
  display: flex;
}
.story {
  margin-right: 40px;
}
.story-subtitle {
  margin-top: 32px;
  padding-right: 70px;
}
.story-src {
  text-decoration: none;
}
/* Подчеркивание, нужен будет фикс! */
.story-src::after {
  content: '';
  height: 3px;
  background: #000;
  display: block;
  margin-top: 2px;
  max-width: 160px;
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
  margin: 100px 60px;
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
}
@media (max-width: 1025px) {
  .story-images {
    max-width: 604px;
    grid-template-columns: repeat(4, 136px);
    grid-template-rows: repeat(2, 136px);
    grid-gap: 20px;
  }
}
@media (max-width: 769px) {
  .stories {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
  .story-images {
    max-width: 688px;
    grid-template-columns: repeat(4, 157px);
    grid-template-rows: repeat(2, 157px);
    grid-gap: 20px;
  }
}
@media (max-width: 551px) {
  .story-images {
    max-width: 500px;
    grid-template-columns: repeat(4, 110px);
    grid-template-rows: repeat(2, 110px);
    grid-gap: 20px;
  }
}
@media (max-width: 425px) {
  .story-images {
    max-width: 400px;
    grid-template-columns: repeat(2, 180px);
    grid-template-rows: repeat(4, 180px);
    grid-gap: 10px;
  }
}
@media (max-width: 321px) {
  .story-images {
    max-width: 290px;
    grid-template-columns: repeat(2, 140px);
    grid-template-rows: repeat(4, 140px);
  }
}
</style>
