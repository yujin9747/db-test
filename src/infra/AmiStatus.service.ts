import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AmiStatusEntity } from '../shemas/ami-status/AmiStatus.entity';
import { Repository } from 'typeorm';
import { CreateAmiStatusDto } from '../presentation/dto/CreateAmiStatus.dto';
import { NodeEntity } from '../Node.entity';

@Injectable()
export class AmiStatusService {
  constructor(
    @InjectRepository(AmiStatusEntity)
    private repo: Repository<AmiStatusEntity>,
    @InjectRepository(NodeEntity)
    private nodeRepo: Repository<NodeEntity>,
  ) {}

  async create(body: CreateAmiStatusDto) {
    const ami = await this.nodeRepo.findOneBy({ id: body.nodeId });

    if (!ami) {
      throw new NotFoundException('ami is not found in node table');
    }

    const amiStatus = this.repo.create({
      mode: body.mode,
      amiId: ami.id,
      channelOneName: {
        name1: body.channelName11,
        name2: body.channelName12,
        name3: body.channelName13,
      },
      channelTwoName: {
        name1: body.channelName21,
        name2: body.channelName22,
        name3: body.channelName23,
      },
      channelOneWatt: {
        watt1: body.watt11,
        watt2: body.watt12,
        watt3: body.watt13,
      },
      channelTwoWatt: {
        watt1: body.watt21,
        watt2: body.watt22,
        watt3: body.watt23,
      },
      channelOneWattHour: {
        wattHour1: body.wattHour11,
        wattHour2: body.wattHour12,
        wattHour3: body.wattHour13,
      },
      channelTwoWattHour: {
        wattHour1: body.wattHour21,
        wattHour2: body.wattHour22,
        wattHour3: body.wattHour23,
      },
    });
    return await this.repo.save(amiStatus);
  }
}
