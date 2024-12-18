import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Auth extends Document {
    firstName: string;
    lastName: string;

    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
