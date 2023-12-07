import { RouteItemInfo } from '../router/RouteInfo';
<template>
	<v-navigation-drawer :model-value="modelValue">
		<v-list v-for="route in routes" :key="route.path">
            <v-list-item :title="route.name" :to="route.path">
            </v-list-item>
         


        </v-list>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router';
import routes from '@/router/routes';

const props = defineProps<{
	modelValue: boolean;
}>();

const emit = defineEmits<{
	(e: "update:modelValue", value: boolean): void;
}>();
</script>
