# Create python virtualenv & source it
setup-hadolint:
	wget -O ./bin/hadolint https://github.com/hadolint/hadolint/releases/download/v1.16.3/hadolint-Linux-x86_64
	chmod +x ./bin/hadolint

install:
	yarn install

start:
	yarn start

test:
	yarn test

test-coverage:
	yarn test:coverage

# See local hadolint install instructions: https://github.com/hadolint/hadolint
# This is linter for Dockerfiles
lint-docker:
	./bin/hadolint Dockerfile

# Python source code linter: https://www.pylint.org/
# This should be run from inside a virtualenv
lint:
	yarn lint

build:
	yarn build

build-docker:
	./scripts/build_docker.sh

push-docker:
	./scripts/upload_docker.sh

# See https://circleci.com/docs/2.0/local-cli/#processing-a-config
validate-circleci:
	circleci config validate

# See https://circleci.com/docs/2.0/local-cli/#processing-a-config
process-circleci:
	circleci config process .circleci/config.yml

all: install lint lint-docker test