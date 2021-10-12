import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import {SequelizeModule} from '@nestjs/sequelize'
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'WelCome$123',
      database: 'migration_development',
      models: [User],
      autoLoadModels:true,
      synchronize:true,
    }),
    UsersModule,
  ],
  controllers: [ UsersController],
  providers: [ UsersService],
 
})
export class AppModule {}
