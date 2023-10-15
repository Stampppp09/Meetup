<template>
  <!-- <h1>This is Home</h1>
  <HelloWorld />
  <second></second> --> 
  <div>{{ counter.count }}</div>
  <v-btn @click="counter.increment">increase</v-btn>
  <div>test</div>
  <v-container>
    <v-row>
      <v-col xs="12" md="6"  class="text-sm-right"> 
        <v-btn large router to="/viewMeetups" color="blue-lighten-4">Explore Meetups</v-btn>
        <!-- <div>test</div> -->
      </v-col>
      <v-col xs="12" md="6"  class="text-sm-left">
        <v-btn large router to="/organizeMeetups" color="blue-lighten-4">Organize Meetups</v-btn>
        <!-- <div>test</div> -->
    </v-col>
  </v-row>
    <v-latout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
        <v-carousel-item
        v-for="meetup in meetups"
        :src="meetup.imageUrl"
        :key="meetup.id">
        <div class="title">
          {{ meetup.title }}
        </div>
      </v-carousel-item>
      </v-carousel>
      </v-flex>
    </v-latout>

    <v-layout row wrap class="mt-2">
      <v-flex >
        <p>join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- <script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import second from '@/components/second.vue'
</script> -->
<script setup>
import { counterStore } from '@/store/counter'

// access the `store` variable anywhere in the component ✨
const counter = counterStore()
</script>

<script>
export default {
  data () {
    return{
      meetups: [
        {imageUrl: 'https://www.siamsporttalk.com/media/com_mddeal/images/properties/1411/1303.jpg', id: 'dsfkjal', title: 'tito badminton court'},
        {imageUrl: 'https://f.ptcdn.info/642/056/000/p5p4mjz6KeO9iDleFx-o.jpg', id: 'sdafs', title: 'Winner Sports Avenue'},
      ]
    }
  }
}
</script>

<style scoped>

.title {
  position: absolute;
  bottom: 50px;
  background-color: darkcyan;
  color: white;
  font-size: 2em;
  padding: 30px;
}
</style>
