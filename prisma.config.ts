import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_Ghx2TIfs3vcK@ep-flat-frog-ahmzw7mr-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
});
