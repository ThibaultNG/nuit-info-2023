<template>
	<div style="display: flex" class="mb-2 mt-10">
		<LevelSlider :title="ressources[0]" :value="gameStore.ecology" />
		<LevelSlider :title="ressources[1]" :value="gameStore.social"/>
		<LevelSlider :title="ressources[2]" :value="gameStore.economy"/>
	</div>
</template>

<script setup lang="ts">
import LevelSlider from "./LevelSlider.vue";
import { useGameStore } from '../store/gameStore';

const gameStore = useGameStore();

const ressources = ["ENV", "SOC", "ECO"];
</script>
