<template>
  <div class="page">
    <Cover />
    <Video />
    <Slogan>
      И в отличие от рака,
    </Slogan>
    <History />
    <Slogan>
      Рассказывайте ваши истории в Инстаграм
    </Slogan>
    <Instagram />
    <InfoBlock @openFormClick="openForm" />
    <Statistics />
    <Info />
    <Popup
      v-if="IsFormShow"
      haveClose="true"
      :title="titleForForm"
      @closeClick="closeForm"
    >
      <Form
        @clickBack="backStep"
        @clickNext="nextStep"
        @answerInput="writeAnswer"
        :answer="questionnaire[currentStep].answer"
        :formQuestion="questionnaire[currentStep].question"
        :description="questionnaire[currentStep].description"
        class="container__form"
        :isLast="isLast"
      ></Form>
    </Popup>
    <Popup
      v-if="isShowGratitude"
      :haveClose="isLast"
      class="index__popup"
      title="Спасибо что приняли участие!"
    >
      <Button @btn-click="closeGratitude" theme="violet">Закрыть</Button>
    </Popup>
    <Overlay @overlayClick="closeForm" v-if="IsFormShow || isShowGratitude" />
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
import Popup from '@/components/PopUp';
import Form from '@/components/Form';
import Overlay from '@/components/ui/Overlay';
import Button from '@/components/ui/Button';
export default {
  data() {
    return {
      IsFormShow: false,
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
      currentStep: 0,
      titleForForm: '',
      currentAnswer: '',
      isLast: false,
      isShowGratitude: false,
      isActiveBackButton: false,
    };
  },
  computed: {},
  methods: {
    openForm() {
      this.IsFormShow = true;
      this.updateTitleForForm();
    },
    closeForm() {
      this.IsFormShow = false;
    },
    nextStep() {
      this.isActiveBackButton = true;
      if (this.isLast) {
        this.sendData();
        return;
      }
      if (this.currentStep < this.questionnaire.length - 1) {
        this.currentStep++;
        this.isLast = false;
        this.updateTitleForForm();
      }
      if (this.currentStep == this.questionnaire.length - 1) {
        this.isLast = true;
      } else {
        this.isLast = false;
      }
    },
    closeGratitude() {
      this.isShowGratitude = false;
    },
    sendData() {
      console.log(JSON.stringify(this.questionnaire));
      this.currentStep = 0;
      this.isActiveBackButton = false;
      this.isLast = false;
      this.IsFormShow = false;
      this.isShowGratitude = true;
      this.questionnaire.forEach(item => (item.answer = ''));
    },
    backStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.isLast = false;
        this.updateTitleForForm();
      }
      this.isActiveBackButton = this.currentStep > 0;
    },
    updateTitleForForm() {
      this.titleForForm = `Шаг ${this.currentStep + 1} из ${
        this.questionnaire.length
      }`;
      this.currentAnswer = this.questionnaire[this.currentStep].answer;
    },
    writeAnswer(text) {
      this.questionnaire[this.currentStep].answer = text;
    },
  },
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
    Form,
    Popup,
    Overlay,
    Button,
  },
};
</script>

<style>
.page {
  width: 100%;
}
.page__section {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 60px;
  padding-right: 60px;
}
.page__cover {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.page__cover-container {
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.tabs {
  display: flex;
}
.tabs__radios {
  text-align: right;
  margin-right: 40px;
}
.tabs__texts {
  max-width: 640px;
  color: #dedede;
}
.tabs__text {
  margin-bottom: 25px;
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
  .page__section {
    padding-left: 50px;
    padding-right: 50px;
  }
  .tabs__texts {
    width: 570px;
  }
}
@media screen and (max-width: 1024px) {
  .tabs__texts {
    width: 447px;
  }
  .tabs__radios {
    margin-right: 30px;
  }
}
</style>
