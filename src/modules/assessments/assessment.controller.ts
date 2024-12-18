import {Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Put} from "@nestjs/common";
import {AssessmentService} from "./assessment.service";
import {AssessmentDto} from "../../shared/DTOs/assessment.dto";
import {ResponseDto} from "../../shared/DTOs/response.dto";
import {Assessment} from "./assessment.schema";

@Controller('assessment')
export class AssessmentController {
    constructor(private readonly assessmentService: AssessmentService) {}

    @Put('submit')
    private async submitAssessment(@Body() assessment: AssessmentDto): Promise<ResponseDto<Assessment>> {
        const assessmentUpdated = await this.assessmentService.submit(assessment);
        return new ResponseDto<Assessment>(
            200,
            'Assessment submitted successfully',
            assessmentUpdated
        );
    }

    @Get('get-all')
    private async assessments(): Promise<ResponseDto<AssessmentDto[]>> {
        const assessments = await this.assessmentService.getAllAssessments();
        return new ResponseDto<AssessmentDto[]>(
            200,
            'Retrieved assessments',
            assessments
        );
    }
}
