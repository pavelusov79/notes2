<template>
  <div class="md-body">
    <h1>Notes list</h1>
    <!-- <Form @onSubmit="handleSubmit" /> -->
    <Form />
    <!--@testEmitName="handleTest"-->
    <!-- <List @onRemove="handleRemove" :items="notes" /> -->
     <List :items="notes" />
  </div>
</template>
<script>
import Form from "@/components/Notes/NotesForm.vue";
import List from "@/components/Notes/NotesList.vue";
export default {
  components: { Form, List },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  computed: {
    notes() {
      return this.$store.getters.getNotes
    }
  },
  methods: {
    // getNotes() {
    //   const localNotes = localStorage.getItem("notes");
    //   if (localNotes) {
    //     this.notes = JSON.parse(localNotes);
    //   }
    // },
    // handleSubmit(note) {
    //   this.notes.push({ title: note.value, tags: note.activeTags });
    // },
    // handleRemove(index) {
    //   this.notes.splice(index, 1);
      
    // },
    // example
    // handleTest(payload) {
    //     console.log(payload.name);
    //     console.log(payload.age)
    // }
  },
};
</script>
