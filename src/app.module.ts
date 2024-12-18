import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from "./modules/auth/auth.module";
import {QuizModule} from "./modules/quiz/quiz.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {databaseConfig} from "./config/database.config";
import {MongooseModule} from '@nestjs/mongoose';
import {AssessmentModule} from "./modules/assessments/assessment.module";
import { LeaderboardModule } from './modules/leaderboard/leaderboard.module';
import {SseModule} from "./modules/sse/sse.module";

@Module({
    imports: [AuthModule, QuizModule,AssessmentModule,SseModule,
        LeaderboardModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => databaseConfig(configService),
        }),
        ],
    controllers: [AppController],
    providers: [AppService],

})
export class AppModule {
}
