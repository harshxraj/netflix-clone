import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
// The purpose of this declaration is to make prismadb available globally within your application
