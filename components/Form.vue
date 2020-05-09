<template>
  <form class="form">
    <customLabel
      labelText="Было ли у вас онкологическое заболевание?"
      description="Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится."
    />
    <inputForm />
    <div class="form__buttons">
      <btn class="form__button" theme="grey">Назад</btn>
      <btn class="form__button" theme="violet">Далее</btn>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
export default {
  props: ['formQuestion', 'description'],
  components: {
    btn: Button,
    inputForm: Input,
    customLabel: Label,
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
.form__button:last-of-type {
  margin-right: 0;
}
</style>
