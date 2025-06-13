-- CreateTable
CREATE TABLE `OperationsMetadata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location_id` VARCHAR(191) NOT NULL,
    `city_odd` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MaintenanceShopIssue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pid` VARCHAR(191) NOT NULL,
    `partName` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `rate` DOUBLE NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `total` DOUBLE NOT NULL,
    `issuedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
