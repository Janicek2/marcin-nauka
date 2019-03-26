var app = new Vue({
  el: '#app',
  data: {
    title: 'Moje',
    opis: 'Logo strazy',
    desc: "świeczka",
    image: './pexels-photo-220483.jpeg',
    onSale: false,
    display: true,
    owoce: [
      { id: 1,
        nazwa: 'orange',
        kolor: 'pomaranczowy'
      },
      {
        id: 2,
        nazwa: 'banan',
        kolor: 'zolty'
      },
      {
        id: 3,
        nazwa: 'kiwi',
        kolor: 'zielony'
      },
      {
        id: 4,
        nazwa: 'melon',
        kolor: 'niebieski'
      },
    ],
    zdjecia:[
      {
        id: 1,
        nazwa: 'Zdjecie 1',
        image: './pexels-photo-220483.jpeg'
      },
      {
        id:2,
        nazwa: 'Zdjecie 2',
        image: './pexels-photo-266436.jpeg'
      }
    ],
    cart: 0,
    },
    methods: {
      addOneToCart() {
        this.cart += 1;
      },
      displayOn() {
        if (this.display = false) {
          this.display = true;
        } else {
          this.display = false;
        }
      },
      changePic: function(image) {
        this.image = image;
      }
    },
    
  },
)
