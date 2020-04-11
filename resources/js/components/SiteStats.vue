<template>
    <div>
        <h1 class="font-normal text-3xl text-gray-700 leading-none mb-8">
            Laracasts Stats
        </h1>

        <ul>
            <li><strong>Total Series</strong> {{ series }}</li>
            <li><strong>Total Lessons</strong> {{ lessons }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SiteStats",

        data() {
            return {
                series: 0,
                lessons: 0,
            }
        },

        created() {
            axios
                .get('http://vue-app.test/api/stats')
                .then(response => response.data)
                .then( data => {
                    this.series = data.series;
                    this.lessons = data.lessons;
                })
                .catch(console.error);
        }
    }
</script>

<style scoped>

</style>
