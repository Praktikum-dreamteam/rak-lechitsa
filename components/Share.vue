<template>
  <ul class="share__list-items">
    <li class="share__list-item">
      <a
        href="https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2"
        ><img src="../static/facebook.svg" alt="facebook"
      /></a>
    </li>
    <li class="share__list-item">
      <a
        href="https://twitter.com/intent/tweet?text=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2"
        ><img src="../static/twitter.svg" alt="twitter"
      /></a>
    </li>
    <li class="share__list-item">
      <a
        href="https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2"
        ><img src="../static/vk.svg" alt="Вконтакте"
      /></a>
    </li>
    <li class="share__list-item">
      <a
        href="https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.title=РАКЛЕЧИТСЯ.РФ+—+истории+людей%2C+победивших+рак%2C+но+не+свои+привычки&st.shareUrl=https%3A%2F%2Fraklechitsa.ru%2F"
        ><img src="../static/ok.svg" alt="Одноклассники"
      /></a>
    </li>
    <li class="share__list-item">
      <a href="https://www.instagram.com/raklechitsa/"
        ><img src="../static/instagram.svg" alt="instagram"
      /></a>
    </li>
    <li class="share__list-item">
      <a href="https://www.youtube.com/results?search_query=%23этонелечится"
        ><img src="../static/youtube.svg" alt="youtube"
      /></a>
    </li>
  </ul>
</template>

<script></script>

<style scoped>
.share__list-items {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  width: 388px;
  margin-top: 100px;
  align-items: center;
}
@media screen and (max-width: 650px) {
  .share__list-items {
    width: 282px;
    margin-top: 70px;
  }
}
</style>
