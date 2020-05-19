<template>
  <div class="pagination">
    <div
      href="top"
      v-for="index in pagesCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        {
          pagination__item_active: index === active,
        },
      ]"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('onPageChanged', index);
      let t, s; //Медленная прокрутка наверх, мб убрать
      s = document.body.scrollTop || window.pageYOffset;
      t = setInterval(function() {
        if (s > 0) window.scroll(0, (s -= 15));
        else clearInterval(t);
      }, 1);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination__item {
  width: 58px;
  height: 58px;
  margin-left: 10px;
  margin-bottom: 90px;
  color: #181818;
  background: #fbfbfb;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: backgtound 0.4s;
}

.pagination__item:last-child {
  margin-right: 0;
}

.pagination__item_active,
.pagination__item:hover {
  background: #f4f4f4;
}

@media (max-width: 1025px) {
  .pagination__item {
    margin-bottom: 80px;
  }
}

@media (max-width: 920px) {
  .pagination__item {
    width: 50px;
    height: 50px;
    font-size: 15px;
    line-height: 18px;
  }

  @media (max-width: 500px) {
    .pagination__item {
      margin-bottom: 50px;
    }
  }
}
</style>
