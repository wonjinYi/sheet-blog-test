<template>
	<div class="login-view">
		<router-link
			to="/"
			style="
				color: red;
				font-size: 48px;
				margin-bottom: 64px;
				font-weight: bold;
				background-color: white;
			"
			>{{ '< 돌아가기' }}
		</router-link>
		<img :src="loginimg" style="max-width: 90%" />

		<h2>아이디 admin@wonj.in / 비밀번호 admin@입니다. 입력돼있습니다.</h2>
		<form @submit.prevent="login">
			<input v-model="loginField.id" type="text" placeholder="아이디" />
			<br />
			<input v-model="loginField.pw" type="password" placeholder="비밀번호" />
			<br />
			<input type="submit" value="로그인" style="width: 100%" />
		</form>

		<button @click="getUser">로그인확인</button>
	</div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { signin, getCurrentUser } from '@/assets/firebase.js';

import loginimg from '@/assets/login.png';

const loginField = ref({
	id: 'admin@wonj.in',
	pw: 'admin@',
});
const user = ref(null);

async function login() {
	user.value = await signin({ ...loginField.value });
	alert('로그인 잘됐음');
	console.log(user.value);
}

function getUser() {
	const currentUser = getCurrentUser();
	console.log(currentUser);
	user.value = currentUser;
}

let router;
onMounted(() => {
	router = useRouter();
	getUser();
});

watchEffect(() => {
	if (user.value) {
		console.log(router);
		router.push('/edit');
	}
});
</script>

<style lang="scss" scoped>
.login-view {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(
		to right,
		red,
		orange,
		yellow,
		green,
		blue,
		indigo,
		purple
	);

	h1 {
		font-size: 32px;
		font-weight: bold;
		padding: 12px;
		border: 1px solid black;
	}
	h2 {
		margin-top: 16px;
		color: white;
		font-size: 18px;
		background-color: black;
	}
	input {
		margin: 16px 0;
	}
}
</style>
