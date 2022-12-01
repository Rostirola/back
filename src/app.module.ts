import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaController } from './lista.controller';
import { Lista } from './lista.entity';
import { ListaService } from './lista.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senha',
      database: 'lista',
      entities: [
        Lista // entidades/classes
      ],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Lista])
  ],
  controllers: [AppController, ListaController],
  providers: [AppService, ListaService],
})
export class AppModule {}