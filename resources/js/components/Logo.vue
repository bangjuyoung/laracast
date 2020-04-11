<template>
    <div>

        <h1 class="font-normal text-3xl text-gray-700 leading-none mb-8">
            Full Logo
        </h1>

        <LogoSection
            classes="mb-10"
        >
        </LogoSection>

        <LogoSection
            classes="mb-10"
            theme="bg-blue-700"
            src="/images/negative-logo.svg"
        >
            <template slot="description">
                Negative logo on <strong class="font-bold">dark</strong> background
            </template>
            <template slot="link-name">
                negative-logo.svg
            </template>
        </LogoSection>

        <LogoSection
            theme="bg-black"
            src="/images/pure-negative-logo.svg"
        >
            <template slot="description">
                Pure negative logo on <strong class="font-bold">dark</strong> background
            </template>
            <template slot="link-name">
                pure-negative-logo.svg
            </template>
        </LogoSection>

    </div>

</template>

<script>
    import LogoSection from "./LogoSection";
    export default {
        name: "Logo",
        components: {LogoSection}
    }
</script>

<style scoped>

</style>
