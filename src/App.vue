<template>
  <Header />
  <div class="wrapper-content">
    <div class="container">    
      <div class="view-sm isCenter">   
        <router-view />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
export default {
  components: {Header, Footer},
}
</script>


