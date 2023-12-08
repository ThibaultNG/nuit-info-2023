<template>
	<v-card style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0)">
		<v-card-title class="text-h3 mt-10" style="display: flex; justify-content: center">
			Earth President
		</v-card-title>

		<v-card-action
			style="
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			"
		>
			<v-btn class="card-btn" color="primary" text="Nouvelle Partie" />
			<v-btn class="card-btn" color="secondary" text="Tutoriel" />
			<v-btn class="card-btn" color="info" text="Succès" />
			<v-btn class="card-btn" color="info" text="Thème" />
		</v-card-action>
	</v-card>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-btn {
	width: 80%;
	height: 50px;
	margin-bottom: 40px;
}
</style>
