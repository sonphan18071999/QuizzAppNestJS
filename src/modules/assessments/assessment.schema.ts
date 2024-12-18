import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {QuizDto} from "../../shared/DTOs/quiz.dto";
import {AssessmentStatus} from "../../shared/enums/assessment-type.enum";
import {SchemaTypes, Types} from "mongoose";
import { Document } from 'mongoose';

@Schema()
export class Assessment extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ type: [SchemaTypes.Mixed], required: true })
    quizzes: QuizDto[];

    @Prop({ required: true })
    duration: number;

    @Prop({ required: true })
    point: number;

    @Prop({
        type: String,
        enum: Object.values(AssessmentStatus),
        default: AssessmentStatus.PENDING
    })
    status: AssessmentStatus;

    @Prop({ required: true })
    userId: Types.ObjectId;
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
