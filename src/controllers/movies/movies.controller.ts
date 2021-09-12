import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovieService } from 'src/services/movie/movie.service';

@Controller('movies')
export class MoviesController {
    constructor(private _movieService: MovieService) { }

    @Get()
    getAllMovies(): any {
        return this._movieService.getAllMovies()
    }

    @Post()
    create(@Body() body) {
        return this._movieService.addMovie(body)
    }

    @Get(':id')
    async getMovieDetail(@Param('id') id: number) {
        return this._movieService.getMovieDetail(id)
    }

    @Put(':id')
    async updateMovie(
        @Param('id') id: number,
        @Body('title') title: string,
        @Body('poster') poster: string,
    ) {
        return this._movieService.updateMovie(id, { title, poster })
    }

    @Delete(':id')
    async deleteMovie(@Param('id') id: number) {
        return this._movieService.deleteMovie(id)
    }
}
