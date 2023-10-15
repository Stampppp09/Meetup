<template>
  <!-- <v-app-bar flat color="info">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>
  </v-app-bar> -->

 
  <!-- <v-card> -->
    <!-- <v-layout> -->
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="blue-darken-2"
        prominent
        
        >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">Badminton Meetup</router-link>
          
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn 
        flat
        v-for="item in items" 
        :key="item.title"
        router
        :to="item.link">
        <v-icon left dark>{{ item.icon }}</v-icon>
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
        <v-icon>{{ item.icon }}</v-icon>{{ item.title }}
      </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <!-- <v-main style="height: 500px;">
      
      </v-main> -->
    <!-- </v-layout> -->
  <!-- </v-card> -->
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
          link: '/viewmeetups',
          icon: 'mdi-account-supervisor'

        },
        {
          title: 'Organize Meetups',
          value: 'organize meetups',
          link: '/organizemeetups' ,
          icon: 'mdi-map-marker'

        },
        {
          title: 'Profile',
          value: 'profile',
          link: '/profile',
          icon: 'mdi-account'

        },
        {
          title: 'Sign Up',
          value: 'sign up',
          link: '/signup',
          icon: 'mdi-face-man'

        },
        {
          title: 'Sign In',
          value: 'sign in',
          link: '/signin',
          icon: 'mdi-login'

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
