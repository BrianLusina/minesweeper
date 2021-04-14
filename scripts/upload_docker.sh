#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

ID=${DOCKER_ID:-thelusina}
IMAGE=${DOCKER_IMAGE:-minsweeper}
TAG=${DOCKER_TAG:-latest}

dockerpath=${ID}/${IMAGE}:${TAG}

echo "Docker ID and Image: $dockerpath"

docker push "$dockerpath"