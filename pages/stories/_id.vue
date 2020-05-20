<template>
  <div class="page">
    <Container class="container">
      <div class="author">
        <img class="author__image" src="/story-author.png" alt="" />
        <h1 class="author__name">
          Александр Тарханов: «Я не могу победить свою пунктуальность в отличии
          от рака»
        </h1>
        <div class="author__panel">
          <!-- Fix!!!! -->
          <share-btn @btn-click="openPopup" theme="share"
            >Поделитесь &#8599;</share-btn
          >
          <p class="author__date">20 апреля 2018</p>
        </div>
      </div>

      <div class="text-container">
        <p class="text-paragraph">
          Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал
          в ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
        </p>
        <p class="text-paragraph">
          У меня дома до сих пор стоят часы в каждой комнате, хотя они и не
          нужны особо — я сам чувствую, опаздываю куда-то или нет, отстаю от
          нужного графика или опережаю. Вот такие встроенные внутренние часы!
          Будильник мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже
          быстро, как в армии, за 45 секунд.
        </p>
        <p class="text-paragraph">
          <span class="text-paragraph__bolder"
            >«В футболе если команда опоздала на 15 минут, ей засчитывается
            поражение».</span
          >
        </p>
        <p class="text-paragraph">
          Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
          что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
          приезжаю задолго до начала регистрации. Лучше подожду и кофе попью,
          чем опоздаю!
        </p>
        <p class="text-paragraph">
          Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
          билеты выучил, знал абсолютно все. Пришел в нужное время, а
          учительница — нет. Ну, я какое-то время подождал ее и ушел. Потом она
          спрашивала: «Почему не дождался?». Я ответил: «В футболе если команда
          опоздала на 15 минут, ей засчитывается поражение». Экзамен мне
          все-таки поставили! Сейчас если кто-то из футболистов моей команды
          опаздывает — начинаю злиться, могу и прикрикнуть потом. А если кто-то
          опоздал на тренировку перед игрой — все, подготовка насмарку. Я сразу
          начинаю думать тогда: «Значит, точно проиграем». Такая болезненная
          пунктуальность уже не лечится. В отличие от рака.
        </p>
        <p class="text-paragraph">
          <span class="text-paragraph__bold"
            >«Сейчас если кто-то из футболистов моей команды опаздывает —
            начинаю злиться, могу и прикрикнуть потом. А если кто-то опоздал на
            тренировку перед игрой — все, подготовка насмарку. Я сразу начинаю
            думать тогда: «Значит, точно проиграем». Такая болезненная
            пунктуальность уже не лечится».</span
          >
        </p>
        <div class="btn-container">
          <share-btn @btn-click="openPopup" theme="share_long"
            >Поделитесь этой статьей в своих социальных сетях &#8599;</share-btn
          >
        </div>
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
import StoryCard from '@/components/StoryCard';
import Button from '@/components/ui/Button';
import Container from '@/components/Container';
export default {
  components: {
    'story-card': StoryCard,
    'share-btn': Button,
    Container,
  },
  methods: {
    openPopup() {
      this.$store.commit('popup/openShare');
    },
  },
  computed: {
    stories() {
      if (process.browser) {
        if (window.innerWidth > 950) {
          return this.$store.getters['stories/getStories'].slice(0, 4);
        } else if (window.innerWidth <= 950 && window.innerWidth >= 690) {
          return this.$store.getters['stories/getStories'].slice(0, 3);
        } else {
          return this.$store.getters['stories/getStories'].slice(0, 2);
        }
      }
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.author__image {
  margin-right: 60px;
  height: 580px;
  width: 580px;
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

.text-paragraph {
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 28px;
}

.text-paragraph__bolder {
  font-weight: 600;
}

.text-paragraph__bold {
  font-weight: 500;
}

.stories-container {
  max-width: 922px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
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
    height: 518px;
    width: 518px;
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

  .author__image {
    height: 407px;
    width: 407px;
  }

  .author__panel {
    font-size: 16px;
    line-height: 24px;
  }

  .text-container {
    max-width: 640px;
  }

  .text-paragraph {
    font-size: 18px;
    line-height: 27px;
  }
  .btn-container {
    margin: 46px 0 120px 0;
    padding-top: 24px;
    padding-bottom: 24px;
  }
}

@media (max-width: 855px) {
  .author {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }

  .author__image {
    order: 1;
    margin: 0 auto 60px;
    height: 420px;
    width: 420px;
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
    max-width: 688px;
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
    width: 290px;
    height: 290px;
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

  .text-paragraph {
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
