<template>
	<div class="profile-editor">
		<template v-if="!formdata">
			<span>불러오는중</span>
		</template>
		<template v-else>
			<p>(순서 : {{ formdata.order }})</p>
			<div class="img-container">
				<img :src="data.imgUrl[0]" />
				<span>사진 삭제/변경/추가 기능 생략</span>
				<!-- <button class="remove-img-btn">사진삭제</button>
				<input type="file" class="update-img-btn" /> -->
			</div>
			<section>
				<label>
					이름 <input v-model="formdata.name" type="text" class="name" />
				</label>
				<label>
					한 줄 소개 <input v-model="formdata.copy" type="text" class="copy" />
				</label>
				<label>
					직업 <input v-model="formdata.job" type="text" class="job" />
				</label>
				<label>
					이메일
					<input v-model="formdata.email" type="text" class="contact-email" />
				</label>
				<label>
					전화번호
					<input v-model="formdata.phone" type="text" class="contact-phone" />
				</label>
				<label>
					긴 소개
					<textarea v-model="formdata.desc" class="description" />
				</label>
			</section>
			<section class="submit-container">
				<button class="remove-doc-btn" @click="handleRemoveDoc">
					삭제하기
				</button>
				<button class="update-doc-btn" @click="handleUpdateDoc">
					변경내용 적용
				</button>
			</section>
		</template>
	</div>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue';
import { updateDoc, getCurrentUser } from '@/assets/firebase.js';
const props = defineProps({
	data: {
		type: [Object, null],
		required: true,
	},
});
const reactiveProps = toRefs(props);

// init
const formdata = ref(null);
watch(reactiveProps.data, newVal => {
	formdata.value = newVal;
});

// function
async function handleRemoveDoc() {
	if (!confirm('진짜 삭제?')) {
		return;
	} else {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			alert('로그인정보가 없습니다. 삭제 실패.');
			return;
		}

		// const res = await removeDoc('profile', props.data.docid);
		// console.log(res);
		alert('하나라서 삭제못하게 막았음');
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

		const res = await updateDoc('profile', props.data.docid, {
			img: formdata.value.img,
			name: formdata.value.name,
			copy: formdata.value.copy,
			job: formdata.value.job,
			email: formdata.value.email,
			phone: formdata.value.phone,
			desc: formdata.value.desc,
			order: formdata.value.order,
		});
		console.log(res);
	}
}
</script>

<style lang="scss" scoped>
.profile-editor {
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

	.img-container {
		display: inline-block;
		padding: 12px;
		margin-top: 4px;
		border: 1px solid black;
		background-color: rgb(255, 237, 192);
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
