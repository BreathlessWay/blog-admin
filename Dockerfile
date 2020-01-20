FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/blog-admin

COPY . /usr/share/nginx/blog-admin/

COPY admin.conf /etc/nginx/conf.d/

EXPOSE 3000
