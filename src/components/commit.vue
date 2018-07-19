<template>
     <li class="commits">
        <b>nombre de usuario:</b> {{dato.commit.committer.name}}<br/>
        <b> fecha:</b> {{dato.commit.committer.date}}<br/>
        <b> email:</b> {{dato.commit.committer.email}}
    </li>
</template>
<script>
import axios from 'axios';
export default {
    name: "commit",
    props: ['dato']
}
</script>
