import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
})

const vm = new Vue({
  el: '#app',
  data: {
    categorias: [],
    barrios: [],
    bienes: [],
    categoriaSeleccionada: "",
    barrioSeleccionado: "",
  },
  mounted() {
    axios.get("https://patrimoniosculturales-qa.gcba.gob.ar/api/categorias")
      .then(response => {this.categorias = this.categoriasFormato(response.data) });
    axios.get("https://patrimoniosculturales-qa.gcba.gob.ar/api/barrios")
      .then(response => {this.barrios = this.barriosFormato(response.data) });
    axios.get("https://patrimoniosculturales-qa.gcba.gob.ar/api/bienes")
      .then(response => {this.bienes = response.data});
  },
  methods: {
    barrioPorId: function(id) {
      nombreDeBarrio = this.barrios.filter(function (barrio) {
        return barrio.id == id;
      });
      if(nombreDeBarrio.length > 0) {
        return nombreDeBarrio[0].nombre;
      }
      return "";
    },
    categoriaPorId: function(id) {
      nombreDeCategoria = this.categorias.filter(function (categoria) {
        return categoria.id == id;
      });
      if(nombreDeCategoria.length > 0) {
        return nombreDeCategoria[0].nombre;
      }
      return "";
    },
    barriosFormato: function(data) {
      for(barrio in data) {
        data[barrio].nombre = data[barrio].nombre.charAt(0).toUpperCase() + data[barrio].nombre.slice(1).toLowerCase();
      }
      return data;
    },
    categoriasFormato: function(data) {
      for(var categoria in data) {
        data[categoria].nombre = data[categoria].nombre.charAt(0).toUpperCase() + data[categoria].nombre.slice(1).toLowerCase();
      }
      return data;
    }
  },
  computed: {
		bienesFiltrados: function() {
			var vm = this;
			var categoria = vm.categoriaSeleccionada;
			var barrio = vm.barrioSeleccionado;
			
			if(categoria === "" && barrio === "") {
				return vm.bienes;
			}
      else {
        results = vm.bienes.filter(function(bien) {
          if(categoria === "") {
            return bien.barrioId === barrio;
          }
          if(barrio === "") {
            return bien.categoriaId === categoria;
          }
					return bien.categoriaId === categoria && bien.barrioId === barrio;
				});
        if(results.length === 0) {
          return [{"denominacion": "No se encontraron resultados", "localizacion": "", "contenido": "Modifique los parametros de los filtros para ver otras opciones."}]
        }
				return results.sort(function() { return 0.5 - Math.random() });
			}
    }
  }
});