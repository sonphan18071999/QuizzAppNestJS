import {ArrayNotEmpty, IsArray, IsEnum, IsOptional, IsString} from "class-validator";
import {QuestionType} from "../enums/question-type.enum";

export class QuizDto {
    @IsString()
    question: string;

    @IsArray()
    @ArrayNotEmpty()
    choices: string[];

    @IsString({ each: true })
    @IsOptional()
    answer: string | string[];

    @IsEnum(QuestionType)
    type: QuestionType;

    @IsOptional()
    @IsString({ each: true })
    selection?: string | string[];
}
