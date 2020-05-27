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
import Logo from '@/components/Logo.vue';
import Cover from '@/components/Cover';
import Video from '@/components/Video';
import Slogan from '@/components/Slogan';
import History from '@/components/History';
import Instagram from '@/components/Instagram';
import InfoBlock from '@/components/Info-block';
import Statistics from '@/components/Statistics';
import Info from '@/components/Info';
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
