import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IrTypeModelEntity } from '../shemas/ir-type-model/IrTypeModel.entity';
import { Repository } from 'typeorm';
import { IrDeviceType } from '../shemas/shared/enum/IrDeviceType';

@Injectable()
export class IrTypeModelService {
  constructor(
    @InjectRepository(IrTypeModelEntity)
    private repo: Repository<IrTypeModelEntity>,
  ) {}

  async create(type: IrDeviceType, model: string) {
    const irTypeModel = this.repo.create({ type, model });
    return this.repo.save(irTypeModel);
  }
}
