<template>
  <div class="graphic-swiper">
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :slidesPerGroup="3"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="swiperModules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in articleList" :key="item.id">
        <div class="swiper-slide-item">
          <div class="img-wrapper">
            <img :src="item.thumbnails.image[0].url" :alt="item.title">
          </div>
          <div class="swiper-title">{{ item.title}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { defineComponent, PropType, reactive } from "@vue/runtime-core";
import ModuleInfo from "@/entities/ModuleInfo"
import ArticleInfo from "@/entities/ArticleInfo";

export default defineComponent({
  props:{
    data: {
      type:  Object as PropType<ModuleInfo | undefined>,
      require: true
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const articleList = reactive<ArticleInfo[]>(props.data?.data.articleList || [])
    return {
      swiperModules: [Pagination, Navigation],
      articleList
    };
  },
})
</script>

<style lang="scss">
.graphic-swiper {
  width: 1000px;
  height: 168px;
  margin: 0 auto;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: 100%;
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.img-wrapper{
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>