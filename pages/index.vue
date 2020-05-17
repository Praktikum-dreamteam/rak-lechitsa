<template>
  <div class="page">
    <Cover />
    <Video />
    <Slogan>И в отличие от рака,</Slogan>
    <History />
    <Slogan>Рассказывайте ваши истории в Инстаграм</Slogan>
    <Instagram />
    <InfoBlock />
    <Statistics />
    <Info />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Cover from '@/components/Cover';
import Video from '@/components/Video';
import Slogan from '@/components/Slogan';
import History from '@/components/History';
import Instagram from '@/components/Instagram';
import InfoBlock from '@/components/Info-block';
import Statistics from '@/components/Statistics';
import Info from '@/components/Info';
import Button from '@/components/ui/Button';
export default {
  data() {
    return {
      questionnaire: [
        {
          question: 'Как вас зовут ?',
          description: '',
          answer: '',
        },
        {
          question: 'Было ли у вас онкологическое заболевание?',
          description:
            'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
          answer: '',
        },
        {
          question: 'Какие занятия приносят Вам наибольшее удовольствие? ',
          description:
            'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
          answer: '',
        },
        {
          question:
            'На что, кроме семьи, быта и работы, Вы тратите свое время?',
          description: '',
          answer: '',
        },
        {
          question: 'Какие сильные увлечения у Вас есть?',
          description:
            'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
          answer: '',
        },
        {
          question:
            'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
          description: '',
          answer: '',
        },
        {
          question:
            'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
          description: 'Кроме необходимых, таких, как чистка зубов.',
          answer: '',
        },
        {
          question:
            'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
          description: '',
          answer: '',
        },
        {
          question: 'Что Вас успокаивает/умиротворяет лучше всего?',
          description: '',
          answer: '',
        },
        {
          question: 'Как вы обычно проводите выходные?',
          description: '',
          answer: '',
        },
        {
          question:
            'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
          description: '',
          answer: '',
        },
        {
          question: 'Почта или телефон для связи',
          description:
            'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
          answer: '',
        },
      ],
    };
  },
  methods: {},
  components: {
    Logo,
    Cover,
    Video,
    Slogan,
    History,
    Instagram,
    InfoBlock,
    Statistics,
    Info,
    Button,
  },
};
</script>

<style>
.page {
  width: 100%;
}
.tabs {
  height: 100%;
  display: flex;
}
.tabs__radios {
  text-align: right;
  margin-right: 40px;
}

.tabs__radio {
  margin-bottom: 10px;
}
.tabs__texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 640px;
  color: #666666;
}
.tabs__text {
  text-align: left;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 25px;
}

.tabs__text_theme_violet {
  color: #dedede;
}
.container__form {
  min-height: 520px;
}
.title {
  font-family: 'Inter', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.links {
  padding-top: 15px;
}
.index__popup {
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 1280px) {
  .tabs__texts {
    max-width: 570px;
  }
}
@media screen and (max-width: 1024px) {
  .tabs__texts {
    max-width: 447px;
  }
  .tabs__radios {
    margin-right: 30px;
  }
  .tabs__text {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 768px) {
  .tabs {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 380px;
  }

  .tabs__radios {
    width: 100%;
    margin: 0;
    margin-top: 80px;
    margin-bottom: 30px;
    text-align: left;
  }

  .tabs__radio {
    font-size: 0;
    display: inline-block;
    margin-right: 30px;
  }

  .tabs__radio:last-of-type {
    margin-right: 0px;
  }
}
</style>
