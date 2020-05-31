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
          href: `https://www.facebook.com/sharer.php?src=sp&u=${this.$route.fullPath}%2F&title=${document.title}&utm_source=share2`,
          src: '/facebook.svg',
          alt: 'facebook',
        },
        {
          id: 2,
          href: `https://twitter.com/intent/tweet?text=${document.title}&url=${this.$route.fullPath}%2F&utm_source=share2`,
          src: '/twitter.svg',
          alt: 'twitter',
        },
        {
          id: 3,
          href: `https://vk.com/share.php?url=${this.$route.fullPath}%2F&title=${document.title}&utm_source=share2`,
          src: '/vk.svg',
          alt: 'вконтакте',
        },
        {
          id: 4,
          href: `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.title=${document.title}&st.shareUrl=${this.$route.fullPath}`,
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
      title: this.title,
    };
  },
};
</script>

<style scoped>
.share {
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
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
  margin: 100px auto 0 auto;
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
    margin: 70px auto 0 auto;
  }
  .share {
    padding-bottom: 40px;
  }
}
</style>
