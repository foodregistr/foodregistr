import { EjemploModule } from './modules/ejemplo/ejemplo.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/ejemplo/auth/auth.module';
@Module({
  imports:     [EjemploModule, AuthModule],
  controllers: [AppController],
  providers:   []
})
export class AppModule {}
