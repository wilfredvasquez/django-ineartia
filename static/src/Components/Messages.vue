<template>
  <div>
    <div class="mx-10 my-8 py-5 shadow overflow-hidden focus:ring-2 focus:ring-offset-2 rounded-md"
          :class="variant == 'error' ? 'bg-red-300' : 'bg-indigo-300' ">
      <p class="mx-8">{{ text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    props: {
        variant: {
            type: String,
            default: () => "success"
        },
        text: {
            type: String,
            default: () => ""
        },
    },
    mounted () {
        if(this.text){
            this.dismissCountDown = this.dismissSecs
        }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    }
  }
</script>