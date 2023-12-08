<template>
	<div class="container">
		<div class="card-container">
			<div class="card" :class="{ 'is-flipped': isFlipped }">
				<div class="card-face card-face-front">
					<v-img src="/cards/teacher.png" alt="Front Image" class="card-image" />
				</div>
				<div class="card-face card-face-back">
					<v-img src="/cards/bank.png" alt="Back Image" class="card-image" />
				</div>
			</div>
			<v-btn
				variant="elevated"
                color="info"
				icon="mdi-refresh"
				style="position: absolute; bottom: 0px; right: 0px"
				@click="flipCard"
			></v-btn>
		</div>
	</div>
</template>


<script setup lang="ts">
import { ref } from "vue";

const isFlipped = ref(false);

const flipCard = () => {
	isFlipped.value = !isFlipped.value;
};
</script>
<style scoped>
.container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card-container {
	perspective: 1000px;
	width: 100%;
}

.card {
	width: 100%;
	aspect-ratio: 1; /* Maintain a 1:1 aspect ratio */
	transform-style: preserve-3d;
	transition: transform 0.5s;
}

.card.is-flipped {
	transform: rotateY(180deg);
}

.card-face {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
}

.card-image {
	width: 100%;
	height: 100%;
	object-fit: cover; /* Maintain aspect ratio without stretching */
}

.card-face-front {
	transform: rotateY(0deg);
}

.card-face-back {
	transform: rotateY(180deg);
}
</style>
