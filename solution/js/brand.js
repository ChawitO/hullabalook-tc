Vue.component('brand', {

  template: '<img v-bind:src="\'images/\' + brand +\'.svg\'" @click="clickHandler">',

  props: ['brand'],

  methods: {
    clickHandler() {
      console.log(this.brand)
      this.$emit('brand-clicked', this.brand)
    }
  }

})
