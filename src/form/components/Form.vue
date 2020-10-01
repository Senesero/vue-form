<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
    <v-layout column justify-center>
      <v-card>
        <v-card-title>
          <span class="headline">Crear incidencia</span>
          <v-row justify="end">
            <v-btn
              color="black darken-1"
              text
              @click="closeModal"
              > X </v-btn>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <my-header></my-header>
        <v-card-text>
          <v-container>
            <my-title text="Datos de la incidencia"></my-title>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="3"
                >
                  <v-text-field
                    label="FECHA/HORA INCIDENCIA*"
                    :value="formData.dateIncident"
                    @input="dateIncident => updateFormData('dateIncident', dateIncident)"
                    required
                    :rules="requiredRules"
                    outlined
                    ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="3"
                >
                  <v-select
                    :items="['Menor', 'Mayor', 'Grave']"
                    label="SEVERIDAD*"
                    :value="formData.severity"
                    @input="severity => updateFormData('severity', severity)"
                    required
                    :rules="requiredRules"
                    outlined
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="3"
                >
                  <v-select
                    :items="getTypeIncident()"
                    label="TIPO DE INCIDENCIA*"
                    :value="formData.typeIncident"
                    @input="typeIncident => updateFormData('typeIncident', typeIncident)"
                    required
                    :rules="requiredRules"
                    outlined
                ></v-select>
              </v-col>
              <v-col cols="12"
                sm="6"
                md="3">
                  <v-text-field
                    label="NOTIFICAR A"
                    :value="formData.notify"
                    @input="notify => updateFormData('notify', notify)"
                    required
                    :rules="notifyRules"
                    outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>

        <block-data
          :form-data="formData"
          :update-form-data="updateFormData"
          :search-employee="searchEmployee"
          :isOpening="true"
          text="Datos de apertura"></block-data>

        <block-data
          :form-data="formData"
          :update-form-data="updateFormData"
          :search-employee="searchEmployee"
          :isOpening="false"
          text="Datos de cierre" ></block-data>

        <v-card-text>
          <v-row justify="end">
            <v-btn
              color="#ce6f77"
              class="mr-4 white--text"
              @click="reset"
              > Eliminar incicencia </v-btn>

            <v-btn                
              color="#2aabe3"
              class="mr-4 white--text"
              @click="validate"
              > Registrar incidencia </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-form>
  <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          X
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor, PropOptions } from 'vue';
import { FormProps } from '../formProps';
import BlockData from './BlockData.vue'
import MyTitle from './Title.vue'
import MyHeader from './Header.vue'

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: 'FormComponent',
  components: { BlockData, MyTitle, MyHeader },
  props: {
    formData: {},
    updateFormData: {},
    registerIncident: {},
    closeModal: {},
    searchEmployee: {},
  } as FormProps,
  data() {
    return {
      valid: true,
      requiredRules: [
        v => !!v || 'Campo requerido',
      ],
      notifyRules: [
        v => {
          if(this.formData.severity !== 'Grave') {
            return true
          } 

          return !!v ||  'Campo requerido'
        }
      ],
      snackbar: false,
      snackbarText: '',
      timeout: 2000,
    }
  },
  methods: {
    validate () {
      if(this.$refs.form.validate()) {
        this.registerIncident();
        this.snackbarText = 'La incidencia ha sido creada correctamente';
        this.snackbar = true;
        setTimeout(() => this.closeModal(), this.timeout);
      } else {
        this.snackbarText = 'Faltan campos obligatorios';
        this.snackbar = true;
      }
    },
    reset () {
      this.$refs.form.reset()
      this.closeModal()
    },
    getTypeIncident () {
      switch(this.formData.severity) {
        case 'Menor':
         return ['Tipo 1', 'Tipo 2', 'Tipo 3'];
         break;
        case 'Mayor':
          return ['Tipo 4', 'Tipo 5', 'Tipo 6']
          break;
        case 'Grave':
          return ['Tipo 7', 'Tipo 8', 'Tipo 9']
          break;
        default: 
          return []
      }
    },
  },
});
</script>

