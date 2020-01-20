docker stop docker_container_blog_admin || true \
&& docker rm docker_container_blog_admin || true \
&& docker-compose up -d
