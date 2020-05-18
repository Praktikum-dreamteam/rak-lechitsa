<template>
  <div class="share">
    <h2 class="share__title">Поделитесь</h2>
    <ul class="share__list-items">
      <li class="share__list-item" v-for="icon in icons" :key="icon.id">
        <a :href="icon.href" target="_blank"
          ><img class="share__img" :src="icon.src" :alt="icon.alt"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          id: 1,
          href:
            'https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2',
          src: '/facebook.svg',
          alt: 'facebook',
        },
        {
          id: 2,
          href:
            'https://twitter.com/intent/tweet?text=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2',
          src: '/twitter.svg',
          alt: 'twitter',
        },
        {
          id: 3,
          href:
            'https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=РАКЛЕЧИТСЯ.РФ%20—%20истории%20людей%2C%20победивших%20рак%2C%20но%20не%20свои%20привычки&utm_source=share2',
          src: '/vk.svg',
          alt: 'вконтакте',
        },
        {
          id: 4,
          href:
            'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.title=РАКЛЕЧИТСЯ.РФ+—+истории+людей%2C+победивших+рак%2C+но+не+свои+привычки&st.shareUrl=https%3A%2F%2Fraklechitsa.ru%2F',
          src: '/ok.svg',
          alt: 'одноклассники',
        },
        {
          id: 5,
          href: 'https://www.instagram.com/raklechitsa/',
          src: '/instagram.svg',
          alt: 'инстаграм',
        },
        {
          id: 6,
          href: 'https://www.youtube.com/results?search_query=%23этонелечится',
          src: '/youtube.svg',
          alt: 'ютуб',
        },
      ],
    };
  },
};
</script>

<style scoped>
.share {
  display: flex;
  flex-direction: column;
}
.share__title {
  margin: 0 auto;
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
}
.share__list-items {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  width: 388px;
  margin: 100px auto 70px auto;
  align-items: center;
}
@media screen and (max-width: 452px) {
  .share__title {
    font-size: 18px;
    line-height: 21px;
  }
  .share__img {
    max-width: 25px;
    max-height: 25px;
  }
  .share__list-items {
    width: 240px;
    margin: 70px auto 40px auto;
  }
}
</style>
