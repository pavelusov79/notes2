import { createStore } from "vuex";

export const store = createStore({
  state: {
    // user: null,
    // users: [
    //   { id: 1, name: "Pavel", admin: true },
    //   { id: 2, name: "Semen", admin: false },
    //   { id: 3, name: "Viktoria", admin: false },
    // ],
    notes: [
      {
        title: "Learn vue 3",
        tags: ["work"],
      },
      {
        title: "Finish course",
        tags: ["work", "home"],
      }
    ],
    localNotes: localStorage.getItem("notes")
  },

  mutations: {
    // setUser(state, payload) {
    //   state.user = payload;
    // }
    removeNote(state, payload) {
      state.notes.splice(payload, 1);
    },
    addNote(state, payload) {
      state.notes.push({title: payload.value, tags: payload.activeTags});
      // console.log('payload = ', payload);
      // console.log(state.notes)
    }
  },

  actions: {
    // setUser(context, payload) {
    //   context.commit('setUser', payload);
    // }
    removeNote(context, payload) {
      context.commit('removeNote', payload)
    },
    addNote (context, payload) {
      context.commit('addNote', payload)
    }
  },

  getters: {
    getNotes(state) {
      if (state.localNotes) {
        state.notes = JSON.parse(state.localNotes)
      }
      return state.notes
    }
    // getUser(state) {
    //   return state.user
    // },
    // isUserLogged(state) {
    //   return state.user ? true : false
    // },
    // getAllUsers(state) {
    //     return state.users
    // },
    // getUsers(state) {
    //     return state.users.filter(user => !user.admin)
    // },
    // getUserById: state => id => state.users.find(user=> user.id == id),
    
    // getUsersLength(state, getters) {
    //     let suffix = "колличество пользователей:";
    //     return `${suffix} ${getters.getAllUsers.length}`
    // }
  }
});
