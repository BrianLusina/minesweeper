#!/usr/bin/env bash

./build_docker.sh

docker images

# shellcheck disable=SC2086
docker run -p 8080:80 --name=minesweeper ${REGISTRY}/"${IMAGE}":"${TAG}"