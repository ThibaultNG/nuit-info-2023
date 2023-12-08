<template>
	<v-select
		v-model="selectedDisplayedName"
		label="Thème"
		style="width: 80%; max-height: 50px;"
		:items="headerThemeList"
		variant="solo-filled"
	>
		<template #item="{ item }">
			<v-list-item
				:prepend-icon="item.value.icon"
				:title="item.value.displayedName"
				variant="text"
				@click="updateTheme(item.value.id)"
			/>
		</template>
	</v-select>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { ref } from "vue";
import { headerThemeList } from "../config/vuetify/vuetifyThemeHeader";

const theme = useTheme();
let selectedDisplayedName = ref<string>();
let selectedIcon = ref<string>();

updateTheme(theme.global.name.value);

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
