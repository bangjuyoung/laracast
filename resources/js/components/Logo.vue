<template>
    <div>

        <h1 class="font-normal text-3xl text-gray-700 leading-none mb-8">
            Full Logo
        </h1>

        <div class="mb-10">
            <picture style="height: 382px;" class="block shadow rounded-lg flex items-center justify-center mb-6">
                <img src="/images/logo.svg" alt="logo">
            </picture>
            <div class="flex justify-between items-center">
                <p>
                    Original Logo on <strong>white</strong> background
                </p>
                <a href="/images/logo.svg" class="font-bold border border-gray-300 px-8 py-2 rounded-full text-black text-xs">logo.svg</a>
            </div>
        </div>

        <div>
            <picture style="height: 382px;" class="bg-blue-600 block shadow rounded-lg flex items-center justify-center mb-6">
                <img src="/images/negative-logo.svg" alt="logo">
            </picture>
            <div class="flex justify-between items-center">
                <p>
                    Negative Logo on <strong>dark</strong> background
                </p>
                <a href="/images/logo.svg" class="font-bold border border-gray-300 px-8 py-2 rounded-full text-black text-xs">negative-logo.svg</a>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>

</style>
