FROM nginx:alpine

COPY ./build/ /usr/share/nginx/blog-admin/

COPY admin.conf /etc/nginx/conf.d/

EXPOSE 3000
