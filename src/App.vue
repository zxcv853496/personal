<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar/index'
import './assets/css/app.scss'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>
