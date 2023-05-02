<template>
	<div class="job-editor">
		<template v-if="!formdata">
			<span>불러오는중</span>
		</template>
		<template v-else>
			<section>
				<p>(순서 : {{ formdata.order }})</p>
				<label>
					근무처
					<input v-model="formdata.company" type="text" class="company" />
				</label>
				<label>
					직무
					<input v-model="formdata.position" type="text" class="position" />
				</label>
				<label>
					근무기간
					<input v-model="formdata.period" type="text" class="period" />
				</label>
				<label>
					세부내용
					<textarea v-model="formdata.desc" class="description" />
				</label>
			</section>
			<section class="submit-container">
				<template v-if="mode === 'update'">
					<button class="remove-doc-btn" @click="handleRemoveDoc">
						삭제하기
					</button>
					<button class="update-doc-btn" @click="handleUpdateDoc">
						변경내용 적용
					</button>
				</template>
				<template v-else-if="mode === 'create'">
					<button class="create-doc-btn" @click="handleCreateDoc">
						만들기
					</button>
				</template>
			</section>
		</template>
	</div>
</template>

<script setup>
import { ref, watch, toRefs, onMounted } from 'vue';
import {
	updateDoc,
	removeDoc,
	createDoc,
	getDocByRef,
	getCurrentUser,
} from '@/assets/firebase.js';

const emit = defineEmits(['job-created', 'job-removed']);
const props = defineProps({
	data: {
		type: [Object, null],
		required: true,
	},
	mode: {
		type: String,
		required: false,
		default: 'update',
	},
});

const reactiveProps = toRefs(props);
const formdata = ref(null);
onMounted(() => {
	console.log(reactiveProps.data.value);
	formdata.value = reactiveProps.data.value;
});
watch(reactiveProps.data, newVal => {
	console.log(newVal);
	formdata.value = newVal;
});

// handlers
async function handleRemoveDoc() {
	if (!confirm('진짜 삭제?')) {
		return;
	} else {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			alert('로그인정보가 없습니다. 삭제 실패.');
			return;
		}

		const res = await removeDoc('job', props.data.docid);
		console.log(res);
		emit('job-removed', formdata.value.order);
	}
}

async function handleUpdateDoc() {
	if (!confirm('진짜 변경내용 적용?')) {
		return;
	} else {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			alert('로그인정보가 없습니다. 변경 실패.');
			return;
		}

		const res = await updateDoc('job', props.data.docid, {
			company: formdata.value.company,
			position: formdata.value.position,
			period: formdata.value.period,
			desc: formdata.value.desc,
			order: formdata.value.order,
		});
		console.log(res);
	}
}

async function handleCreateDoc() {
	if (!confirm('진짜 생성?')) {
		return;
	} else {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			alert('로그인정보가 없습니다. 생성 실패.');
			return;
		}

		const res = await createDoc('job', {
			company: formdata.value.company,
			position: formdata.value.position,
			period: formdata.value.period,
			desc: formdata.value.desc,
			order: formdata.value.order,
		});
		console.log('생성', res);
		const doc = await getDocByRef('job', res);

		emit('job-created', formdata.value.order, doc);
	}
}
</script>

<style lang="scss" scoped>
.job-editor {
	display: inline-block;
	min-width: 60%;
	margin: 12px;
	padding: 12px;
	border: 1px solid black;
	border-radius: 12px;
	background-color: rgb(237, 237, 237);
	text-align: center;
	img {
		width: 64px;
	}

	label {
		display: block;
		margin-top: 4px;
	}
	input,
	textarea {
		width: 256px;
	}

	.submit-container {
		display: inline-block;
		padding: 12px;
		margin-top: 4px;
		border: 1px solid black;
		background-color: rgb(255, 237, 192);
		button {
			margin: 4px;
			font-size: 16px;
		}
	}
}
</style>
