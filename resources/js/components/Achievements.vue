<template>
    <div>
        <h1 class="font-normal text-3xl text-gray-700 leading-none mb-8">
            Your Achievements
        </h1>

        <input
            type="text"
            placeholder="Your Laracasts API token"
            v-model="token"
            class="border p-2 rounded w-full mb-4"
            @keyup.enter="fetchAchievements"
        />

        <p v-if="this.message" class="text-red-500 text-sm">{{ message }}</p>

        <ul>
            <li v-for="achievement in achievements">
                {{ achievement.body }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Achievements",

        data() {
            return {
                token: '',
                achievements: [],
                message: '',
            }
        },

        methods: {
            fetchAchievements() {
                // hashed API Tokens
                axios
                    .get(`http://vue-app.test/api/achievements?api_token=${this.token}`)
                    .catch(error => {
                        this.message = error.response.data.message;
                        this.achievements = [];
                    })
                    .then(({ data }) => {
                        this.achievements = data;
                        this.message = '';
                    });
            }
        },
    }
</script>

<style scoped>

</style>
