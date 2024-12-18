import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class LeaderBoard extends Document {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    score: string;
}
export const LeaderBoardSchema = SchemaFactory.createForClass(LeaderBoard);
