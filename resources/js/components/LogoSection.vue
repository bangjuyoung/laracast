<template>
    <div :class="classes">
        <picture
            style="height: 382px;"
            class="block shadow rounded-lg flex items-center justify-center mb-6"
            :class="theme"
        >
            <img :src="src" alt="logo">
        </picture>
        <div class="flex justify-between items-center">
            <p class="font-thin">
                <slot name="description">
                    Original Logo on <strong class="font-bold">white</strong> background
                </slot>
            </p>
            <a :href="src" class="font-bold border border-gray-300 px-8 py-2 rounded-full text-black text-xs hover:bg-blue-100">
                <slot name="link-name">
                    logo.svg
                </slot>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LogoSection",

        props: {
            'classes': {
                default: '',
            },
            'theme': {
                default: '',
            },
            'src': {
                default: '/images/logo.svg',
            }
        },
    }
</script>

<style scoped>

</style>
