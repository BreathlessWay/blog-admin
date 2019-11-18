### 博客管理后台

1. typescript的alias要先配置`baseUrl`:
    ```
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
    ```
2. 路由鉴权，通过`Redirect`组件跳登陆页面，不要通过命令式
