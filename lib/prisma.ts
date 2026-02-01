import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Hardcoded connection string as fallback
const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_Ghx2TIfs3vcK@ep-flat-frog-ahmzw7mr-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require'

console.log('DATABASE_URL from env:', process.env.DATABASE_URL ? 'FOUND' : 'NOT FOUND')
console.log('Using connection string:', connectionString.substring(0, 30) + '...')

const neon = new Pool({ connectionString })
const adapter = new PrismaNeon(neon)

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
