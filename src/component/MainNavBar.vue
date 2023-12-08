import { RouteItemInfo } from '../router/RouteInfo';
<template>
	<v-navigation-drawer :model-value="modelValue" temporary>
		<v-list v-for="route in routes" :key="route.path">
			<v-list-item :title="(route.name as string)" :to="route.path" />
		</v-list>

		<v-select
			v-model="selectedDisplayedName"
			class="selectSize"
			label="Theme"
			:items="headerThemeList"
			variant="outlined"
		>
			<template #item="{ item }">
				<ChangeThemeSelectOption
					:id="item.value.id"
					:displayed-name="item.value.displayedName"
					:icon="item.value.icon"
					@clicked="(id: string) => updateTheme(id)"
				>
				</ChangeThemeSelectOption>
			</template>
		</v-select>

		<template #append>
			<div class="text-center w-100">
				{{ new Date().getFullYear() }} — <strong>EPISEN SI ING1 & ING3</strong>
			</div>
		</template>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import routes from "@/router/routes";
import ChangeThemeSelectOption from "@/component/ChangeThemeSelectOption.vue";
import { useTheme } from "vuetify";
import { ref } from "vue";
import { headerThemeList } from "../config/vuetify/vuetifyThemeHeader";

const emits = defineEmits<{
	(e: "update:modelValue", value: boolean): void;
	(e: "clicked", value: boolean): void;
}>();

const props = defineProps<{
	id: {
		type: String;
		default: "";
	};
	displayedName: {
		type: String;
		default: "";
	};
	icon: {
		type: String;
		default: "";
	};
	modelValue: boolean;
}>();

const theme = useTheme();
let selectedDisplayedName = ref<string>();
let selectedIcon = ref<string>();

updateTheme(theme.global.name.value); //first render

function updateTheme(id: string): void {
	theme.global.name.value = id;

	for (let index: number = 0; index < headerThemeList.length; index++) {
		if (headerThemeList[index].id == theme.global.name.value) {
			selectedDisplayedName.value = headerThemeList[index].displayedName;
			selectedIcon.value = headerThemeList[index].icon;
		}
	}
}
</script>
