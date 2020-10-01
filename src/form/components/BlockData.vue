<template>
  <div>
    <v-card-text>
      <v-container>
        <my-title :text="text"></my-title>
        <v-row>
          <v-col cols="12" 
            sm="3"
            md="3">
            <v-text-field
              label="FECHA/HORA"
              :value="getValue()"
              @input="fecha => updateFormData(isOpening ? 'dateOpening' : 'dateClosing', fecha)"
              @dblclick="fecha => this.updateFormData(isOpening ? 'dateOpening' : 'dateClosing', getDate())"
              required
              :rules="requiredRules"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="3"
          >
            <search-bar-component 
              :form-data="formData"
              :search-employee="searchEmployee"
              required
              :is-opening="isOpening"
            />
          </v-col>
          <v-col
            cols="12"
            sm="12"
          >
            <box-text 
              :form-data="formData" 
              :update-form-data="updateFormData"
              :is-opening="isOpening" >
            </box-text>
          </v-col>
        </v-row>
        </v-container>
      </v-card-text>
    <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { getActualDate } from "../../utils/utils";
import { FormProps } from "../formProps";
import SearchBarComponent from './SearchBar.vue'
import BoxText from './BoxText.vue'
import MyTitle from './Title.vue'

export default Vue.extend({
  name: "BlockData",
  components: { SearchBarComponent, BoxText, MyTitle },
  props: {
    formData: {},
    updateFormData: {},
    searchEmployee: {},
    isOpening: {},
    text: {},
  } as FormProps,
  data() {
    return {
      requiredRules: [
         v => {
          if(this.isOpening) {
            return !!v ||  'Campo requerido'            
          } 

          return true
        }
      ],
    }
  },
  methods: {
    getDate () {        
      return getActualDate()
    },
    getValue() {
      if(this.isOpening) {
        return this.formData.dateOpening
      } else {
        return this.formData.dateClosing
      }
    }
  },
});
</script>
