<template>
  <div class="pagination">
    <btn
      class="pagination__item pagination__item_type_text"
      type="button"
      :disabled="active === 1"
      @btn-click="setActive(1)"
    >
      Первая
    </btn>
    <btn
      class="pagination__item pagination__item_type_arrow"
      type="button"
      :disabled="active === 1"
      @btn-click="setActive(active - 1)"
    >
      <img src="/prev.svg" alt="Предыдущая страница" />
    </btn>
    <btn
      href="top"
      v-for="index in pages"
      :key="index"
      @btn-click="setActive(index)"
      type="button"
      :class="[
        'pagination__item',
        {
          pagination__item_active: index === active,
        },
      ]"
    >
      {{ index }}
    </btn>
    <btn
      class="pagination__item pagination__item_type_arrow"
      type="button"
      :disabled="active === pagesCount"
      @btn-click="setActive(active + 1)"
    >
      <img src="/next.svg" alt="Следующая страница" />
    </btn>
    <btn
      class="pagination__item pagination__item_type_text"
      type="button"
      :disabled="active === pagesCount"
      @btn-click="setActive(pagesCount)"
    >
      Последняя
    </btn>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    btn: Button,
  },
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
    disabled: Boolean,
    components: {
      btn: Button,
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pages() {
      let pages = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages;
    },
    rangeStart() {
      this.pageRange = 0;
      const start = this.active - this.pageRange;
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      if (process.browser) {
        if (window.innerWidth > 768) {
          this.pageRange = 4;
        } else if (window.innerWidth > 560) {
          this.pageRange = 3;
        } else {
          this.pageRange = 2;
        }
      }
      const end = this.active + this.pageRange;
      return end < this.pagesCount ? end : this.pagesCount;
    },
    pagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    setActive(index, event) {
      this.active = index;
      this.$emit('onPageChanged', index);
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
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
  border: none;
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

.pagination__item_active {
  background: #f4f4f4;
}

.pagination__item:disabled {
  color: #a2a2a2;
}
.pagination__item:active {
  outline: none;
}

.pagination__item_type_text {
  width: auto;
  background: transparent;
}

.pagination__item_type_arrow {
  background: transparent;
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
