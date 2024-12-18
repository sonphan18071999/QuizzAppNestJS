import {Controller, Get, Param, Put, Body, NotFoundException, HttpStatus, Post} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizDto } from "../../shared/DTOs/quiz.dto";
import { ResponseDto } from "../../shared/DTOs/response.dto";

@Controller('quizzes')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}

    //     const quizzes = await this.quizService.getAllQuizzes();
    //         HttpStatus.OK,
    //         'Quizzes retrieved successfully',
    //         quizzes
    //     );
    // }
    //
    // @Post()
    // public async createQuiz(@Body() quizDto: QuizDto): Promise<ResponseDto<QuizDto>> {
    //     const createdQuiz = await this.quizService.createQuiz(quizDto);
    //     return new ResponseDto(
    //         HttpStatus.CREATED,
    //         'Quiz created successfully',
    //         createdQuiz
    //     );
    // }
    //
    // @Post('initialization')
    // public async createQuizzes(@Body() quizDtos: QuizDto[]): Promise<ResponseDto<QuizDto[]>> {
    //     const createdQuizzes = await this.quizService.createQuizzes(quizDtos);
    //     return new ResponseDto(
    //         HttpStatus.CREATED,
    // @Get(':id')
    // public async getQuizById(@Param('id') id: string): Promise<ResponseDto<QuizDto>> {
    //     const quiz = await this.quizService.getQuizzesById(id);
    //     if (!quiz) {
    //         return new ResponseDto(
    //             HttpStatus.NOT_FOUND,
    //             `Quiz with ID ${id} not found`,
    //             null,
    //             `Quiz with ID ${id} not found`
    //         );
    //     }
    //     return new ResponseDto(
    //         HttpStatus.OK,
    //         'Quiz retrieved successfully',
    //         quiz
    //     );
    // }
    //
    // @Get('all')
    // public async getAllQuizzes(): Promise<ResponseDto<QuizDto[]>> {
    //     return new ResponseDto(
    //         'Quiz created successfully',
    //         createdQuizzes
    //     );
    // }
    //
    // @Put('reset-quizzes-correction')
    // public async resetQuizzesCorrection(): Promise<ResponseDto<boolean>> {
    //     const resetQuizzes = await this.quizService.resetQuizzes();
    //     return new ResponseDto(
    //         HttpStatus.OK,
    //         'Quizzes reset successfully',
    //         resetQuizzes
    //     );
    // }
    //
    // @Post('delete-all-quizzes')
    // public async deleteQuizzes(): Promise<ResponseDto<boolean>> {
    //     const resetQuizzes = await this.quizService.deleteAllQuizzes();
    //     return new ResponseDto(
    //         HttpStatus.OK,
    //         'Quizzes delete successfully',
    //         resetQuizzes
    //     );
    // }
    //
    // @Put('submit-answer')
    // public async updateQuizWithAnswer(@Body() quizDtos: QuizDto[]): Promise<ResponseDto<QuizDto[]>> {
    //     const updatedQuizzes = await this.quizService.updateQuizWithAnswer(quizDtos);
    //     return new ResponseDto(
    //         HttpStatus.OK,
    //         'Quizzes submit successfully',
    //         updatedQuizzes
    //     );
    // }
}
