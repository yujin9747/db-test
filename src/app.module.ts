import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirconDeviceStatusEntity } from './aircon-device-status/AirconDeviceStatus.entity';
import { AmiStatusEntity } from './ami-status/AmiStatus.entity';
import { IrDeviceEntity } from './ir-device/IrDevice.entity';
import { IrTypeModelEntity } from './ir-type-model/IrTypeModel.entity';
import { NodeEntity } from "./Node.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'test',
      username: 'root',
      password: 'slsddbwls4421',
      entities: [
        AirconDeviceStatusEntity,
        AmiStatusEntity,
        IrDeviceEntity,
        IrTypeModelEntity,
        NodeEntity,
      ],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
