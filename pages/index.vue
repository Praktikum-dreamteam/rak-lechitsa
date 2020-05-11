<template>
  <div class="page">
    <Cover />
    <Video />
    <Slogan>
      И в отличии от рака,
    </Slogan>
    <History />
    <Slogan>
      Рассказывайте свои истории в Инстаграм
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
            ' Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
          description: '',
          answer: '',
        },
      ],
      currentStep: 0,
      titleForForm: '',
      currentAnswer: '',
      isLast: false,
      isShowGratitude: false,
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

.page /deep/ .page__section {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 60px;
  padding-right: 60px;
}

.page /deep/ .page__section_cover {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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
</style>
