Vue.component('product', {

  template: `
    <div @click="clickHandler">
      <img v-bind:src="image">
    </div>
  `,

  props: ['image', 'brand'],

  data() {
    return {
      clicked: false
    }
  },

  methods: {
    clickHandler() {
      this.clicked = true
      this.$emit('product-clicked', this.brand)
    }
  }

})
