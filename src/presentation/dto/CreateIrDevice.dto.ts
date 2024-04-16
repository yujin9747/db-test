import { IrDeviceType } from '../../shemas/shared/enum/IrDeviceType';

export class CreateIrDeviceDto {
  irBulbId: string;
  type: IrDeviceType;
  model: string;
}
