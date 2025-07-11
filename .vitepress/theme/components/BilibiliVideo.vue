<!-- 哔哩哔哩视频嵌入组件 -->
<template>
  <div class="bilibili-video-container">
    <iframe
      :src="videoUrl"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
      referrerpolicy="no-referrer"
      sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts">
    </iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  bvid: {
    type: String,
    required: true
  },
  aid: {
    type: String,
    default: ''
  },
  cid: {
    type: String,
    default: ''
  },
  page: {
    type: Number,
    default: 1
  },
  highQuality: {
    type: Boolean,
    default: true
  },
  danmaku: {
    type: Boolean,
    default: false
  }
})

// 构建视频URL
const videoUrl = computed(() => {
  let url = 'https://player.bilibili.com/player.html?'
  
  // 添加必要参数
  url += `bvid=${props.bvid}`
  
  // 添加可选参数
  if (props.aid) url += `&aid=${props.aid}`
  if (props.cid) url += `&cid=${props.cid}`
  if (props.page > 1) url += `&page=${props.page}`
  if (props.highQuality) url += '&high_quality=1'
  if (!props.danmaku) url += '&danmaku=0'
  
  return url
})
</script>

<style scoped>
.bilibili-video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  margin: 20px 0;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.bilibili-video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style> 