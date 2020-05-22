```
yarn

ENV_FILE=.env docker-compose -f docker-compose.yml up --build

dotenv -e .env yarn format:schema

dotenv -e .env yarn migrate

dotenv -e .env yarn apply:migration

dotenv -e .env yarn generate

```