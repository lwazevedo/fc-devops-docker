# fc-devops-docker

## Run NGINX básico (Linux/MacOS)

```bash
cd nginx
docker build -t nginx:basic .
docker run -d --name nginx_basic -p 8080:80 nginx:basic
```

## Run Laravel básico (Linux/MacOS)

```bash
cd laravel
docker build -t laravel:basic .
docker run -d --name laravel_basic -p 8000:8000 laravel:basic
```
