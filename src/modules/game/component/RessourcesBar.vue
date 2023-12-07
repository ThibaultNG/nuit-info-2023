<template>
	<v-container style="display: flex">
		<LevelSlider :title="ressources[0]" />
		<LevelSlider :title="ressources[1]"  />
		<LevelSlider :title="ressources[2]"  />
	</v-container>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import LevelSlider from "./LevelSlider.vue";

const ressources = ["Environnement", "Social", "Economique"];
</script>
