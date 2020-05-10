<template>
  <form @click="test" class="form">
    <customLabel :labelText="formQuestion" :description="description" />
    <inputForm
      :valueInput="currentAnswer"
      v-model="currentAnswer"
      @input="$emit('answerInput', $event)"
    />
    <div class="form__buttons">
      <btn @btn-click="$emit('clickBack')" class="form__button" theme="grey"
        >Назад</btn
      >
      <btn
        @btn-click="$emit('clickNext')"
        class="form__button"
        theme="violet"
        >{{ isLast ? 'Отправить' : 'Далее' }}</btn
      >
      <p v-if="isLast" class="form__personal-data-agreement">
        Нажимая на кнопку «отправить», вы даете согласие на
        <nuxt-link class="form__link" to="/stories"
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
  props: ['formQuestion', 'description', 'answer', 'isLast'],
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
}
.form__buttons {
  padding-top: 100px;
  display: flex;
  align-items: center;
}
.form__button {
  margin-right: 30px;
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
</style>
