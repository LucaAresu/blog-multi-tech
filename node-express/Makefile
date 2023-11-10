args=$(filter-out $@,$(MAKECMDGOALS))

.PHONY: start

DOCKER_COMPOSE=docker-compose --file docker/docker-compose.yaml
MAIN_CONTAINER=node
EXEC_MAIN=$(DOCKER_COMPOSE) exec -it $(MAIN_CONTAINER)


build:
	$(DOCKER_COMPOSE) build --no-cache
start:
	$(DOCKER_COMPOSE) up -d
stop:
	$(DOCKER_COMPOSE) down --remove-orphans
logs:
	$(DOCKER_COMPOSE) logs --follow $(MAIN_CONTAINER)

enter:
	$(EXEC_MAIN) /bin/sh

npm:
	$(EXEC_MAIN) npm $$arg

eslint:
	$(EXEC_MAIN) npx eslint .
fix:
	$(EXEC_MAIN) npx eslint . --fix

test:
	${EXEC_MAIN} npm test
