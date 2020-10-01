<template>
  <v-layout>
    <form-component
      :form-data="formData"
      :update-form-data="updateFormData"
      :register-incident="registerIncident"
      :close-modal="closeModal"
      :search-employee="searchEmployee"
    />
  </v-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { FormProps } from './formProps';
import { FormComponent } from './components';

export default Vue.extend({
  name: 'FormDataPage',
  components: { FormComponent },
  props: {
    formData: {},
    updateFormData: {},
    registerIncident: {},
    closeModal: {},
    searchEmployee: {},
  } as FormProps,
});
</script>
