<template>
  <div>
    <input class="input" type="text" placeholder="Напишите тут" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 0;
  border: none;
  font-size: 18px;
  line-height: 24px;
  font-family: inherit;
  box-sizing: border-box;
  border-bottom: 1px solid #e7e7e7;
  color: #000;
}
.input:focus {
  outline: none;
  border-bottom: 1px solid rgb(0, 173, 253);
}
</style>
