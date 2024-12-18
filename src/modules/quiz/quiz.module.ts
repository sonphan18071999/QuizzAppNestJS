import { Module } from '@nestjs/common';
import {QuizController} from "./quiz.controller";
import {QuizService} from "./quiz.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Quiz, QuizSchema} from "./quiz.schema";

@Module({
    imports:[MongooseModule.forFeature([{ name: Quiz.name, schema: QuizSchema }])],
    controllers: [QuizController],
    providers: [QuizService],
})
export class QuizModule {}
