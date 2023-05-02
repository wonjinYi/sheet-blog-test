import { createRouter, createWebHistory } from 'vue-router';

// 뷰 불러오기 ------------------------------------
import NotFoundView from '@/views/NotFoundView.vue';
import ViewerView from '@/views/ViewerView.vue';
import EditorView from '@/views/EditorView.vue';
import LoginView from '@/views/LoginView.vue';

// 라우터 설정 ------------------------------------
const routes = [
	// 공통 뷰
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/',
		name: 'Viewer',
		component: ViewerView,
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginView,
	},
	{
		path: '/edit',
		name: 'Editor',
		component: EditorView,
	},
];

// 라우터 객체 생성
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
