<template>
  <div class="stories content-margin">
    <div class="story">
      <a src="" class="story-src"
        ><h2 class="content-title story-title">Инстаграм</h2></a
      >
      <p class="content-subtitle story-subtitle">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <ul class="story-images">
      <li class="story-img"><img src="./../static/instagram.png" alt="" /></li>
      <li class="story-img"><img src="./../static/instagram.png" alt="" /></li>
      <li class="story-img"><img src="./../static/instagram.png" alt="" /></li>
      <li class="story-img"><img src="./../static/instagram.png" alt="" /></li>
      <li class="story-img"><img src="./../static/instagram.png" alt="" /></li>
      <li class="story-img"><img src="./../static/instagram.png" alt="" /></li>
      <li class="story-img"><img src="./../static/instagram.png" alt="" /></li>
      <li class="story-img"><img src="./../static/instagram.png" alt="" /></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
}

.content-subtitle {
  max-width: 413px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  text-align: left;
}

.content-margin {
  margin: 100px 60px;
}

.stories {
  display: flex;
}

.story {
  margin-right: 40px;
}

.story-images {
  max-width: 900px;
  display: grid;
  list-style: none;
  padding-left: 0;
  grid-template-columns: repeat(4, 195px);
  grid-template-rows: repeat(2, 195px);
  grid-row: 30px;
  grid-gap: 30px;
}

.story-subtitle {
  margin-top: 32px;
  padding-right: 70px;
}
</style>
