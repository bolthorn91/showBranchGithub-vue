<template>
  <div class="branches">
      <div>
          <input type="text" v-model="urlGit">
          <input type="button" @click="buscar" value="Buscar">
      </div>
      <ul class="list">
          <selector :branch="branch" v-for="branch in branches" v-on:selected="selected"></selector>
      </ul>
      <div>
        <commits :gitApi="gitApi" :clave="clave" :mandar="mandar" :branch="branch" ></commits>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import commits from './commits';
import selector from './selector';
export default {
  name: 'Branches',
  components:{
      commits,
      selector
  },
  data () {
    return {
        branches:[],
        gitApi:"https://api.github.com/repos/",
        clave:"client_id=a3fbb40a9ea79bb5b81e&client_secret=bc4039616148d3f52a56136a3113b65d8fe7483d",
        urlGit:"",
        mandar:"",
        branch:""
    }
  },
  methods: {
      recarga(){
          axios.get(this.gitApi+this.mandar+"/branches?"+this.clave)
            .then( res => { 
                this.branches = res.data
            });
      },
      buscar(){
        let urlGit= this.urlGit.split(".com/");
        this.mandar=urlGit[1];
        this.recarga();
      },
      selected(branch){
          this.branch=branch;
      }
  }
}
</script>
<style>
    ul .list{
    list-style-type: none;
    padding: 0;
    }
    li .list{
    display: inline-block;
    margin: 0 10px;
    }
</style>
