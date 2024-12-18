import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Assessment, AssessmentSchema} from "./assessment.schema";
import {AssessmentService} from "./assessment.service";
import {AssessmentController} from "./assessment.controller";

@Module({
    imports:[MongooseModule.forFeature([{ name: Assessment.name, schema: AssessmentSchema }])],
    controllers: [AssessmentController],
    providers: [AssessmentService],
})
export class AssessmentModule {}
