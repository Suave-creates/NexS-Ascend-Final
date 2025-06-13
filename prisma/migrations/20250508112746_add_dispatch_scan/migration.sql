/*
  Warnings:

  - The primary key for the `packingscan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `PackingScan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `packingscan` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `DispatchScan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `scanId` VARCHAR(191) NOT NULL,
    `stationId` VARCHAR(191) NOT NULL,
    `nexsId` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
