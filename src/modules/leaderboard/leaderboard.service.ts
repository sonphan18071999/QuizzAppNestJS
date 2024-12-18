import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {LeaderBoard} from './leader-board.schema';
import {LeaderboardDto} from "../../shared/DTOs";

@Injectable()
export class LeaderboardService {
    constructor(
        @InjectModel(LeaderBoard.name) private leaderboardDtoModel: Model<LeaderBoard>
    ) {}

    public async getLatestItems(): Promise<LeaderboardDto[]> {
        try {
            return await this.leaderboardDtoModel
                .find()
                .sort({score: -1})
                .limit(10)
                .exec() as unknown as LeaderboardDto[];
        } catch (error) {
            console.error('Error fetching leaderboard items:', error);
            throw new Error('Failed to retrieve leaderboard items');
        }
    }
}
