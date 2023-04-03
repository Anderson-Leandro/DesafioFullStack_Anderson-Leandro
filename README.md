## Available Scripts

In the project directory, you can run:

No diretório do projeto, rodar:

### `yarn`

Instala dependencias do projeto

### `yarn dev`

Roda o app em modo de desenvolvimento.\

### `POST /users`

Cria um novo usuario

```json

Request

{
    "name": "user 1",
    "email": "user1@mail.com",
    "password": "12345678",
    "phoneNumber": "11954545454"
}
```

```json
Response

Status - 201 Created

{
    "name": "user 1",
    "email": "user1@mail.com",
    "phoneNumber": "11954545454",
    "id": "697b15e7-6184-4405-a784-ef2e6fd6b929",
    "createdAt": "2023-03-27T03:05:01.269Z"
}
```

### `GET /users`

Rota para listagem de todos os usuários junto de seus contatos

Necessário autenticação

```json
Response
Status - 200 OK
{
	[
		{
			"name": "meu teste",
			"email": "teste6@mail.com",
			"phoneNumber": "11954545454",
			"id": "d0276630-bf93-4690-b245-21fe0742eda6",
			"createdAt": "2023-03-24T00:42:45.046Z",
			"contacts": [
				{
					"id": "752c7a5b-1964-4b14-bba5-56db8c276be0",
					"name": "contato do meu teste",
					"email": "contato2@mail.com",
					"phoneNumber": "11954545454",
					"createdAt": "2023-03-26T22:01:19.694Z"
				}
			]
		},
		{
			"name": "batatinha",
			"email": "batatinha@mail.com",
			"phoneNumber": "11954545454",
			"id": "7c3f1ebe-6de5-46c2-8a0f-ba15969ebad1",
			"createdAt": "2023-03-26T17:23:59.495Z",
			"contacts": [
				{
					"id": "f97c741c-eb2c-4bbd-94e7-f7afeed03d4b",
					"name": "meu contato",
					"email": "contato@mail.com",
					"phoneNumber": "11954545454",
					"createdAt": "2023-03-26T20:28:50.988Z"
				}
			]
		}
	]
}
```

### `GET /users/id`

Rota para listagem de um usuário e seus contatos, necessária autenticação e envio do id de usuário como parâmetro da rota

```json
Response
Status - 200 OK
{
	"name": "meu teste",
	"email": "teste6@mail.com",
	"phoneNumber": "11954545454",
	"id": "d0276630-bf93-4690-b245-21fe0742eda6",
	"createdAt": "2023-03-24T00:42:45.046Z",
	"contacts": [
		{
			"id": "752c7a5b-1964-4b14-bba5-56db8c276be0",
			"name": "contato do meu teste",
			"email": "contato2@mail.com",
			"phoneNumber": "11954545454",
			"createdAt": "2023-03-26T22:01:19.694Z"
		}
	]
}

```

### `PATCH /users/id`

Rota para update de um usuário, necessária autenticação e envio do id de usuário como parâmetro da rota, somente o usuário pode editar seus dados.

```json
Request
{
	"name": "meu teste",
	"email": "teste6@mail.com",
	"phoneNumber": "11954545454",
	"password": "minhasenha"
}

```

```json
Response
Status - 200 OK
{
	"name": "meu teste",
	"email": "teste6@mail.com",
	"phoneNumber": "11954545454",
	"id": "d0276630-bf93-4690-b245-21fe0742eda6",
	"createdAt": "2023-03-24T00:42:45.046Z"
}

```

### `DELETE /users/id`

Rota para exclusão de um usuário, necessária autenticação e envio do id de usuário como parâmetro da rota, somente o usuário pode excluir seus dados.

```json
Response
Status - 204 No Content

No body returned for response

```

### -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### `POST /contacts`

Rota para criação de um novo contato, autenticação necessária

```json
Request
{
	"name": "novo contato",
	"email": "novocontato@mail.com",
	"phoneNumber": "11954545454"
}
```

```json
Response
Status - 201 Created
{
	"name": "novo contato",
	"email": "novocontato@mail.com",
	"phoneNumber": "11954545454",
	"id": "a5d0e2c4-d64f-47e3-9920-1cdc5514e7a8",
	"createdAt": "2023-03-27T02:25:50.072Z",
	"user": {
		"name": "meu teste",
		"email": "teste6@mail.com",
		"phoneNumber": "11954545454",
		"id": "d0276630-bf93-4690-b245-21fe0742eda6",
		"createdAt": "2023-03-24T00:42:45.046Z"
	}
}
```

### `GET /contacts`

Rota para listagem de todos os contatos do usuario, incluindo o usuário que os cadastrou, autenticação necessária

```json
Response
Status - 200 OK
[
	{
		"name": "meu contato",
		"email": "contato@mail.com",
		"phoneNumber": "11954545454",
		"id": "f97c741c-eb2c-4bbd-94e7-f7afeed03d4b",
		"createdAt": "2023-03-26T20:28:50.988Z",
		"user": {
			"name": "batatinha",
			"email": "batatinha@mail.com",
			"phoneNumber": "11954545454",
			"id": "7c3f1ebe-6de5-46c2-8a0f-ba15969ebad1",
			"createdAt": "2023-03-26T17:23:59.495Z"
		}
	},
	{
		"name": "meu contato atualizado 2",
		"email": "contato2@mail.com",
		"phoneNumber": "11954545454",
		"id": "752c7a5b-1964-4b14-bba5-56db8c276be0",
		"createdAt": "2023-03-26T22:01:19.694Z",
		"user": {
			"name": "batatinha",
			"email": "batatinha@mail.com",
			"phoneNumber": "11954545454",
			"id": "7c3f1ebe-6de5-46c2-8a0f-ba15969ebad1",
			"createdAt": "2023-03-26T17:23:59.495Z"
		}
	}
]
```

### `GET /contacts/id`

Rota para listagem de um contato, necessária autenticação e envio do id do contato como parâmetro da rota, somente o usuário pode listar seus contatos.

```json
Response
Status - 200 OK
{
	"name": "contato do meu teste",
	"email": "contato2@mail.com",
	"phoneNumber": "11954545454",
	"id": "752c7a5b-1964-4b14-bba5-56db8c276be0",
	"createdAt": "2023-03-26T22:01:19.694Z"
}
```

### `PATCH /contacts/id`

Rota para atualização de um contato, necessária autenticação e envio do id do contato como parâmetro da rota, somente o usuário pode atualizar seus contatos.

```json
Request
{
	"name": "contato atualizado",
	"email": "contato2@mail.com",
	"phoneNumber": "11954545454"
}
```

```json
Response
Status - 200 OK
{
	"name": "contato atualizado",
	"email": "contato2@mail.com",
	"phoneNumber": "11954545454",
	"id": "752c7a5b-1964-4b14-bba5-56db8c276be0",
	"createdAt": "2023-03-26T22:01:19.694Z"
}
```

### `DELETE /contacts/id`

Rota para exclusão de um contato, necessária autenticação e envio do id do contato como parâmetro da rota, somente o usuário pode excluir seus contatos.

```json
Response
Status - 204 No Content

No body returned for response

```
