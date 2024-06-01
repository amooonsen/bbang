import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from './posts/entities/posts.entity';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      // db 타입 설정
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [PostsModel],
      // typeorm과 db 싱크 자동으로 맞춰주는 옵션
      // 단, prd에서는 false로 변경 필요
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
