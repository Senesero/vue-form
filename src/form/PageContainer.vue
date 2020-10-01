<template>
  <form-data-page
    :form-data="formData"
    :update-form-data="updateFormData"
    :register-incident="registerIncident"
    :close-modal="clearData"
    :search-employee="searchEmployee"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import FormDataPage from './Page.vue';
import { createEmptyFormData } from './viewModel';
import { fetchRecipeById } from '../rest-api/api/employees'

export default Vue.extend({
  name: 'PageContainer',
  components: { FormDataPage },
  data() {
    return {
      formData: createEmptyFormData(),
    };
  },
  props: {
    closeModal: Function,
  },
  methods: {
    clearData() {
      this.formData = createEmptyFormData(),
      this.closeModal()
    },
    updateFormData(field: string, value: string) {
      this.formData = {
        ...this.formData,
        [field]: value,
      };
    },
    registerIncident() {
      console.log('REGISTRA LA INCIDENCIA')
      console.log(this.formData)
    },
    searchEmployee(field: string, employee: string) {
      if(employee?.length > 2) {
        this.fetchEmployee(field, employee)
      }      
      return this.updateFormData(field, employee)
    },
    async fetchEmployee(field: string, employee: string) {
      await fetchRecipeById(employee)
          .then(recipe => {
            if(recipe !== '') {
              return this.updateFormData(field, recipe)
            }
          })
          .catch(error => console.log(error));

      return employee
    }
  },
});
</script>
