<template>
	<div class="profile-viewer">
		<template v-if="!profileData">
			<span>불러오는중</span>
		</template>
		<template v-else>
			<img :src="profileData.imgUrl[0]" />
			<article>
				<p class="name">{{ profileData.name }}</p>
				<p class="copy">"{{ profileData.copy }}"</p>
				<p class="job">{{ profileData.job }}</p>
				<p class="contact-email">{{ profileData.email }}</p>
				<p class="contact-phone">{{ profileData.phone }}</p>
				<p class="desc" v-for="(line, index) in splitedDesc" :key="index">
					<span> {{ line }} </span>
				</p>
			</article>
		</template>
	</div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
	profileData: {
		type: [Object, null],
		required: true,
		default: null,
	},
});

const splitedDesc = computed(() => {
	if (!props.profileData) return [];
	else {
		console.log(props.profileData.desc.split('\n'));
		return props.profileData.desc.split('\n');
	}
});
</script>

<style lang="scss" scoped>
.profile-viewer {
	display: flex;
	align-items: center;
	margin: 32px;
	img {
		height: 300px;
		width: auto;
		border-radius: 50%;
	}
	article {
		padding: 32px;
		p {
			margin: 16px;
		}
		.name {
			font-size: 48px;
		}
		.copy {
			font-size: 32px;
			color: grey;
		}
	}
}

@media (max-width: 768px) {
	.profile-viewer {
		flex-direction: column;
		margin: 16px;
	}
}
</style>
