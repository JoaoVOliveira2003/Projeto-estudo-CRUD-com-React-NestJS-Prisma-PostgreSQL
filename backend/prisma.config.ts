import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: 'postgresql://postgres:senha@localhost:5432/postgres',
  },
})