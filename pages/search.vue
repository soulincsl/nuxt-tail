<template>
    <div class="container m-auto">
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 mb-2">
            <div class="sm:col-start-2 sm:col-span-10">
                <div>
                    <h2>Where you want to go?</h2>
                </div>
                <form class="group relative my-2">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        />
                    </svg>
                    <input
                        v-model="q"
                        class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                        type="text"
                        aria-label="Search filter"
                        placeholder="Search a place..."
                    />
                </form>
            </div>
        </div>
        <div class="soulin">Hello, Soulin</div>
        <div class="flex">
            <button
                class="bg-blue-500 px-12 py-2 mr-1 border rounded-full text-white"
            >
                All
            </button>
            <button
                class="bg-white px-12 py-2 mr-1 rounded-full text-blue-500 border hover:bg-blue-500 hover:text-white"
            >
                Stay
            </button>
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
                                        :href="`/search?q=${q}&tab=${item.value}`"
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
                    <h1>All content</h1>
                </div>
                <div v-if="tab === '2'">
                    <h1>All Stay</h1>
                </div>
                <div v-if="tab === '3'">
                    <h1>All Restaurant</h1>
                </div>
            </div>
        </section>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="col-span-2">
                <div
                    v-for="n in 5"
                    :key="n"
                    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full my-2 md:hover:shadow-xl"
                >
                    <div class="md:flex">
                        <div class="md:shrink-0">
                            <img
                                class="h-48 w-full object-cover md:h-full md:w-48"
                                src="https://dummyimage.com/600x400/000/fff"
                                alt="Modern building architecture"
                            />
                        </div>
                        <div class="p-8">
                            <div
                                class="uppercase tracking-wide text-lg text-black font-semibold"
                            >
                                Company retreats
                            </div>
                            <a
                                href="/detail"
                                class="flex mt-1 text-sm items-center leading-tight text-blue-500 hover:underline"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="mr-1 text-slate-400 dark:text-slate-500"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"
                                    />
                                    <path
                                        d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                    />
                                </svg>
                                Riverfront, Luangprabang - 1.7 km to center
                            </a>
                            <p class="mt-2 text-slate-500">
                                Looking to take your team away on a retreat to
                                enjoy awesome food and take in some sunshine? We
                                have a list of places to do just that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>Google Ads</div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const tab = ref(route.query.tab ? route.query.tab : "1");
const q = ref(route.query.q ? route.query.q : null);
const tabs = ref([
    {
        name: "All",
        value: "1",
    },
    { name: "Stay", value: "2" },
    { name: "Restaurant", value: "3" },
]);
</script>