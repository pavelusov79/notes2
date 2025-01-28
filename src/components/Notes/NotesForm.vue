<template>
    <div class="note-form__wrapper">
        <form class="note-form" @submit.prevent="onSubmit">
            <textarea
                required
                placeholder="type your note"
                v-model="note.value"
            ></textarea> 
            <Tags @onItemClick="handleTagClick" :items="note.tags"/>
            <button class="btn btnPrimary" type="submit" >Add new note</button>
        </form>
    </div>   
</template>

<script>
    import Tags from '@/components/Notes/UI/TagsComponent.vue'
    export default {
        components: { Tags },
        data() {
            return {
                note: {
                    value: '',
                    tags: ['work', 'travel'],
                    activeTags: []
                }

            }
        },
        methods: {
            onSubmit() {
                this.$emit('onSubmit', this.note);
                this.note.value = '';
                this.note.activeTags = [];
                const clearTagsClass = document.getElementsByClassName('isActive');
                for(let i = 0; i < clearTagsClass.length; i++) {
                    clearTagsClass[i].classList.remove("isActive");
                }
            },
            handleTagClick(payload) {
                const tagEl = document.getElementById(payload.index);
                if(!tagEl.classList.contains('isActive')) {
                    tagEl.classList.add('isActive');
                    this.note.activeTags.push(payload.tag);
                }else {
                    tagEl.classList.remove('isActive');
                    this.note.activeTags.splice(payload.index, 1)
                }
            }
        }
    }
</script>

<style lang="scss">
    .note-form__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .note-form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        width: 100%;
    }
    textarea {
        margin-bottom: 0;
    }
</style>