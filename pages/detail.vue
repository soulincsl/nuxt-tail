<template>
    <div class="container m-auto">
        <div class="grid">
            <img src="https://dummyimage.com/600x400/000/fff" />
        </div>
        <section class="mb-16 relative">
            <div class="relative z-10">
                <div class="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
                    <div class="flex-none min-w-full px-4 sm:px-6">
                        <ul
                            class="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5"
                        >
                            <li v-for="(item, index) in tabs" :key="index">
                                <h2>
                                    <a
                                        :class="`flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px ${
                                            item.value === tab
                                                ? 'text-blue-500 border-current'
                                                : 'text-slate-900 border-transparent hover:border-slate-300'
                                        }`"
                                        :href="`/detail?tab=${item.value}`"
                                        >{{ item.name }}</a
                                    >
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                id="content-wrapper"
                class="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark"
                bis_skin_checked="1"
            >
                <div v-if="tab === '1'">
                    <h1>Overview content</h1>
                </div>
                <div v-if="tab === '2'">
                    <h1>Location content</h1>
                </div>
                <div v-if="tab === '3'">
                    <h1>Policy</h1>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const route = useRoute();
const tab = ref(route.query.tab ? route.query.tab : "1");
const tabs = ref([
    {
        name: "Overview",
        value: "1",
    },
    { name: "Location", value: "2" },
    { name: "Policy", value: "3" },
]);
</script>