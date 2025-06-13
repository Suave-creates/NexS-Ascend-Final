/*
  Warnings:

  - You are about to drop the `bulk` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `bulk`;

-- CreateTable
CREATE TABLE `BulkScan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `scanId` VARCHAR(191) NOT NULL,
    `stationId` VARCHAR(191) NOT NULL,
    `nexsId` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
