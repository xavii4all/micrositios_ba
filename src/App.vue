<template>
    <div id="app">
            <!-- CONTENIDO -->
    <main class="main-container" role="main" id="app">

      <!-- BÚSCADOR -->
      <div class="container">

        <div class="row">
          <div class="col-xs-12">
            <h1>Guía Digital de Patrimonios Culturales</h1>
            <br>
          </div>
        </div>

        <div class="row">
          <form role="form">
            <div class="col-xs-12">
              <div class="form-group has-button">
                <input type="text" class="form-control" placeholder="Buscar entre los 300 patrimonios...">
                <button class="btn">
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </div>
            </div>
              
            <div class="col-xs-12 col-md-6">
              <div class="form-group has-button">
                <select class="form-control chosen-select" data-placeholder="Por categoría" v-model="categoriaSeleccionada">
                  <option value="">Filtrar por categoría...</option>
                  <option v-for="categoria in categorias" v-bind:value="categoria.id">{{ categoria.nombre }}</option>
                </select>
              </div>
            </div>
              
            <div class="col-xs-12 col-md-6">
              <div class="form-group has-button">
                <select class="form-control chosen-select" data-placeholder="Por barrio" v-model="barrioSeleccionado">
                  <option value="">Filtrar por barrio...</option>
                  <option v-for="barrio in barrios" v-bind:value="barrio.id">{{ barrio.nombre }}</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <hr>
            <br>
          </div>
        </div>

        <div class="row row-flex">
                              
          <div class="col-xs-12 col-sm-6 col-md-4" v-for="bien in bienesFiltrados">
            <div class="thumbnail">
              <img src="src/img/thumb.png" alt="" width="100%" />
              <div class="caption">
                <h4><span class="label label-default">{{ categoriaPorId(bien.categoriaId) }}</span></h4>
                <h3>{{ bien.denominacion }}</h3>
                <p>{{ bien.sintesis }}</p>
                <br>
                <p>Barrio: {{ barrioPorId(bien.barrioId) }}</p>
                <p>Antigüedad: {{ bien.epoca }}.</p>
                <p><a v-bind:href="'bienes/' + bien.id" class="btn btn-primary" role="button">Ver ficha técnica</a></p>
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-xs-12">
            <div class="text-center">
              <ul class="pagination">
                <li class="disabled"><a href="#" class="glyphicon glyphicon-chevron-left"></a></li>
                <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#" class="glyphicon glyphicon-chevron-right"></a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
        
    </main>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            title: ''
        }
    }
}
</script>