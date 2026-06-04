import { PrismaClient } from '../../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: 'postgresql://postgres:senha@localhost:5432/postgres',
})

const adapter = new PrismaPg(pool)

export const prisma = new PrismaClient({ adapter })