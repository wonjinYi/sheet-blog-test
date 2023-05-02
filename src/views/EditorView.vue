<template>
	<div class="editor-view">
		<button @click="logout" style="font-size: 32px">
			로그아웃하고 처음으로
		</button>
		<img :src="adminimg" style="max-width: 90%" />

		<main>
			<article id="profile">
				<h1>사람정보</h1>
				<ProfileEditor :data="profileData" />
			</article>

			<article id="job">
				<h1>경력</h1>
				<template v-for="doc in jobData" :key="doc.docid">
					<JobEditor
						:data="doc"
						:mode="doc.docid ? 'update' : 'create'"
						@job-removed="handleNewJobRemoved"
						@job-created="handleNewJobCreated"
					/>
				</template>
				<button
					@click="handleCreateEmptyJobCard"
					style="font-size: 24px; width: 256px"
				>
					새로운 경력 추가
				</button>
			</article>

			<article id="works">
				<h1>작품</h1>
				구현 생략
				<!-- <template v-for="doc in worksData" :key="doc.docid">
					<WorksEditor :data="doc" />
				</template> -->
			</article>
		</main>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signout } from '@/assets/firebase.js';
import adminimg from '@/assets/admin.png';

import ProfileEditor from '@/components/editor/ProfileEditor.vue';
import JobEditor from '@/components/editor/JobEditor.vue';
// import WorksEditor from '@/components/editor/WorksEditor.vue';

// logout
const router = useRouter();
async function logout() {
	const res = await signout();
	if (res) {
		alert('로그아웃되었습니다.');
		router.push('/');
	} else {
		alert('엥 뭔가이상함');
	}
}

// rendering
import { getCollection } from '@/assets/firebase.js';

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
}

// init
fetchData();

// new card
function handleCreateEmptyJobCard() {
	const obj = {
		docid: null,
		company: '',
		position: '',
		period: '',
		desc: '',
		order: jobData.value[jobData.value.length - 1].order + 1,
	};
	console.log(obj);
	jobData.value.push(obj);
}

function handleNewJobRemoved(order) {
	for (let i = 0; i < jobData.value.length; i++) {
		if (jobData.value[i].order === order) {
			jobData.value.splice(i, 1);
			break;
		}
	}
}
function handleNewJobCreated(order, doc) {
	for (let i = 0; i < jobData.value.length; i++) {
		if (jobData.value[i].order === order) {
			jobData.value[i] = doc;
			break;
		}
	}
}
</script>

<style lang="scss" scoped>
.editor-view {
	main {
		article {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			h1 {
				width: 90%;
				text-align: center;
				padding: 8px;
				margin: 8px;
				font-size: 24px;
				font-weight: bold;
				border-bottom: 2px solid #4c4c4c;
				margin-top: 32px;
			}
		}
	}
	padding-bottom: 256px;
}
</style>
