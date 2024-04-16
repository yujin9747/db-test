import { IrDeviceEntity } from '../shemas/ir-device/IrDevice.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIrDeviceDto } from '../presentation/dto/CreateIrDevice.dto';
import { NodeEntity } from '../Node.entity';
import { NotFoundException } from '@nestjs/common';
import { IrTypeModelEntity } from '../shemas/ir-type-model/IrTypeModel.entity';

export class IrDeviceService {
  constructor(
    @InjectRepository(IrDeviceEntity) private repo: Repository<IrDeviceEntity>,
    @InjectRepository(NodeEntity) private nodeRepo: Repository<NodeEntity>,
    @InjectRepository(IrTypeModelEntity)
    private irTypeModelRepo: Repository<IrTypeModelEntity>,
  ) {}

  async create(body: CreateIrDeviceDto) {
    const irBulb = await this.nodeRepo.findOneBy({ id: body.irBulbId });
    if (!irBulb) {
      throw new NotFoundException('ir_bulb is not found in node table');
    }

    const irTypeModel = await this.irTypeModelRepo.findOneBy({
      type: body.type,
      model: body.model,
    });
    if (!irTypeModel) {
      throw new NotFoundException(
        'ir_type_model is not found in ir_type_model table',
      );
    }

    const irDevice = this.repo.create({
      irBulb: irBulb,
      type: irTypeModel.type,
      model: irTypeModel.model,
    });

    return this.repo.save(irDevice);
  }
}
