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
2. inject的组件，可以先`as unknow`，再`as PropType`导出
