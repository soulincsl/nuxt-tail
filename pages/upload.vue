<template>
    <div>
        <form @submit.prevent="onSubmit">
            <input type="file" />
        </form>
    </div>
</template>
<script>
const fileInput = ref();
const onSubmit = () => {};
</script>