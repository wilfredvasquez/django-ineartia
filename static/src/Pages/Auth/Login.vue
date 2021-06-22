<template>
  <layout>
    <div class="row">
      <div class="col-4"></div>
      <div class="mt-3 col-4">
          <div v-if="errors">
            <messages variant="danger" :text="errors.username" />
          </div>
          <b-card class="mt-3" title="Login">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                  label="Username:"
                  label-for="input-1"
              >
                <b-form-input
                  id="username"
                  v-model="form.username"
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                  label="Password:"
                  label-for="input-1"
              >
                <b-form-input
                  id="password"
                  v-model="form.password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  required
                >
                </b-form-input>
              </b-form-group>
              <br />
              <b-button type="submit" variant="primary" :disabled="sending">Login</b-button>
            </b-form>
          </b-card>
        </div>
      </div>
  </layout>
</template>

<script>

  import Layout from '../../Components/Layout.vue'
  // import Layout from 'src/Components/Layout.vue'
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