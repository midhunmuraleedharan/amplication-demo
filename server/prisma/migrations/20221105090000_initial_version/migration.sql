-- CreateTable
CREATE TABLE "TraitMethod" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "display" TEXT,
    "id" TEXT NOT NULL,
    "method" TEXT,
    "sortFactor" INTEGER,
    "totalPoints" INTEGER,
    "types" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TraitMethod_pkey" PRIMARY KEY ("id")
);
