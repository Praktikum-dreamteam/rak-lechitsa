<template>
  <section class="history page__section">
    <SectionTitle theme="white">Истории неизлечимых привычек</SectionTitle>
    <ul class="history__cards">
      <StoryCard
        v-for="story in stories"
        :key="story.id"
        :src="story.src"
        :id="story.id"
        :name="story.name"
        :description="story.description"
      ></StoryCard>
    </ul>
    <nuxt-link class="history__link" to="/stories">Больше статей</nuxt-link>
  </section>
</template>
<script>
import SectionTitle from '@/components/SectionTitle';
import StoryCard from '@/components/StoryCard';
export default {
  data() {
    return {
      stories: [
        {
          id: 1,
          name: 'Владимир Тен',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          src: '/history.png',
        },
        {
          id: 2,
          name: 'Владимир Познер',
          description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          src: '/history.png',
        },
        {
          id: 3,
          name: 'Александр Тарханов',
          description:
            'Я не могу победить свою пунктуальность в отличии от рака.',
          src: '/history.png',
        },
        {
          id: 4,
          name: 'Владимир Тен',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          src: '/history.png',
        },
        {
          id: 5,
          name: 'Владимир Познер',
          description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          src: '/history.png',
        },
        {
          id: 6,
          name: 'Александр Тарханов',
          description:
            'Я не могу победить свою пунктуальность в отличии от рака.',
          src: '/history.png',
        },
        {
          id: 7,
          name: 'Владимир Тен',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          src: '/history.png',
        },
        {
          id: 8,
          name: 'Владимир Познер',
          description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          src: '/history.png',
        },
      ],
    };
  },
  components: {
    SectionTitle,
    StoryCard,
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
  margin-top: 65px;
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
@media screen and (max-width: 1280px) {
  .history__cards {
    row-gap: 70px;
    margin-top: 55px;
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
    grid-template-columns: repeat(3, minmax(200px, 300px));
    column-grap: 40px;
    row-grap: 20px;
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
    grid-template-columns: repeat(2, minmax(208px, 300px));
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
