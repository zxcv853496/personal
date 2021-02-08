<template src='./template.html'>
  
</template>

<script>
export default {
    data() {
        return{
            scroll: false,
        }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        let scroll = document.documentElement.scrolltop;
        if (scroll > 0){
            this.scroll = true;
        }
        else{
            this.scroll = false;
        }
        console.log(document.documentElement.scrollTop);
      },
    },
}
</script>

<style>

</style>