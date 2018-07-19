<template>
    <li  class="list">
        <input type="radio" name="selector" @click="$emit('selected',branch.name)" >
        {{branch.name}}
    </li>
</template>
<script>
import axios from 'axios';
export default {
    name: "selector",
    props: ['branch']
}
</script>
