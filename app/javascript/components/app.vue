<template>
  <v-app class="grey lighten-5">
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer class="pa-3 justify-center pl-0">
      <p class="font-weight-bold">Made with 
          <v-btn fab dark small color="pink lighten-2">
                <v-icon dark>favorite</v-icon>
          </v-btn> by Prasanna
        </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
