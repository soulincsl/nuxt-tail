<template>
    <GoogleMap
        api-key="AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
    >
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
const center = ref({ lat: 17.966715, lng: 102.6123268 });
</script>