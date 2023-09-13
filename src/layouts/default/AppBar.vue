<template>
  <!-- <v-app-bar flat color="info">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>
  </v-app-bar> -->

 
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
        image="https://picsum.photos/350/165?random"
        >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Test</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn 
        flat
        v-for="item in items" 
        :key="item.title"
        router
        :to="item.link">
        {{item.title}}
      </v-btn>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
         
        >
        <v-list-item
        flat
        location=""
        v-for="item in items" 
        router 
        :to="item.link"
        >
        {{ item.title }}
      </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px;">
      
      </v-main>
    </v-layout>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'View Meetups',
          value: 'view meetups',
          link: '/viewmeetups'
        },
        {
          title: 'Organize Meetups',
          value: 'organize meetups',
          link: '/organizemeetups'

        },
        {
          title: 'Profile',
          value: 'profile',
          link: '/profile'

        },
        {
          title: 'Sign Up',
          value: 'sign up',
          link: '/signup'

        },
        {
          title: 'Sign In',
          value: 'sign in',
          link: '/signin'

        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
