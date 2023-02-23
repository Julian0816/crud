import { CookingService } from './cooking.service';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Cooking } from './cooking.entity';

@Crud({
    model: {
        type: Cooking
    }
})

@Controller('cooking')
export class CookingController implements CrudController<Cooking>{
    constructor(public service: CookingService) {
        
    }
}
