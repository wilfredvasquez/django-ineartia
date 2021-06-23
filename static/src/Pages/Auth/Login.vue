<template>
  <layout>
    <div class="mt-10 sm:mt-0">
      <div v-if="errors.username">
        <messages variant="error" :text="errors.username" />
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="..."></div>
        <div class="md:grid md:grid-cols-1 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Login</h3>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form @submit="onSubmit">
              <div class="shadow overflow-hidden focus:ring-2 focus:ring-offset-2 rounded-md bg-white">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first_name" class="block text-sm font-medium text-gray-700">Username</label>
                      <input 
                        type="text" 
                        id="username"
                        v-model="form.username"
                        name="username"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="first_name" class="block text-sm font-medium text-gray-700">Password</label>
                      <input 
                        id="password"
                        v-model="form.password"
                        name="password"
                        type="password"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button 
                    type="submit"
                    :disabled="sending"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
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
  import Messages from '../../Components/Messages.vue'

  export default {
    components: { 
        'layout': Layout,
        'messages': Messages
    },
    props: {
        title: {},
        errors: "",
    },
    remember: 'form',
    data () {
        return {
            sending: false,
            form: {
                username: "",
                password: "",
            }
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        this.$inertia.post(this.route('authentication:login'), this.form, {
            onStart: () => this.sending = true,
            onFinish: () => this.sending = false,
        })
      },
    }
}
</script>