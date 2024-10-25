# fc-devops-docker

## Run NGINX básico (Linux/MacOS)

```bash
cd nginx
docker build -t nginx:basic .
docker run -d -p 8080:80 nginx:basic
```
