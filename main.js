const appVue = new Vue({
  // selettore dell'elemento html dove avviare vue
  el: "#app",

  // Conterrà tutti i dati necessari all'applicazione
  data: {
    // varie chiavi necessarie all'app
    message: "Ciao! Sono stato stampato da Vue.js",
    immage: "https://picsum.photos/200/300",
  },

  // Conterrà una serie di funzioni
  methods: {
    // funzioni che useremo nell'app
    createImage: function () {
      window.location.reload();
    },
  },
});
