import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {QuestionType} from "../../shared/enums/question-type.enum";

@Schema()
export class Quiz extends Document {
    @Prop({ required: true, type: String })
    question: string;

    @Prop({ required: true, type: [String] })
    choices: string[];

    @Prop({ required: false, type: [String], default: [] })
    answer: string | string[];

    @Prop({ required: true, enum: QuestionType })
    type: QuestionType;

    @Prop({ required: false, type: [String], default: [] })
    selection?: string | string[];

    @Prop({ required: true})
    isCorrect?: boolean;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
