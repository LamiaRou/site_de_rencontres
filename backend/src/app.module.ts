import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/model/user';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'base.sqlite',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
