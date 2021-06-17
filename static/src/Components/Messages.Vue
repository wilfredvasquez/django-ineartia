<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      :variant="variant"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{ text }}</p>
    </b-alert>
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
        }
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