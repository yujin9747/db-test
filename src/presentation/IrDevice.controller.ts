import { Body, Controller, Post } from '@nestjs/common';
import { IrDeviceService } from '../infra/IrDevice.service';
import { CreateIrDeviceDto } from './dto/CreateIrDevice.dto';

@Controller('ir_device')
export class IrDeviceController {
  constructor(private irDeviceService: IrDeviceService) {}

  @Post()
  async createIrDevice(@Body() body: CreateIrDeviceDto) {
    return await this.irDeviceService.create(body);
  }
}
