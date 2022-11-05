-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "bcp_47LanguageTag" TEXT,
ADD COLUMN     "dbValue" INTEGER,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "languageName" TEXT,
ADD COLUMN     "linkedinUrn" DOUBLE PRECISION,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "sortFactor" TEXT,
ALTER COLUMN "name" DROP NOT NULL;
