<template>
	<div class="not-found-view">
		<h1>NOT FOUND 404</h1>
		<p>여기는 아무것도 없습니다.</p>
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
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.not-found-view {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1,
	p {
		font-size: 24px;
	}
}
</style>
