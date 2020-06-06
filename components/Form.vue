<template>
  <form class="form" name="form">
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
        <inputForm
          id="full_name"
          @input="validName"
          @blur="validName"
          :textError="name.error"
          placeholder="Напишите тут"
          class="form__input"
          v-model="name.content"
          :isValid="!name.error"
        />
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
            @blur="validEmail"
            @input="validPhone"
            :textError="email.error"
            placeholder="pochta@example.com"
            class="form__input"
            v-model="email.content"
            type="email"
            :isValid="!email.error"
          />
        </div>
        <div class="form__fieldset">
          <customLabel labelText="Телефон" for="phone" class="form__label" />
          <inputForm
            id="phone"
            @blur="validPhone"
            @input="validEmail"
            :textError="phone.error"
            placeholder="+7 000 000 00 00"
            class="form__input"
            v-model="phone.content"
            :isValid="!phone.error"
          />
        </div>
      </div>
      <div class="form__fieldset">
        <customLabel
          labelText="Напишите, если есть предпочтительный способ связи и удобное время"
          for="preferred"
          class="form__label"
        />
        <inputForm
          id="preferred"
          placeholder="Телефон / почта и удобное время"
          class="form__input"
          v-model="comment"
          :isValid="true"
        />
      </div>
    </div>
    <div class="form__buttons">
      <btn
        @btn-click="sendForm"
        :disabled="isDisabledBtn"
        type="submit"
        class="form__button"
        theme="violet"
        >Отправить</btn
      >
      <personal-data-consent />
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import PersonalDataConsent from '@/components/PersonalDataConsent';
export default {
  components: {
    btn: Button,
    inputForm: Input,
    customLabel: Label,
    'personal-data-consent': PersonalDataConsent,
  },
  data() {
    return {
      valid: true,
      email: {
        content: '',
        error: '',
      },
      name: {
        content: '',
        error: '',
      },
      phone: {
        content: '',
        error: '',
      },
      comment: '',
    };
  },
  computed: {
    isDisabledBtn() {
      if ((this.email.content || this.phone.content) && this.name.content) {
        if (!this.email.error && !this.name.error && !this.phone.error) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    async sendForm() {
      if (!this.checkAllFieldValid()) {
        return;
      }
      const form = document.forms.form;
      const answers = {};
      for (let i = 0; i < form.length; i++) {
        if (form[i].id) answers[form[i].id] = form[i].value;
      }
      await this.$store.commit('popup/toggleLoading');
      await this.$store
        .dispatch('form/SEND_FORM', answers)
        .then(() => {
          this.$store.commit('popup/removeErrorElement');
          this.close();
        })
        .catch(() => {
          this.$store.commit('popup/addErrorElement');
        })
        .finally(() => this.$store.commit('popup/toggleLoading'));
    },
    checkAllFieldValid() {
      return this.validEmail() && this.validPhone() && this.validName();
    },
    validEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email.content && !this.phone.content) {
        this.email.error = 'не заполнено';
        return false;
      }
      if (!re.test(this.email.content) && this.email.content) {
        this.email.error = 'введите корректный email';
        return false;
      }
      this.email.error = '';
      return true;
    },
    validPhone() {
      const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      if (!this.email.content.length && !this.phone.content) {
        this.phone.error = 'не заполнено';
        return false;
      }
      if (!re.test(this.phone.content) && this.phone.content) {
        this.phone.error = 'введите корректный номер телефона';
        return false;
      }
      this.phone.error = '';
      return true;
    },
    validName() {
      if (this.name.content.length < 1) {
        this.name.error = 'не заполнено';
        return false;
      }
      this.name.error = '';
      return true;
    },
    close() {
      this.$store.commit('popup/close');
    },
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
.form__container .form__fieldset {
  width: 100%;
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
