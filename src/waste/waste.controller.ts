import { WasteService } from './waste.service';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Waste } from './waste.entity';

@Crud({
    model: {
        type: Waste
    }
})
@Controller('waste')
export class WasteController implements CrudController<Waste> {
    constructor(public service: WasteService) {
        
    }
}
