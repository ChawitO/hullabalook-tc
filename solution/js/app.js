var app = new Vue({
  el: '#app',

  data() {
    return {
      isActive: false,
      hasWon: false,
      seconds: 0,
      timer: '00 : 00s',
      intervalId: null,
      currentlySelected: '',
      productsSolved: [],
      score: 0,
      datas: [
        {
          'image': 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/6a48858b62374aed8449a8af011d27ba_9366/Lite_Racer_CLN_Shoes_Blue_B96566_01_standard.jpg',
          'brand': 'adidas'
        },
        {
          'image': 'https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4021a46ba05b476a8014a99801073e1d_9366/Reebok_CrossFit_Nano_8_Flexweave_Blue_DV5331_01_standard.jpg',
          'brand': 'reebok'
        },
        {
          'image': 'https://i1.adis.ws/i/jpl/jd_214003_a?qlt=80&w=600&h=425&v=1&fmt=webp',
          'brand': 'nike'
        },
        {
          'image': 'https://nb.scene7.com/is/image/NB/mcruznn2_nb_02_i?$pdpPictLG2x$&fmt=webp',
          'brand': 'new_balance'
        }
      ]
    }
  },

  methods: {
    start() {
      this.isActive = true
      this.startTimer()
    },
    startTimer() {
      this.intervalId = setInterval(() => {
        this.seconds++
        const min = `${Math.floor(this.seconds / 60)}`.padStart(2, '0')
        const sec = `${this.seconds % 60}`.padStart(2, '0')
        this.timer = `${min} : ${sec}s`
      }, 1000)
    },
    stop() {
      this.isActive = false
      clearInterval(this.intervalId)
    },
    handleProductClick(product) {
      this.currentlySelected = product
    },
    handleBrandClick(brand) {
      const isMatched = brand === this.currentlySelected
      console.log(`${brand} === ${this.currentlySelected} ? => ${isMatched}`)

      if (!isMatched) return null
      this.score++
      this.productsSolved.push(brand)
    }
  }

})
