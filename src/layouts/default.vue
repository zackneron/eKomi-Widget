<template>
    <v-app light>
        <v-main>
            <Nuxt />
        </v-main>
    </v-app>
</template>

<script>
import MainComp from '@/pages/index'

export default {
    name: 'App',
    components: { MainComp },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style lang="scss">
    * {
        font-family: "inter-regular";
        color: $black;
    }

    .new-text {
        color: #656565;
    }
</style>
