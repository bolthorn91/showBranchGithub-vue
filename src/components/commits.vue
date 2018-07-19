<template>
<div class="commits">
    <ul>
     <commit :dato="commit" v-for="commit in commits"/>
    </ul>
</div>
</template>
<script>
import axios from 'axios';
import commit from './commit';
export default {
    name: "commits",
    props: ['gitApi', 'clave', 'mandar', 'branch'],
    components:{
      commit
  },
    data(){
        return {
            commits:[]
        }
    },
    watch:{
        branch() {
            this.lista();
        }
    },
    methods: {
        lista(){
            axios.get(this.gitApi+this.mandar+"/commits?sha="+this.branch+"&"+this.clave)
            .then( res => { 
                this.commits = res.data;
                this.selected();
            });
        }
    }
}
</script>
