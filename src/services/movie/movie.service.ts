import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from '../../entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
    constructor(@InjectRepository(MovieEntity) private readonly _movieRepository: Repository<MovieEntity>) { }

    async getAllMovies(): Promise<MovieEntity[]> {
        return this._movieRepository.find()
    }

    async addMovie(data): Promise<MovieEntity> {
        return this._movieRepository.save(data)
    }

    async getMovieDetail(id: number): Promise<MovieEntity> {
        return this._movieRepository.findOne({ id })
    }

    async updateMovie(id:number, data):Promise<any>{
        return this._movieRepository.update(id, data)
    }

    async deleteMovie(id:number):Promise<any>{
        return this._movieRepository.delete(id)
    }
}
