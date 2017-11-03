<template>
    <div id="app">
        <h3>Starbase Router</h3>
        <h4>
            <router-link class="link" to="/data/people">Meet the Characters</router-link>
            |
            <router-link class="link" to="/data/planets">Meet the Planets</router-link>
            |
            <router-link class="link" to="/data/starships">Meet the Starships</router-link>
        </h4>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>