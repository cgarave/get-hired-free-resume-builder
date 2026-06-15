-- CreateTable
CREATE TABLE "DownloadsCount" (
    "id" SERIAL NOT NULL,
    "count" SERIAL NOT NULL,

    CONSTRAINT "DownloadsCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewedResume" (
    "id" SERIAL NOT NULL,
    "count" SERIAL NOT NULL,

    CONSTRAINT "ReviewedResume_pkey" PRIMARY KEY ("id")
);
