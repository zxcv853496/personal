<template>
  <div class="home">
    <div class="section">
      <div
        class="video"
        src="../assets/video/face-recognition.mp4"
        autoplay = true
        loop = true
        type=”video/mp4″
        muted = true
        poster="../assets/icon/banner.jpg"
        >
      </div>
    </div>
    <div class="section" style="height:1000px"></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      color: 'red',
    }
  }
}
</script>
