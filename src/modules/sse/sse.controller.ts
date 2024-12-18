import {Controller, Get, Param, Res, Sse} from '@nestjs/common';
import {Response} from 'express';
import {SseService} from './sse.service';
import {LeaderboardService} from "../leaderboard/leaderboard.service";
import {from, interval, map, Observable, switchMap} from "rxjs";
import {AssessmentService} from "../assessments/assessment.service";

@Controller('sse')
export class SseController {
    constructor(private readonly sseService: SseService,
                private leaderBoardService: LeaderboardService,
                private assessmentService: AssessmentService) {
    }

    @Sse()
    public sse(): Observable<MessageEvent> {
        return new Observable<MessageEvent>((observer) => {
            this.assessmentService.getAllAssessments().then((leaderBoards) => {
                observer.next({
                    data: JSON.stringify({
                        leaderBoards: leaderBoards
                    })
                } as unknown as MessageEvent)

                interval(1000).pipe(
                    switchMap(() =>
                        from(this.assessmentService.getAllAssessments()).pipe(
                            map((leaderBoards) => ({
                                data: JSON.stringify({leaderBoards: leaderBoards})
                            }))
                        )
                    )
                ).subscribe({
                    next: (result: MessageEvent) => observer.next(result),
                    error: (err) => observer.error(err),
                });
            }).catch((err) => {
                observer.error(err);
            });
        });
    }

}
