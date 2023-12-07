<template>
	<v-card class="bg-dark" style="width: 500px">
		<FlippingCard />
		<v-container style="display: flex; flex-direction: column">
			<ChoiceButton choice-text="Droite" description="Hello world" />
			<ChoiceButton choice-text="Gauche" description="Noooo" />
		</v-container>
	</v-card>
</template>

<script setup lang="ts">
import ChoiceButton from "../ChoiceButton.vue";
import FlippingCard from "./FlippingCard.vue";
</script>
