FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/blog-admin/gi

COPY ./build/ /usr/share/nginx/blog-admin/

COPY admin.conf /etc/nginx/conf.d/

EXPOSE 3000
