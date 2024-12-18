import {Injectable} from "@nestjs/common";
import {AbstractAssessmentService} from "./base-assessment-service";
import {InjectModel} from "@nestjs/mongoose";
import {Assessment} from "./assessment.schema";
import {Model, Promise, Types} from "mongoose";
import {AssessmentDto} from "../../shared/DTOs/assessment.dto";

@Injectable()
export class AssessmentService extends AbstractAssessmentService {
    constructor(@InjectModel(Assessment.name) private assessmentModel: Model<Assessment>) {
        super();
    }

    public async submit(assessment: AssessmentDto): Promise<Assessment> {
        let assessmentFound = await this.assessmentModel.findOne({ userId: assessment.userId });

        if (!assessmentFound) {
            const newAssessment = new this.assessmentModel(assessment);
            await newAssessment.save();
            return newAssessment as Assessment;
        }
        assessmentFound.point += 400;
        const updatedAssessment = await this.assessmentModel.findOneAndUpdate(
            {userId: assessmentFound.userId},
            assessmentFound,
            {new: true}
        );
        return updatedAssessment as Assessment;
    }

    public deleteAllAssessments(): Promise<boolean> {
        return Promise.resolve(false);
    }

    public async getAllAssessments(): Promise<AssessmentDto[]> {
        const assessments = await this.assessmentModel.find().exec();
        return assessments as unknown as AssessmentDto[];
    }

    public updateAssessment(assessmentDto: AssessmentDto): Promise<AssessmentDto> {
        return Promise.resolve(undefined);
    }
}
