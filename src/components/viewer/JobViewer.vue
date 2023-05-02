<template>
	<article class="job-viewer">
		<h2 class="company">{{ jobData.company }}</h2>
		<p class="position">{{ jobData.position }}</p>
		<p class="period">{{ jobData.period }}</p>
		<p class="desc" v-for="(line, index) in splitedDesc" :key="index">
			<span> {{ line }} </span>
		</p>
	</article>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
	jobData: {
		type: [Object, null],
		required: true,
	},
});

const splitedDesc = computed(() => {
	if (!props.jobData) return [];
	else {
		console.log(props.jobData.desc.split('\n'));
		return props.jobData.desc.split('\n');
	}
});
</script>

<style lang="scss" scoped>
.job-viewer {
	margin: 32px;

	.company {
		font-size: 32px;
		font-weight: bold;
	}
	.position,
	.period {
		display: inline-block;
		margin: 16px;
		font-size: 18px;
		color: darkgrey;
	}

	.desc {
		margin-left: 16px;
		span {
			display: block;
			margin-bottom: 4px;
		}
	}
}
</style>
