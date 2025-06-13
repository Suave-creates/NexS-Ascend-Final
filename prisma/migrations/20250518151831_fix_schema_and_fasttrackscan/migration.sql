/*
  Warnings:

  - You are about to drop the column `city` on the `fasttrackscan` table. All the data in the column will be lost.
  - You are about to drop the column `scannedAt` on the `fasttrackscan` table. All the data in the column will be lost.
  - You are about to drop the column `trayId` on the `fasttrackscan` table. All the data in the column will be lost.
  - Added the required column `city_odd` to the `fasttrackscan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_id` to the `fasttrackscan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fasttrackscan` DROP COLUMN `city`,
    DROP COLUMN `scannedAt`,
    DROP COLUMN `trayId`,
    ADD COLUMN `city_odd` VARCHAR(191) NOT NULL,
    ADD COLUMN `location_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
