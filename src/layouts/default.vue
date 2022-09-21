<template>
    <v-app class="v-review" light>
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
    .v-review {
        padding: 20px;
    }
</style>
