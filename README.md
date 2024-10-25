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

## Run Laravel com nginx fazendo proxy reverso

### Crie um rede interna

```bash

docker network create laranet

```

### Crie e rode a imagem laravel

```bash

cd laravel
docker build -t laravel:prod . -f Dockerfile.prod
docker run -d --network laranet --name laravel laravel:prod

```

### Crie e rode a imagem nginx

```bash

cd nginx
docker build -t nginx:prod . -f Dockerfile.prod
docker run -d --network laranet --name nginx -p 8080:80 nginx:prod

```

### Comandos úteis

```bash

# Verificar containers em execução.
docker ps

# Verificar containers existentes.
docker ps -a

# Verificar logs da um container
docker logs nginx

# Lista as imagens
docker images

# Para todos os containers que estão em execução.
docker stop $(docker ps -a -q)

# Remove todos os containers.
docker rm $(docker ps -a -q)

# Remove todas as imagens.
docker rmi $(docker images -q)
```

## Rodando as imagens com docker-compose

```bash

# Com imagem já existente
cd docker-compose
docker-compose up -d


# Build de imagem
cd docker-compose
docker-compose -f docker-compose.build.yaml up -d

# Para execução
docker-compose down
```
