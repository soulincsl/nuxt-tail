<template>
    <div class="container m-auto">
        <div class="grid">
            <h1>Hello world</h1>
        </div>
        <section class="mb-16 relative">
            <div class="relative z-10">
                <div class="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
                    <div class="flex-none min-w-full px-4 sm:px-6">
                        <ul
                            class="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5"
                        >
                            <li>
                                <h2>
                                    <a
                                        class="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-blue-500 border-current"
                                        href="/docs/installation"
                                        >Tailwind CLI</a
                                    >
                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <a
                                        class="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700"
                                        href="/docs/installation/"
                                        >Using PostCSS</a
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
                <h3 class="sr-only">Installing Tailwind CLI</h3>
                <p>
                    The simplest and fastest way to get up and running with
                    Tailwind CSS from scratch is with the Tailwind CLI tool. The
                    CLI is also available as a
                    <a href="/blog/standalone-cli">standalone executable</a> if
                    you want to use it without installing Node.js.
                </p>
            </div>
        </section>
    </div>
</template>