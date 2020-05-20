<template>
  <form @click="test" class="form">
    <h2 class="form__title">Оставьте контакт для связи</h2>
    <p class="form__subtitle">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <div class="form__content">
      <div class="form__fieldset">
        <customLabel
          labelText="Как вас зовут?"
          for="name"
          class="form__label"
        />
        <inputForm id="name" placeholder="Напишите тут" class="form__input" />
      </div>
      <div class="form__container">
        <div class="form__fieldset">
          <customLabel
            labelText="Электронная почта"
            for="email"
            class="form__label"
          />
          <inputForm
            id="email"
            placeholder="pochta@example.com"
            class="form__input"
          />
        </div>
        <div class="form__fieldset">
          <customLabel labelText="Телефон" for="phone" class="form__label" />
          <inputForm
            id="phone"
            placeholder="+7 000 000 00 00"
            class="form__input"
          />
        </div>
      </div>
      <div class="form__fieldset">
        <customLabel
          labelText="Напишите, если есть предпочтительный способ связи и удобное время"
          for="comment"
          class="form__label"
        />
        <inputForm
          id="comment"
          placeholder="Телефон / почта и удобное время"
          class="form__input"
        />
      </div>
    </div>
    <div class="form__buttons">
      <btn
        type="button"
        :isDisabledActive="isDisabledBackButton"
        @btn-click="$emit('clickBack')"
        class="form__button"
        theme="violet"
        >Отправить</btn
      >
      <p class="form__personal-data-agreement">
        Нажимая на кнопку «отправить», вы даете согласие на
        <nuxt-link class="form__link" to="/policy"
          >обработку персональных данных</nuxt-link
        >
      </p>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
export default {
  props: [
    'formQuestion',
    'description',
    'answer',
    'isLast',
    'isDisabledBackButton',
  ],
  components: {
    btn: Button,
    inputForm: Input,
    customLabel: Label,
  },
  data() {
    return {};
  },
  computed: {
    currentAnswer: {
      get() {
        return this.answer;
      },
      set(value) {},
    },
  },
  methods: {
    test() {},
  },
};
</script>

<style scoped>
.form {
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form__buttons {
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.form__button {
  margin-right: 30px;
  width: 226px;
}
.form__button:last-child {
  margin-right: 0;
}
.form__personal-data-agreement {
  max-width: 378px;
  font-size: 14px;
  line-height: 17px;
  color: #666;
}
.form__link {
  color: #666;
}

.form__fieldset {
  margin: 0 20px;
  width: auto;
}
.form__title {
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 40px;
}
.form__subtitle {
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 50px;
}
.form__content {
  margin: 0 -20px;
}
.form__label {
  margin-bottom: 30px;
}
.form__input {
  margin-bottom: 40px;
}
.form__container {
  display: flex;
  justify-content: stretch;
}

@media screen and (max-width: 1280px) {
  .form__title {
    font-size: 28px;
    line-height: 32px;
  }

  .form__subtitle {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 768px) {
  .form__title {
    font-size: 26px;
    line-height: 30px;
  }

  .form__subtitle {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 650px) {
  .form__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 35px;
  }
  .form__subtitle {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 30px;
  }
  .form__container {
    flex-wrap: wrap;
  }
  .form__fieldset {
    flex-grow: 1;
  }
  .form__label {
    margin-bottom: 20px;
  }
  .form__input {
    margin-bottom: 30px;
  }
  .form__buttons {
    flex-wrap: wrap;
  }
  .form__button {
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
  }
  .form__button /deep/ .btn {
    width: 100%;
  }
  .form__personal-data-agreement {
    font-size: 11px;
    line-height: 13px;
  }
}
@media screen and (max-width: 452px) {
  .form__title {
    max-width: 170px;
  }
}
</style>
