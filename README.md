# FC DEVOPS DOCKER

[Inicio](#inicio) \
[Desafios](#desafios) \
[Desafios_golang](#golang) \
[Desafios_nodejs](#nodejs) \
[Aulas](#aulas) \
[Docker_healthcheck](#docker-health)

## INICIO

> [!IMPORTANT]
> Após clonar este projeto acesse:

```bash
cd fc-devops-docker
```

## DESAFIOS

> [!IMPORTANT]
> Todos os códigos estão dentro da pasta desafios, leia com atenção os comandos.

#### Golang

[Dockerhub_golang](https://hub.docker.com/repository/docker/lwazevedo/golang-fc/general)

```bash
 # VIA DOCKERFILE
 cd desafios/golang
 docker build -t lwazevedo/golang-fc:prod .
 docker run lwazevedo/golang-fc:prod

# VIA DOCKER COMPOSE
 cd desafios/golang
 docker compose up -d
```

#### NodeJS

```bash
cd desafios/nodejs
docker compose up -d
```

Depois de executar:
[acesse](http://localhost:8080/)

## AULAS

#### DOCKER HEALTH

```bash
 git checkout feat/docker_healthcheck
```

#### NGINX BÁSICO

```bash
cd nginx
docker build -t nginx:basic .
docker run -d --name nginx_basic -p 8080:80 nginx:basic
```

#### LARAVEL BÁSICO

```bash
cd laravel
docker build -t laravel:basic .
docker run -d --name laravel_basic -p 8000:8000 laravel:basic
```

#### LARAVEL + NGINX PROXY REVERSO

```bash

# CRIAR REDE
docker network create laranet

cd laravel
docker build -t laravel:prod . -f Dockerfile.prod
docker run -d --network laranet --name laravel laravel:prod

cd nginx
docker build -t nginx:prod . -f Dockerfile.prod
docker run -d --network laranet --name nginx -p 8080:80 nginx:prod

```

#### DOCKER COMPOSE

```bash


# BUILD
cd docker-compose
docker compose -f docker-compose.build.yaml up -d
#OU
docker compose -f docker-compose.build.yaml up -d --build
# Para execução
docker compose -f docker-compose.build.yaml down


# MYSQL
cd docker-compose
docker compose -f docker-compose.db.yaml up -d
docker compose -f docker-compose.db.yaml down


# MYSQL COM NODE
cd docker-compose
docker compose -f docker-compose.app.yaml up -d
docker compose -f docker-compose.app.yaml down

# LISTA CONTAINERS DO COMPOSE
docker compose ps

# ACESSAR OS CONTAINERS CRIADOS
docker exec -it app bash
docker exec -it db bash

```

#### Comandos úteis

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
