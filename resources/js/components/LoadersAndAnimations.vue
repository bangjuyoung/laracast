<template>
    <div>
        <h1 class="font-normal text-3xl text-gray-700 leading-none mb-8">
            Loaders and Animations
        </h1>

        <p class="mb-10 text-gray-700 font-thin">
            This spinner uses AirBnb's
            <a href="http://airbnb.io/lottie/#/web" class="font-bold text-blue-700">Lottie</a>
            library to render its animation. You may download the necessary assets below.
        </p>

        <div class="border shadow rounded-lg flex items-center justify-center mb-8">
            <div ref="lottie" class="w-64" style="height: 457px;"></div>
        </div>

        <div>
            <a href="/animations/spinner.zip" class="font-bold border border-gray-300 px-8 py-2 rounded-full text-black text-xs hover:bg-blue-100">
                spinner.zip
            </a>
        </div>
    </div>
</template>

<script>
    import lottie from 'lottie-web';

    export default {
        name: "LoadersAndAnimations",

        mounted() {
            lottie.loadAnimation({
                container: this.$refs.lottie,
                render: 'svg',
                loop: true,
                autoplay: true,
                path: '/animations/spinner.json'
            });
        }
    }
</script>

<style scoped>

</style>
