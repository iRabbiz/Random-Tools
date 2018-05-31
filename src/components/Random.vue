<template>
    <div id="random">
      <div id="box">
        <!-- <div id="card-item" v-for="(item, index) in items" :key="index">
          <div id="data-img" :style="{ 'background-image' : 'url(' + items[index].img + ')' }"></div>
          <div id="data-name">{{ items[index].name }}</div>
        </div> -->
         <div id="card-item">
          <div id="data-img" v-model="randomNum" :style="{ 'background-image' : 'url(' + items[randomNum].img + ')' }"></div>
          <div id="data-name">{{ items[randomNum].name }}</div>
        </div>
        <br>
        <br>
        <button type="button" class="btn-random" @click="randomFunc">Random</button>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  name: 'Random',
  data () {
    return {
      items: [{id: 0, name: '-', img: 'https://pbs.twimg.com/profile_images/624226901888888835/lVcndk_E.png'}],
      randomNum: 0,
      randomDelay: 100,
      randomCount: 0
    }
  },
  methods: {
    // goingUp () {
    //   firebase.database().ref('profile').push().set({
    //     name: this.name,
    //     tel: this.tel
    //   })
    // }
    randomFunc () {
      let lengthNum = this.items.length
      let randomTimes = 70
      this.randomNum = Math.floor(Math.random() * Math.floor(lengthNum))
      this.randomCount += 1
      if (this.randomCount > randomTimes / 3) {
        this.randomDelay += 10
      }
      if (this.randomCount < randomTimes) {
        setTimeout(this.randomFunc, this.randomDelay)
      } else {
        this.randomDelay = 100
        this.randomCount = 0
      }
    }
  },
  mounted () {
    firebase.database().ref('profile').once('value', snapshot => {
      if (snapshot.exists()) {
        let count = 1
        snapshot.forEach(data => {
          this.items.push({id: count, name: data.val().name, img: data.val().img})
          count += 1
        })
      }
    })
  }
}
</script>

<style lang="scss" scope>
#random {
    background: url(https://itcamp.in.th/14/static/img/bg-sec6.2d89848.png);
    height: 100vh;
  }

  #box {
    padding: 20vh 5vh;
  }

  #card-item {
    background: #fff;
    box-shadow: 0 0 8px #fff;
    border-radius: 5px;
    width: 20%;
    height: 370px;
    padding: 10px;
    display: inline-block;
    // margin: 0 20px;
  }

  #data-img {
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 5px 5px 0 0;
    height: 300px;
  }

  #data-name {
    height: 60px;
    font-size: 20px;
    line-height: 60px;
  }

  .btn-random {
    background: #fff;
    border: 3px solid #fff;
    box-shadow: 0 0 5px #fff;
    font-weight: bold;
    color: #101232;
  }
</style>
