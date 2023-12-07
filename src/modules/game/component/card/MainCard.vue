<template>
	<v-card class="bg-dark" style="width: 500px;">
		<FlippingCard />
		<v-container style="display: flex; flex-direction: column">
			<v-btn
				variant="outlined"
				text="Droite"
				style="width: 100%"
				class="mb-2"
				@click="console.log('Droite')"
			></v-btn>
			<v-btn
				variant="outlined"
				text="Gauche"
				style="width: 100%"
				@click="console.log('Gauche')"
			></v-btn>
		</v-container>
	</v-card>
</template>

<script setup lang="ts">
import FlippingCard from "./FlippingCard.vue";
</script>
