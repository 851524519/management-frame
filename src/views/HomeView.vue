<template>
  <div class="home">
    <h2>HOME</h2>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p @click="changeName">修改名字</p>
    <p @click="changeAge">修改年龄</p>
  </div>
</template>

<script>
import {  
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
export default {
  name: 'HomeView',
  computed: {
    ...mapState(['name', 'age']),
    ...mapGetters(['getName', 'getAge'])
  },
  mounted() {
  },
  methods: {
    ...mapMutations(['setName', 'setAge']),
    changeName() {
      this.setName('qiang')
    },
    changeAge() {
      this.setAge(16)
    }
  }
}
</script>
