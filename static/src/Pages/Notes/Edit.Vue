<template>
    <layout>
        <div class="row">
            <div class="col-3"></div>
            <div class="mt-3 w-50">
                <b-card class="mt-3">
                    <b-form @submit="onSubmit" @reset="onReset">
                        <b-form-group
                            id="input-group-1"
                            label="Excerpt:"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                v-model="form.excerpt"
                                type="text"
                                placeholder="Enter excerpt"
                                required
                                >
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Content:" label-for="input-2">
                            <b-form-textarea
                            id="input-2"
                            v-model="form.content"
                            placeholder="Enter content"
                            rows="8"
                            required
                            ></b-form-textarea>
                        </b-form-group>
                        <br />
                        <b-button type="submit" variant="primary" :disabled="sending">Submit</b-button>
                        <b-button type="reset" variant="danger" :disabled="sending">Reset</b-button>
                    </b-form>
                </b-card>
            </div>
        </div>
  </div>
    </layout>
</template>

<script>
import Layout from '../../Components/Layout.Vue'

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
