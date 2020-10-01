<template>
  <v-app>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="950px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#2aabe3"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Crear incidencia
          </v-btn>
        </template>
        <page-container :close-modal="closeModal" />
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { PageContainer } from './form'

export default Vue.extend({
  name: "App",
  components: { PageContainer },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    closeModal() {
      this.dialog = false
    }
  }
});
</script>
