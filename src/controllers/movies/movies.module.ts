import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MovieEntity } from '../../entities/movie.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from '../../services/movie/movie.service';

@Module({
  controllers: [MoviesController],
  imports: [
    TypeOrmModule.forFeature([
      MovieEntity
    ])
  ],
  providers:[
    MovieService
  ]
})
export class MoviesModule { }
