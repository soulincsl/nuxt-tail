<template>
    <div>
        <div class="container m-auto px-2">
            <form @submit.prevent="postData">
                <input
                    type="file"
                    @change="(e) => (file = e.target.files[0])"
                />
                <button type="submit">Test</button>
            </form>
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 my-20">
                <div class="sm:col-start-2 sm:col-span-10">
                    <div>
                        <h2>Where you want to go?</h2>
                    </div>
                    <form
                        class="group relative my-2"
                        @submit.prevent="onSearch"
                    >
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
                            v-model="searchModel"
                            class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                            type="text"
                            aria-label="Search filter"
                            placeholder="Search a place..."
                        />
                    </form>
                </div>
            </div>
        </div>

        <section class="container m-auto mt-5 mb-10">
            <h2 class="text-3xl font-bold header-200">Top Destination</h2>
            <div class="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
                <div
                    v-for="n in 10"
                    :key="n"
                    class="mt-5 md:hover:shadow-md md:hover:scale-105 transition duration-150"
                >
                    <div>
                        <a href="/detail" class="w-full block">
                            <div class="relative">
                                <img
                                    class="w-full"
                                    src="https://dummyimage.com/600x400/000/fff"
                                    alt='The series host, Jiliane, photoshopped on a blue background that reads, "Code art with me". '
                                    loading="lazy"
                                />
                            </div>
                        </a>
                        <a class="inline-block text-xs mt-4 uppercase" href="/">
                            Stay
                        </a>
                        <a
                            class="block w-full text-lg font-semibold leading-tight mt-2"
                            href="/"
                            >Luangprabang {{ n }}</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <section class="container m-auto mt-10 mb-10">
            <h2 class="text-3xl font-bold header-200">
                Recommended places to stay for your next trip!
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
                <div
                    v-for="n in 10"
                    :key="n"
                    class="mt-5 hover:shadow-md hover:scale-105 transition duration-150"
                >
                    <div>
                        <a href="/detail" class="w-full block">
                            <div class="relative">
                                <img
                                    class="w-full"
                                    src="https://dummyimage.com/600x400/000/fff"
                                    alt='The series host, Jiliane, photoshopped on a blue background that reads, "Code art with me". '
                                    loading="lazy"
                                />
                            </div>
                        </a>
                        <a class="inline-block text-xs mt-4 uppercase" href="/">
                            Stay
                        </a>
                        <a
                            class="block w-full text-lg font-semibold leading-tight mt-2"
                            href="/"
                            >Luangprabang {{ n }}</a
                        >
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
const router = useRouter();
const searchModel = ref();
const file = ref();

const onSearch = () => {
    router.push({
        path: "/search",
        query: {
            q: searchModel.value,
        },
    });
};
const postData = () => {
    const formData = new FormData();
    console.log("postData", file.value);
    formData.append("file", file.value);
    const data = $fetch("http://192.168.40.124:3001/api/user", {
        method: "POST",
        // headers: {
        //     "content-type": "multipart/form-data",
        // },
        body: formData,
    });
    console.log("data:", data);
};
</script>