import { PrismaClient, Prisma } from "../src/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const downloadData: Prisma.DownloadsCountCreateInput[] = [
  {
    count: 233
  },
];

const reviewedData: Prisma.ReviewedResumeCreateInput[] = [
  {
    count: 198
  },
];

export async function main() {
  for (const u of downloadData) {
    await prisma.downloadsCount.create({ data: u });
  }
  for (const u of reviewedData) {
    await prisma.reviewedResume.create({ data: u });
  }
}

main();