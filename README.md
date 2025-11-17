### Hexlet tests and linter status:
[![Actions Status](https://github.com/IamIvanVl/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/IamIvanVl/backend-project-46/actions)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=IamIvanVl_backend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=IamIvanVl_backend-project-46)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=IamIvanVl_backend-project-46&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=IamIvanVl_backend-project-46)


### О проекте
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.


### Инструкция по установке и запуску
* выполните клонирование репозитория с помощью команды **git clone**
* перейдите в корневую директорию проекта с помощью команды **cd ./backend-project-46**
* выполните установку зависимостей с помощью команды **make install** или **npm ci**
* выполните локальную установку пакета с помощью команды **npm link** из корневой директории проекта

### Команды для работы с утилитой
```bash
gendiff [options] <filepath1> <filepath2>
```

### Демонстрация работы gendiff.js c файлами формата JSON
https://asciinema.org/a/nUzeFhI8i5AYoEv18Oyq8jalm

### Демонстрация работы gendiff.js c файлами формата YAML
https://asciinema.org/a/wPCqXDKuEKbDlmmuIWr0jUvnA