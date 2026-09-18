// @ts-check
import { defineConfig } from 'astro/config';

// 说明：
// 1) site 已是你的用户页地址：https://donggang23.github.io
// 2) 仓库名必须是 donggang23.github.io（用户页仓库），否则地址会不一样
export default defineConfig({
  site: 'https://donggang23.github.io',
  trailingSlash: 'ignore',
});
