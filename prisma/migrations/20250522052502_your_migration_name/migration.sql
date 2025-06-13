-- CreateTable
CREATE TABLE `FR0Scan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `scanId` VARCHAR(191) NOT NULL,
    `stationId` VARCHAR(191) NOT NULL,
    `nexsId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `FR0Scan_scanId_key`(`scanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
