<template>
  <div>
    <h2>{{text}}</h2>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { FormProps } from "../formProps";

export default Vue.extend({
  name: "MyTitle",
  props: {
    text: {},
  } as FormProps,
});
</script>

<style module>
h2 {
  color: #acddf6;
  padding-left: 5px;
}
</style>