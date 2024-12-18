import {AssessmentDto} from "../DTOs/assessment.dto";

export interface IAssessmentService {
    updateAssessment(assessmentDto: AssessmentDto): Promise<AssessmentDto>;
    getAllAssessments(): Promise<AssessmentDto[]>;
    deleteAllAssessments(): Promise<boolean>;
}