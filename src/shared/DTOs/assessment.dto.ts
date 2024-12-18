import { IsString, IsNotEmpty, IsInt, Min, Max, ValidateNested } from 'class-validator';
import { QuizDto } from './quiz.dto';
import {Types} from "mongoose";
import {Type} from "class-transformer";

export class AssessmentDto {
    @IsString()
    @IsNotEmpty()
    _id: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    duration: string;

    @IsInt()
    @Min(1)
    @Max(10)
    attempt: number;

    @IsString()
    @IsNotEmpty()
    point: string;

    @ValidateNested({ each: true })
    @Type(() => QuizDto)
    quizzes: QuizDto[];

    @IsString()
    @IsNotEmpty()
    userId: Types.ObjectId;
}
