<template>
	<div class="loading-cover">
		<p>불 러 오 는 중</p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loading-cover {
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgb(0, 0, 0, 0.8);

	display: flex;
	justify-content: center;
	align-items: center;
	p {
		color: white;
		font-size: 64px;
	}
}
</style>
