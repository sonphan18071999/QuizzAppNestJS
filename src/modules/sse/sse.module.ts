import { Module } from '@nestjs/common';
import { SseService } from './sse.service';
import { SseController } from './sse.controller';
import {LeaderboardService} from "../leaderboard/leaderboard.service";
import {MongooseModule} from "@nestjs/mongoose";
import {LeaderBoard, LeaderBoardSchema} from "../leaderboard/leader-board.schema";
import {AssessmentService} from "../assessments/assessment.service";
import {Assessment, AssessmentSchema} from "../assessments/assessment.schema";

@Module({
  imports: [  MongooseModule.forFeature([
    { name: LeaderBoard.name, schema: LeaderBoardSchema },
  ]),
    MongooseModule.forFeature([
      { name: Assessment.name, schema: AssessmentSchema },
    ])],
  providers: [SseService,LeaderboardService, AssessmentService],
  controllers: [SseController],
  exports: [SseService],
})
export class SseModule {}
