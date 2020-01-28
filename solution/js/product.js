Vue.component('product', {

  template: `
    <div v-bind:class="{ clicked: brand === activeProduct }" @click="clickHandler">
      <img v-bind:src="image">
      <div class="solved" v-if="solved">
        <img src="images/check.svg">
        <img v-bind:src="'images/' + brand +'.svg'">
      </div>
    </div>
  `,

  props: ['image', 'brand', 'activeProduct', 'solved'],

  methods: {
    clickHandler() {
      this.$emit('product-clicked', this.brand)
    }
  }

})
