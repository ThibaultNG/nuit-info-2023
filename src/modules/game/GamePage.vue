<template>
	<RessourcesBar />
	<div
		v-if="gameStore.currentCard"
		style="display: flex; justify-content: center; align-items: start"
	>
		<MainCard />
	</div>
</template>

<script setup lang="ts">
import MainCard from "@/modules/game/component/card/MainCard.vue";
import RessourcesBar from "@/modules/game/component/RessourcesBar.vue";
import { useGameStore } from "./store/gameStore";

const gameStore = useGameStore();
</script>
