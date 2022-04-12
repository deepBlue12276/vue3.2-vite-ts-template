import { defineConfig, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command, mode }) => {
	//base:公共基础路径
	const root = process.cwd();
	return {
		base: loadEnv(mode, root).VITE_PUBLIC_PATH,
		//root:选项配置index.html 文件所在的位置,默认为:process.cwd()---即项目根目录
		root,
		//plugins:需要用到的插件,类型是array
		plugins: [vue()],
		server: {
			host: "0.0.0.0",
		},
	};
});
