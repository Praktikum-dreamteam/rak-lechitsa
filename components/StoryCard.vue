<template>
  <div class="story-card">
    <a class="story-card__link" :href="link" target="_blank">
      <div class="story-card__image-wrapper">
        <img class="story-card__image" :src="image" :alt="imageAlt" />
      </div>
      <p class="story-card__hero" v-html="cardHero"></p>
      <p class="story-card__description" v-html="cardDescription"></p>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: '',
      image: '',
      imageAlt: '',
      cardHero: '',
      cardDescription: '',
    };
  },
};
</script>

<style scoped>
.story-card {
  max-width: 300px;
}

.story-card__link {
  text-decoration: none;
}

.story-card__image-wrapper {
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
}

.story-card__image {
  width: 100%;
  height: 100%;
}

.story-card__hero {
  color: #000;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-bottom: 10px;
}

.story-card__hero * {
  margin: 0;
}

.story-card__description {
  max-width: 250px;
  color: #666;
  font-size: 14px;
  line-height: 18px;
}

@media (max-width: 1281px) {
  .story-card {
    max-width: 265px;
  }

  .story-card__image-wrapper {
    height: 265px;
  }
}
</style>
