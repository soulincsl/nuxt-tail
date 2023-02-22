<template>
    <div class="container m-auto">
        <div class="grid">
            <img src="https://dummyimage.com/800x400/000/fff" />
        </div>
        <section class="mb-16 mt-6 relative">
            <div class="relative z-10">
                <div class="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
                    <div class="flex-none min-w-full px-4 sm:px-6">
                        <ul
                            class="border-b border-slate-200 space-x-6 flex whitespace-nowrap"
                        >
                            <li v-for="(item, index) in tabs" :key="index">
                                <h2
                                    :class="`flex text-sm cursor-pointer leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px ${
                                        item.value === tab
                                            ? 'text-blue-500 border-current'
                                            : 'text-slate-900 border-transparent hover:border-slate-300'
                                    }`"
                                    @click="onTab(item.value)"
                                >
                                    {{ item.name }}
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                id="content-wrapper"
                class="relative z-10 max-w-full mb-16 prose prose-slate dark:prose-dark"
                bis_skin_checked="1"
            >
                <div v-if="tab === '1'" class="grid grid-cols-1 md:grid-cols-3">
                    <div class="col-span-2 bg-red-500">
                        <h1 class="inline-block text-2xl sm:text-3xl">
                            On The Mekong Resort
                        </h1>
                        <p>
                            Conveniently situated in the Riverfront part of
                            Luang Prabang, this property puts you close to
                            attractions and interesting dining options.
                        </p>
                    </div>
                    <div class="bg-green-500">RIGHT</div>
                </div>

                <div v-if="tab === '2'">
                    <Map />
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
const router = useRouter();
const tab = ref(route.query.tab ? route.query.tab : "1");
const tabs = ref([
    {
        name: "Overview",
        value: "1",
    },
    { name: "Location", value: "2" },
    { name: "Policy", value: "3" },
]);
const onTab = (input) => {
    tab.value = input;
    router.push({
        path: `/detail`,
        query: {
            tab: input,
        },
    });
};
</script>