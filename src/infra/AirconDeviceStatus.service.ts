import { InjectRepository } from '@nestjs/typeorm';
import { AirconDeviceStatusEntity } from '../shemas/aircon-device-status/AirconDeviceStatus.entity';
import { Repository } from 'typeorm';
import { CreateAirconDeviceStatusDto } from '../presentation/dto/CreateAirconDeviceStatus.dto';
import { NodeEntity } from '../Node.entity';
import { IrDeviceEntity } from '../shemas/ir-device/IrDevice.entity';

export class AirconDeviceStatusService {
  constructor(
    @InjectRepository(AirconDeviceStatusEntity)
    private repo: Repository<AirconDeviceStatusEntity>,
    @InjectRepository(NodeEntity)
    private nodeRepo: Repository<NodeEntity>,
    @InjectRepository(IrDeviceEntity)
    private irDeviceRepo: Repository<IrDeviceEntity>,
  ) {}

  async create(body: CreateAirconDeviceStatusDto) {
    const airconReader = await this.nodeRepo.findOneBy({
      id: body.readerDeviceId,
    });
    const irDevice = await this.irDeviceRepo.findOneBy({ id: body.irDeviceId });

    const airconDeviceStatus = this.repo.create({
      readerDevice: airconReader,
      irDevice: irDevice,
      mode: body.mode,
      fanSpeed: body.fanSpeed,
      power: body.power,
      temp: {
        currentTemperature: body.currentTemperature,
        settingTemperature: body.settingTemperature,
      },
    });

    return this.repo.save(airconDeviceStatus);
  }
}
