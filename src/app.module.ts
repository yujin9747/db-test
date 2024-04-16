import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirconDeviceStatusEntity } from './shemas/aircon-device-status/AirconDeviceStatus.entity';
import { AmiStatusEntity } from './shemas/ami-status/AmiStatus.entity';
import { IrDeviceEntity } from './shemas/ir-device/IrDevice.entity';
import { IrTypeModelEntity } from './shemas/ir-type-model/IrTypeModel.entity';
import { NodeEntity } from './Node.entity';
import { IrTypeModelService } from './infra/IrTypeModel.service';
import { IrTypeModelController } from './presentation/IrTypeModel.controller';
import { AmiStatusController } from './presentation/AmiStatus.controller';
import { AmiStatusService } from './infra/AmiStatus.service';
import { IrDeviceService } from './infra/IrDevice.service';
import { IrDeviceController } from './presentation/IrDevice.controller';
import { AirconDeviceStatusService } from './infra/AirconDeviceStatus.service';
import { AirconDeviceStatusController } from './presentation/AirconDeviceStatus.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'test',
      username: 'test',
      password: 'mysqlpassword',
      entities: [
        AirconDeviceStatusEntity,
        AmiStatusEntity,
        IrDeviceEntity,
        IrTypeModelEntity,
        NodeEntity,
      ],
      synchronize: false,
      // logging: true,
    }),
    TypeOrmModule.forFeature([
      AirconDeviceStatusEntity,
      AmiStatusEntity,
      IrDeviceEntity,
      IrTypeModelEntity,
      NodeEntity,
    ]),
  ],
  controllers: [
    AppController,
    IrTypeModelController,
    AmiStatusController,
    IrDeviceController,
    AirconDeviceStatusController,
  ],
  providers: [
    AppService,
    IrTypeModelService,
    AmiStatusService,
    IrDeviceService,
    AirconDeviceStatusService,
  ],
})
export class AppModule {}
