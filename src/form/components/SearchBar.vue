<template>
  <v-text-field
    label="PERSONA"
    placeholder="Introduce la persona buscada"
    :value="getValue()"
    @input="employeeOpening => searchEmployee(isOpening ? 'employeeOpening' : 'employeeClosing', employeeOpening)"
    :rules="requiredRules"
    required
    outlined
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { FormProps } from "../formProps";

export default Vue.extend({
  name: "SearchBarComponent",
  props: {
    formData: {},
    searchEmployee: {},
    isOpening: {},
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
    getValue() {
      console.log('getValue: ' + this.isOpening)
      if(this.isOpening) {
        return this.formData.employeeOpening
      } else {
        return this.formData.employeeClosing
      }
    }
  },
});
</script>
