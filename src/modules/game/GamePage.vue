<template>
	<RessourcesBar />
	<v-container style="display: flex; justify-content: center; align-items: start">
		<MainCard />
	</v-container>
</template>

<script setup lang="ts">
import MainCard from "@/modules/game/component/MainCard.vue";
import RessourcesBar from "@/modules/game/component/RessourcesBar.vue";
</script>
