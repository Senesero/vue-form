<template>
<!-- <v-card-text justify-center max-width="800" color="#f9f9f9"> -->
   <v-card-text color="#f9f9f9">
      <div class="headerContainer">
        <v-row>
          <v-col
            cols="12" 
            sm="12"
            md="4"
            lg="4">
            <my-title text="SOLICITUD"></my-title>
            <v-row>
              <v-col 
                cols="12" 
                sm="3"
                md="4"
                lg="4">
                <p>ID</p>
                <p class="data">0000001</p>
              </v-col>
              <v-col 
                cols="12" 
                sm="5"
                md="8"
                lg="8">
                <p>SOLICITANTE</p>
                <p class="data">NOMBRE APELLIDO1 APELLIDO2</p>
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col
            cols="12" 
            sm="12"
            md="7"
            lg="7">
            <my-title text="PACIENTE"></my-title>
            <v-row>
              <v-col
                cols="12"
                sm="4"
                md="4"
                lg="4">
                <p>NOMBRE</p>
                <p class="data">NOMBRE</p>
              </v-col>
              <v-col 
                cols="12" 
                sm="4"
                md="4"
                lg="4">
                <p>APELLIDO</p>
                <p class="data">APELLIDO1 APELLIDO2</p>
              </v-col>
              <v-col
                cols="12" 
                sm="4"
                md="4"
                lg="4">
                <p>F. NACIMIENTO</p>
                <p class="data">01/01/2010 (10 años)</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        </div>
      </v-card-text>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { FormProps } from "../formProps";
import MyTitle from './Title.vue';

export default Vue.extend({
  name: "MyHeader",
  components: { MyTitle },
  props: {
    text: {},
  } as FormProps,
});
</script>

<style module>
h2 {
  color: #acddf6;
}

.headerContainer {
  background-color: #f9f9f9;
  padding: 10px;
}

.data {
  font-weight: bold;
}
</style>