import { AssessmentDto } from "../../shared/DTOs/assessment.dto";
import {IAssessmentService} from "../../shared/interfaces/IAssessmentService";  // Assuming you have an Assessment DTO

export abstract class AbstractAssessmentService implements IAssessmentService {
    abstract updateAssessment( assessmentDto: AssessmentDto): Promise<AssessmentDto>;

    abstract getAllAssessments(): Promise<AssessmentDto[]>;

    abstract deleteAllAssessments(): Promise<boolean>;

    protected logError(error: Error): void {
        console.error('AssessmentService error: ', error);
    }
}
