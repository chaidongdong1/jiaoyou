# require.js 模块化开发

- 引入方法

	```html
	<script src="require.js" data-main="js/main"></script>
	```

- 入口文件entry

	```javascript
		require.config({
			baseUrl:'',
			paths:{
				'jquery':'scripts/jquery'
			}
		});
		require(['jquery'],function($){
			//逻辑
		});
	```

- 模块定义

	```javascript
		define(['jquery'],function($){
			return function(){
				console.log('defined a modlues');
			}
		})
	```

- 生产部署

	> 使用r.js压缩合并源码  

	1. 注释原入口文件的require.config配置信息
	2. 建立bundle.js文件
		```javascript
			({
			  baseUrl: '../scripts',
			  paths: {
			    'jquery': '../libarys/jquery.min',
			    'fullpage': '../libarys/jquery.fullpage',
			    'swiper': '../libarys/swiper.jquery.min',
			    'scene': 'scene',
			    'nav': 'nav',
			    'carousel': 'carousel',
			    'data': 'data',
			    'animates': 'animates'
			  },
			  name: 'main', //程序入口文件
			  out: "main-built.js" //出口文件
			})
		```

	3. 运行打包命令

	```shell
	node r.js -o bundle.js
	```

	> 使用r.js合并压缩css文件

	1. 建立bundle.css
		```css
			@import "a.css";
			@import "b.css";
		```

	2. 运行打包命令
		```shell
			# optimizeCss 压缩 standard标准压缩去除空格和换行
			node r.js -o cssIn=bundle.css out=输出文件的路径及文件名称 optimizeCss=standard
		```