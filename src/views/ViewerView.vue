<template>
	<div class="viewer-view">
		<header>
			<a href="#profile">사람정보</a>
			<a href="#job">경력</a>
			<a href="#works">작품</a>
			<router-link class="admin" to="/login">관리자</router-link>
		</header>
		<main>
			<article id="profile">
				<h1>사람정보</h1>
				<ProfileViewer :profile-data="profileData" />
			</article>

			<article id="job">
				<h1>경력</h1>
				<template v-for="doc in jobData" :key="doc.docid">
					<JobViewer :job-data="doc" />
				</template>
			</article>

			<article id="works">
				<h1>작품</h1>
				<template v-for="doc in worksData" :key="doc.docid">
					<WorksViewer :data="doc" />
				</template>
			</article>
		</main>
		<footer>lee@wonj.in</footer>

		<loading-cover v-if="showLoading"></loading-cover>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import ProfileViewer from '@/components/viewer/ProfileViewer.vue';
import JobViewer from '@/components/viewer/JobViewer.vue';
import WorksViewer from '@/components/viewer/WorksViewer.vue';

import LoadingCover from '@/components/LoadingCover.vue';

import { getCollection } from '@/assets/firebase.js';

// init
const showLoading = ref(true);

const profileData = ref(null);
const jobData = ref(null);
const worksData = ref(null);

async function fetchData() {
	const profile = getCollection('profile').then(res => {
		profileData.value = res[0];
	});
	const job = getCollection('job').then(res => {
		jobData.value = res;
	});
	const works = getCollection('works').then(res => {
		worksData.value = res;
	});

	const promises = [profile, job, works];
	await Promise.all(promises);
	showLoading.value = false;
}

fetchData();
</script>

<style lang="scss" scoped>
.viewer-view {
	header {
		padding: 24px;
		background-color: #000000;

		font-weight: bold;

		a {
			margin: 12px;
			color: white;
			&:hover {
				color: yellow;
			}
		}

		.admin {
			border: 1px solid white;
			padding: 4px;
			border-radius: 4px;
		}
	}

	main {
		h1 {
			// display: inline-block;

			text-align: center;
			padding: 8px;
			margin: 8px;
			font-size: 24px;
			font-weight: bold;
			// border-left: 8px solid #4c4c4c;
			border-bottom: 2px solid #4c4c4c;
			// background-color: #000000;
			// color: white;
		}
	}

	footer {
		height: 352px;
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
			url(@/assets/footerbg.jpg) center;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}
}
</style>
