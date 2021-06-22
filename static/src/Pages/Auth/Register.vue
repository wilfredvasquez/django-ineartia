<template>
  <layout>
    <div class="row">
      <div class="col-4"></div>
        <div class="mt-3 col-4">
          <div v-if="errors">
            <messages variant="danger" :text="errors.username" />
          </div>
          <b-card class="mt-3" title="Register">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                  label="First Name:"
                  label-for="input-1"
              >
                <b-form-input
                  id="first_name"
                  v-model="form.firstName"
                  name="last_name"
                  type="text"
                  placeholder="Enter first name"
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                  label="Last Name:"
                  label-for="input-1"
              >
                <b-form-input
                  id="last_name"
                  v-model="form.lastName"
                  name="last_name"
                  type="text"
                  placeholder="Enter last name"
                  required
                >
                </b-form-input>
              </b-form-group>

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
                  label="Email:"
                  label-for="input-1"
              >
                <b-form-input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
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
              <b-button type="submit" variant="primary" :disabled="sending">Register</b-button>
            </b-form>
          </b-card>
        </div>
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
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: "",
            }
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        this.$inertia.post(this.route('authentication:register'), this.form, {
            onStart: () => this.sending = true,
            onFinish: () => this.sending = false,
        })
      },
    }
}
</script>