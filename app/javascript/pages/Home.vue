<template>
  <div>
    <v-content>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <p class="display-3 green--text darken-4 thin text--lighten-1">
              Welcome to the Streakr Club
            </p>
          </v-flex>
          <v-flex xs6 align-end pr-3>
            <v-img src="business-img.png" />
          </v-flex>
          <v-flex xs6 justify-center align-center>
            <v-layout justify-space-around fill-height column align-center>
              <div>
                <p
                  class="display-1 font-weight-bold primary--text text--lighten-2 pa-2"
                >
                  Make a Habit today.
                </p>
                <p
                  class="headline font-weight-bold grey--text pa-2 elevation-0"
                >
                  Depending on what they are, our habits will either make us or
                  break us. We become what we repeatedly do - Sean Covey
                </p>
              </div>
              <div>
                <p
                  class="display-1 font-weight-bold primary--text text--lighten-2 pa-2"
                >
                  Purpose. Discipline. Fulfillment.
                </p>
                <p
                  class="headline font-weight-bold grey--text pa-2 elevation-0"
                >
                  When performance is measured, performance improves. When
                  performance is measured and reported back, the rate of
                  improvement accelerates.
                </p>
              </div>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>

export default {
  name: "home"
};
</script>
