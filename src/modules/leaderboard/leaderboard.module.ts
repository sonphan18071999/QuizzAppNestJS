import { Module } from '@nestjs/common';
import { SseModule } from '../sse/sse.module';
import {LeaderboardService} from "./leaderboard.service";
import {LeaderboardController} from "./leaderboard.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {LeaderBoard, LeaderBoardSchema} from "./leader-board.schema";

@Module({
    imports: [
        SseModule,
        MongooseModule.forFeature([
            { name: LeaderBoard.name, schema: LeaderBoardSchema },
        ])
    ],
    controllers: [LeaderboardController],
    providers: [LeaderboardService],
})
export class LeaderboardModule {}
