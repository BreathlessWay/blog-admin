# 使用nginx镜像
FROM nginx:alpine
# 在镜像中新建目录
RUN mkdir -p /usr/share/nginx/blog-admin
# 将构建出来的文件拷贝到镜像中
COPY ./build/ /usr/share/nginx/blog-admin/
# 将nginx的配置文件拷贝到镜像中
COPY ./admin.conf /etc/nginx/conf.d/
# 对外暴露nginx启动的3000端口
EXPOSE 3000
