<template>
  <div class="branches">
      <div>
          <input type="text" v-model="urlGit">
          <input type="button" @click="buscar" value="Buscar">
      </div>
      <ul>
          <li v-for="branch in branches">
              <input type="radio" name="selector" @click="selected(branch.name)" >
              {{branch.name}}
          </li>
      </ul>
      <div v-for="commit in commits">
          <commit :dato="commit"></commit>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import commit from './commit';
export default {
  name: 'Branches',
  components:{
      commit
  },
  data () {
    return {
        branches:[],
        gitApi:"https://api.github.com/repos/",
        clave:"?client_id=a3fbb40a9ea79bb5b81e&client_secret=bc4039616148d3f52a56136a3113b65d8fe7483d",
        urlGit:"",
        mandar:"",
        commits:[]
    }
  },
  methods: {
      recarga(){
          axios.get(this.gitApi+this.mandar+"/branches"+this.clave)
            .then( res => { 
                this.branches = res.data
            });
      },
      buscar(){
        let urlGit= this.urlGit.split(".com/");
        this.mandar=urlGit[1];
        console.log(this.mandar);
        this.recarga();
      },
      selected(branch){
        console.log(branch)
        console.log(this.gitApi+this.mandar+"/commits/"+branch+this.clave)
        axios.get(this.gitApi+this.mandar+"/commits/"+branch+this.clave)
            .then( res => { 
                this.commits = res.data;
                this.selected();
            });
      }
  }
}
</script>
<style>
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    display: inline-block;
    margin: 0 10px;
    }
</style>
