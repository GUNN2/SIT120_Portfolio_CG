var spaced = {
    data: function (){
        return {
            count: 0
        }
    },
    template: '<button v-on:keyup.space="count = count + 20"> I am now {{ count }} </button>' 
}

Vue.component('hello', {
    props: {
        Shows: Boolean,
      },
    data: function (){
        return {
            greeting:'Hello World!',
            Shows: true
        }
    },
    template: '<p> {{ greeting }} </p>'
})


new Vue({ 
    el: '#app',
    components: {
    'spaced' : spaced
    }
})
