<template>
  <div>
    NOTAS
    <div class="editor">
      <quill-editor 
        ref="myTextEditor"
        :config="editorOption"
        :value="getValue()"
        @input="nota => updateFormData(isOpening ? 'notesOpening' : 'notesClosing', nota)">
      </quill-editor>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { FormProps } from "../formProps";
import {quillEditor} from "vue-quill-editor";
import 'quill/dist/quill.js';

export default Vue.extend({
  name: "BoxText",
  props: {
    formData: {},
    updateFormData: {},
    isOpening: {},
  } as FormProps,
  data() {
    return {
      contenido: "esta es una demostración simple",
      editorOption: {
        theme: "bubble"
      }
    };
  },
  methods: {
    getValue() {
      if(this.isOpening) {
        return this.formData.notesOpening
      } else {
        return this.formData.notesClosing
      }
    }
  },
});
</script>
