<template>
	<div style="display: flex" class="mb-2 mt-10">
		<LevelSlider :title="ressources[0]" />
		<LevelSlider :title="ressources[1]" />
		<LevelSlider :title="ressources[2]" />
	</div>
</template>

<script setup lang="ts">
import LevelSlider from "./LevelSlider.vue";

const ressources = ["ENV", "SOC", "ECO"];
</script>
