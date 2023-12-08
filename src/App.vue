<template>
	<div style="display: flex; justify-content: center; align-items: start">
		<div
			class="bg-background"
			style="
				position: absolute;
				opacity: 0.5;
				min-height: 100vh;
				min-width: 450px;
				max-width: 100vh;
			"
		></div>
		<div style="height: 100vh; min-width: 450px; max-width: 100vh">
			<RouterView />
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
