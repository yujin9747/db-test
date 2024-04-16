import { Body, Controller, Post } from '@nestjs/common';
import { AmiStatusService } from '../infra/AmiStatus.service';
import { CreateAmiStatusDto } from './dto/CreateAmiStatus.dto';

@Controller('ami_status')
export class AmiStatusController {
  constructor(private amiStatusService: AmiStatusService) {}

  @Post()
  async createAmiStatus(@Body() body: CreateAmiStatusDto) {
    return await this.amiStatusService.create(body);
  }
}
