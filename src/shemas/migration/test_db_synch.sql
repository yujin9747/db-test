CREATE TABLE `ir_device` (
    `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    `id` varchar(36) NOT NULL,
    `type` enum ('에어컨') NOT NULL,
    `model` varchar(255) NOT NULL,
    `nodeId` varchar(36) NOT NULL,
    `readerDeviceId` varchar(36) NULL,
    UNIQUE INDEX `REL_f41f602cc3f82ae81002343601` (`readerDeviceId`),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `aircon_device_status` (
    `id` varchar(36) NOT NULL,
    `mode` enum ('cooler', 'heater', 'ventilator', 'dehumidifier', 'auto') NOT NULL,
    `fanSpeed` enum ('drive1', 'drive2', 'drive3', 'auto') NOT NULL,
    `power` enum ('on', 'off') NOT NULL,
    `readerDeviceId` varchar(36) NULL,
    `irDeviceId` varchar(36) NULL,
    `currentTemperature` float NOT NULL,
    `settingTemperature` float NOT NULL,
    UNIQUE INDEX `REL_6a70d5a7ea294ba7efa5ae326d` (`readerDeviceId`),
    UNIQUE INDEX `REL_c90ce7ba2ccd5df5a8fd2b2dab` (`irDeviceId`),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;


CREATE TABLE `ami_status` (
    `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
    `id` varchar(36) NOT NULL,
    `mode` enum ('1', '2', '3') NOT NULL,
    `nodeId` varchar(36) NULL,
    `channelName11` varchar(255) NOT NULL,
    `channelName12` varchar(255) NOT NULL,
    `channelName13` varchar(255) NOT NULL,
    `channelName21` varchar(255) NOT NULL,
    `channelName22` varchar(255) NOT NULL,
    `channelName23` varchar(255) NOT NULL,
    `watt11` int NOT NULL,
    `watt12` int NOT NULL,
    `watt13` int NOT NULL,
    `watt21` int NOT NULL,
    `watt22` int NOT NULL,
    `watt23` int NOT NULL,
    `wattHour11` float NOT NULL,
    `wattHour12` float NOT NULL,
    `wattHour13` float NOT NULL,
    `wattHour21` float NOT NULL,
    `wattHour22` float NOT NULL,
    `wattHour23` float NOT NULL,
    UNIQUE INDEX `REL_311f085e405c61b6ef447407cf` (`nodeId`),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;



CREATE TABLE `ir_type_model` (
    `id` int NOT NULL AUTO_INCREMENT,
    `type` enum ('에어컨') NOT NULL,
    `model` varchar(255) NOT NULL,
    UNIQUE INDEX `IDX_a14c5d6ec5454931693018a944` (`type`, `model`),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;


ALTER TABLE `ir_device` ADD CONSTRAINT `FK_b89b432fe1c70d49c74c83d6c67` FOREIGN KEY (`nodeId`) REFERENCES `node`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE `ir_device` ADD CONSTRAINT `FK_f41f602cc3f82ae810023436010` FOREIGN KEY (`readerDeviceId`) REFERENCES `node`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE `aircon_device_status` ADD CONSTRAINT `FK_6a70d5a7ea294ba7efa5ae326d8` FOREIGN KEY (`readerDeviceId`) REFERENCES `node`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE `aircon_device_status` ADD CONSTRAINT `FK_c90ce7ba2ccd5df5a8fd2b2dabd` FOREIGN KEY (`irDeviceId`) REFERENCES `ir_device`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;
ALTER TABLE `ami_status` ADD CONSTRAINT `FK_311f085e405c61b6ef447407cf8` FOREIGN KEY (`nodeId`) REFERENCES `node`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;