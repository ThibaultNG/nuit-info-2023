import { RouteItemInfo } from '../router/RouteInfo';
<template>
	<v-navigation-drawer :model-value="modelValue" temporary>
		<v-list v-for="route in routes" :key="route.path">
			<v-list-item :title="(route.name as string)" :to="route.path" />
		</v-list>

		<template #append>
			<div class="text-center w-100">
				{{ new Date().getFullYear() }} — <strong>EPISEN SI ING1 & ING3</strong>
			</div>
		</template>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import routes from "@/router/routes";

defineProps<{
	modelValue: boolean;
}>();

defineEmits<{
	(e: "update:modelValue", value: boolean): void;
}>();
</script>
