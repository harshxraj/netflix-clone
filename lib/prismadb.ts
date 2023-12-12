import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;

/*
This approach can help reduce the overhead of creating a new database connection 
for every code reload during development and, in the production environment,
can lead to more efficient use of database connections by reusing 
the same instance. 
*/
