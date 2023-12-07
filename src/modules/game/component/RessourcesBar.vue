<template>
	<v-container style="display: flex">
		<LevelSlider title="Environnement" />
		<LevelSlider title="Social" />
		<LevelSlider title="Economie" />
	</v-container>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import LevelSlider from "./LevelSlider.vue";

const ressources = ["Environnement", "Social", "Economique"];
</script>
