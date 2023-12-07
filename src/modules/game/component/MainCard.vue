<template>
	<v-card class="bg-dark" style="max-width: 500px">
		<v-img
			src="/cards/sheep.png"
			alt="A sheep"
			style="width: 100%; height: auto; object-fit: contain"
		/>
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

<script setup lang="ts"></script>
