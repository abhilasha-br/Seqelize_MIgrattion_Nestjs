import { Body, Controller ,Put,Get,Param,Post, Delete} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
   
    @Get('all')
    findAll() :Promise<User[]>{
      return this.userService.findAll();
    }
  
    @Get(':id')
    findOne(@Param() params):Promise<User> {
      return this.userService.findOne(params.id);
    }

    @Post('login')
    create(@Body() user:User):Promise<User> {
      return this.userService.create(user);
    }
  
    @Put(':id')
    update(@Param() params, @Body() user:User):Promise<User> {
      return this.userService.update(params.id,user);
    }

    @Delete(':id')
    destroy(@Param() params):Promise<User> {
      return this.userService.destroy(params.id);
    }
}


// import {
//     Controller,
//     Post,
//     Body,
//     Get,
//     Patch,
//     Param,
//     Delete,
//   } from '@nestjs/common';

//  import { UsersService } from './users.service';
// import { User } from './user.model';
  
//   @Controller('user')
//   export class UsersController {
//     constructor(private userService:UsersService) {}
  
//     @Post('create')
//     public async createProduct(
//       @Body() createProductDto: CreateProductDTO,
//     ): Promise<User> {
//       const product = await this.UsersService.createProduct(createProductDto);
//       return product;
//     }
  
//     @Get('all')
//     public async getProducts(): Promise<User[]> {
//       const products = await this.UsersService.getProducts();
//       return products;
//     }
  
//     @Get('/:productId')
//     public async getProduct(@Param('productId') productId: number) {
//       const product = await this.UsersService.getProduct(productId);
//       return product;
//     }
  
//     @Patch('/edit/:userId')
//     public async editProduct(
//       @Body() createProductDto: CreateProductDTO,
//       @Param('userId') id: number,
//     ): Promise<User> {
//       const user = await this.UsersService.editProduct(
//         userId,
//         createProductDto,
//       );
//       return user;
//     }
  
//     @Delete('/delete/:productId')
//     public async deleteProduct(@Param('productId') productId: number) {
//       const deletedProduct = await this.UsersService.deleteProduct(productId);
//       return deletedProduct;
//     }
//   }