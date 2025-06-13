/*
  Warnings:

  - You are about to drop the `maintenanceshopissue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `operationsmetadata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `maintenanceshopissue`;

-- DropTable
DROP TABLE `operationsmetadata`;

-- CreateTable
CREATE TABLE `FastTrackScan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trayId` VARCHAR(191) NOT NULL,
    `cityOdd` VARCHAR(191) NOT NULL,
    `scannedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
