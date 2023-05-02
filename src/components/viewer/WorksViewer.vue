<template>
	<article class="works-viewer">
		<h2 class="title">{{ data.title }}</h2>
		<p class="period">{{ data.period }}</p>
		<p class="matirial">{{ data.matirial }}</p>
		<p class="desc" v-for="(line, index) in splitedDesc" :key="index">
			<span> {{ line }} </span>
		</p>
		<div class="imgs">
			<img
				v-for="(url, index) in data.imgUrl"
				:key="index"
				:src="url"
				alt="works description"
			/>
		</div>
	</article>
</template>

<script setup>
import { computed, watchEffect } from 'vue';
const props = defineProps({
	data: {
		type: [Object, null],
		required: true,
	},
});

const splitedDesc = computed(() => {
	if (!props.data) return [];
	else {
		// console.log(props.data.desc.split('\n'));
		return props.data.desc.split('\n');
	}
});

watchEffect(() => {
	console.log(props.data);
});
</script>

<style lang="scss" scoped>
.works-viewer {
	margin: 32px;

	.title {
		font-size: 32px;
		font-weight: bold;
	}
	.matirial,
	.period {
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

	img {
		max-width: 512px;
		margin: 18px 12px;
		border-radius: 12px;
		box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.25);

		&:hover {
			animation-name: spin;
			animation-duration: 100ms;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
		}
	}
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@media (max-width: 768px) {
	.works-viewer {
		img {
			width: 90%;
		}
	}
}
</style>
