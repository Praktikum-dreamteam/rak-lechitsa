<template>
  <div class="page">
    <Cover :Content="block('cover')" />
    <Video :Content="block('videos')" />
    <Slogan :Content="block('note-1')" />
    <History :Content="block('stories')" />
    <Slogan :Content="block('note-2')" />
    <Instagram :Content="block('instagram')" />
    <InfoBlock :Content="block('story')" />
    <Statistics :Content="block('statistics')" />
    <Info :Content="block('about')" />
  </div>
</template>

<script>
import Logo from '~/components/blocks/Logo.vue';
import Cover from '~/components/blocks/Cover';
import Video from '~/components/blocks/Video';
import Slogan from '~/components/blocks/Slogan';
import History from '~/components/blocks/History';
import Instagram from '~/components/blocks/Instagram';
import InfoBlock from '~/components/blocks/Info-block';
import Statistics from '~/components/blocks/Statistics';
import Info from '~/components/blocks/Info';
import Button from '@/components/ui/Button';
export default {
  components: {
    Logo,
    Cover,
    Video,
    Slogan,
    History,
    Instagram,
    InfoBlock,
    Statistics,
    Info,
    Button,
  },
  methods: {
    block(name) {
      const blocks = this.$store.getters['blocks/getBlocks'];
      const currentBlock = blocks.find(item => item.block === name);
      return currentBlock;
    },
  },
  computed: {},
  head() {
    if (this.metas) {
      return {
        title: this.metas.meta_title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.metas.meta_description || '',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.metas.meta_keywords || '',
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.metas.meta_title || '',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.metas.meta_description || '',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.metas.og_image || '',
          },
        ],
      };
    }
  },
  data() {
    return {
      metas: {
        meta_title: 'РАКЛЕЧИТСЯ.РФ',
        meta_description:
          'Информационный проект Фонда Хабенского. Есть вещи, которые не лечатся. В отличие от рака. #раклечится Вместе мы изменим отношение людей!  Какая привычка или фобия не лечится у вас? #этонелечится',
        og_image: 'static/Pozner.jpg',
        meta_keywords: 'РАКЛЕЧИТСЯ.РФ, раклечится, этонелечится',
      },
    };
  },
};
</script>

<style>
.page {
  width: 100%;
}
.tabs {
  height: 100%;
  display: flex;
}
.tabs__radios {
  text-align: right;
  margin-right: 40px;
}

.tabs__radio {
  margin-bottom: 10px;
}
.tabs__texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 640px;
  color: #666666;
}
.tabs__text {
  text-align: left;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 25px;
}

.tabs__text_theme_violet {
  color: #dedede;
}
.container__form {
  min-height: 520px;
}
.title {
  font-family: 'Inter', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.links {
  padding-top: 15px;
}
.index__popup {
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 1280px) {
  .tabs__texts {
    max-width: 570px;
  }
}
@media screen and (max-width: 1024px) {
  .tabs__texts {
    max-width: 447px;
  }
  .tabs__radios {
    margin-right: 30px;
  }
  .tabs__text {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 768px) {
  .tabs {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 380px;
  }

  .tabs__radios {
    width: 100%;
    margin: 0;
    margin-top: 80px;
    margin-bottom: 30px;
    text-align: left;
  }

  .tabs__radio {
    font-size: 0;
    display: inline-block;
    margin-right: 30px;
  }

  .tabs__radio:last-of-type {
    margin-right: 0px;
  }
}
</style>
