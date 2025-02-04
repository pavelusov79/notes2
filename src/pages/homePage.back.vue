<template>
  <p style="margin: 15px 0">vuex</p>
  <div v-if="isUserLogged">
    <p>user is logged {{ user }}</p>
  </div>
  <div v-else>
    <button @click="handleLoginClick" class="btn btnPrimary">Login</button>
  </div> 
  

  <ul style="margin: 15px 0" v-for="user in users" :key="user.id">
    <p>{{ user.id  }}</p>
    <p>{{ user.name  }}</p>
    <p>{{ user.admin ? "админ" : "пользователь"  }}</p> 
  </ul>
  <p style="margin: 1rem 0;">{{ usersLength }}</p>
  <input v-model="userId" type="text"> 
  <p style="margin: 1rem 0;">user id== {{ userId }}: {{ getUserId.name || "user not found" }} </p>
</template>

<script>
export default {
  data() {
    return {
      userId: 3,
    }
  },
  methods: {
    handleLoginClick() {
      this.$store.dispatch('setUser', [123, 123])
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
    isUserLogged() {
      return this.$store.getters.isUserLogged
    },
    users() {
      return this.$store.getters.getUsers
    },
    usersLength() {
      return this.$store.getters.getUsersLength
    },
    getUserId() {
      return this.$store.getters.getUserById(this.userId) || ""
    }
  }
}
</script>

