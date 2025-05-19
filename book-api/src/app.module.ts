// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { Book } from './book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'melek',
      database: 'bookdb',
      entities: [Book],
      synchronize: true, // désactive en prod
    }),
    BookModule,
  ],
})
export class AppModule {}
