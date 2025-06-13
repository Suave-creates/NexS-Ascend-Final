/*
  Warnings:

  - Added the required column `department` to the `MaintenanceShopIssue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destination_of_use` to the `MaintenanceShopIssue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `maintenanceshopissue` ADD COLUMN `department` VARCHAR(191) NOT NULL,
    ADD COLUMN `destination_of_use` VARCHAR(191) NOT NULL;
