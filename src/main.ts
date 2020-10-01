import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import vuetify from './plugins/vuetify'

// Introducir editor de texto enriquecido
import VueQuillEditor from 'vue-quill-editor'
 // requiere estilos
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(Vuetify);
Vue.use(VueQuillEditor)
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#root');
