<template>
    <layout>
        <div class="mt-10 sm:mt-0">
            <div class="grid grid-cols-3 gap-4">
                <div class="..."></div>
                <div class="md:grid md:grid-cols-1 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Edit</h3>
                    </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form @submit="onSubmit" @reset="onReset">
                    <div class="shadow overflow-hidden focus:ring-2 focus:ring-offset-2 rounded-md bg-white">
                        <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                            <label for="first_name" class="block text-sm font-medium text-gray-700">Excerpt</label>
                            <input 
                                id="input-1"
                                v-model="form.excerpt"
                                type="text"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                required />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                            <label for="first_name" class="block text-sm font-medium text-gray-700">Content</label>
                            <textarea 
                                id="about" 
                                name="about"
                                v-model="form.content"
                                rows="6" 
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" 
                                />
                            </div>
                        </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button 
                            type="submit"
                            :disabled="sending"
                            class="inline-flex justify-center p-2 m-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit
                        </button>
                        <button 
                            type="reset"
                            :disabled="sending"
                            class="inline-flex justify-center p-2 m-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Reset
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <div class="..."></div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '../../Components/Layout.vue'

export default {
    components: { 
        'layout': Layout
    },
    props: {
        note: Object,
    },
    remember: 'form',
    data () {
        return {
            sending: false,
            form: {
                id: this.note.id,
                excerpt: this.note.excerpt,
                content: this.note.content,
                // csrfmiddlewaretoken: "",
            },
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        this.$inertia.post(this.route('app:notes_edit', this.note.id), this.form, {
            onStart: () => this.sending = true,
            onFinish: () => this.sending = false,
        })
      },
      onReset(event) {
        event.preventDefault()
        this.form.excerpt = this.note.excerpt;
        this.form.content = this.note.content;
      }
    }
}
</script>
