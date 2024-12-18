import {Injectable, NotFoundException} from '@nestjs/common';
import {Model} from 'mongoose';
import {QuizDto} from '../../shared/DTOs/quiz.dto';
import {Quiz} from './quiz.schema';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class QuizService {
    constructor(@InjectModel(Quiz.name) private quizModel: Model<Quiz>) {
    }

    // public async getQuizzesById(id: string): Promise<QuizDto> {
    //     const quiz = await this.quizModel.findById(id).exec();
    //     debugger;
    //     if (!quiz) {
    //         throw new NotFoundException(`Quiz with ID ${id} not found`);
    //     }
    //     return quiz.toObject() as QuizDto;
    // }
    //
    // public async updateQuiz(id: string, quizDto: QuizDto): Promise<QuizDto> {
    //     const updatedQuiz = await this.quizModel.findByIdAndUpdate(id, quizDto, {
    //         new: true,
    //     }).exec();
    //
    //     if (!updatedQuiz) {
    //         throw new NotFoundException(`Quiz with ID ${id} not found`);
    //     }
    //
    //     return updatedQuiz.toObject() as QuizDto;
    // }
    //
    // public async createQuiz(quizDto: QuizDto): Promise<QuizDto> {
    //     try {
    //         const createdQuiz = new this.quizModel(quizDto);
    //         await createdQuiz.save();
    //         return createdQuiz.toObject() as QuizDto;
    //     } catch (error) {
    //         console.error('Error saving quiz:', error);
    //         throw error;
    //     }
    //
    // }
    //
    // public async createQuizzes(quizDtos: QuizDto[]): Promise<QuizDto[]> {
    //     try {
    //         const createdQuizzes = await this.quizModel.insertMany(quizDtos);
    //
    //         return createdQuizzes.map((quiz) => quiz.toObject() as QuizDto);
    //     } catch (error) {
    //         console.error('Error creating quizzes:', error);
    //         throw new Error('Failed to create quizzes');
    //     }
    // }
    //
    // public async getAllQuizzes(): Promise<QuizDto[]> {
    //     const quizzes = await this.quizModel.find().exec();
    //     return quizzes.map(quiz => quiz.toObject() as QuizDto);
    // }
    //
    // public async resetQuizzes(): Promise<boolean> {
    //     try {
    //         const result = await this.quizModel.updateMany(
    //             {},
    //             { $set: { 'isCorrect': false } }
    //         );
    //
    //         return result.modifiedCount > 0;
    //     } catch (error) {
    //         console.error('Error resetting quizzes:', error);
    //         return false;
    //     }
    // }
    //
    //
    // public async deleteAllQuizzes():Promise<boolean>{
    //     const quizzesDelete = await this.quizModel.deleteMany({});
    //     return quizzesDelete.deletedCount > 0;
    // }
}
