import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from "mongoose";
import { User as IUser } from "../../../common/types";

const { ObjectId: ID } = SchemaTypes;

@Schema()
export class User extends Document {
  @Prop({ required: true, type: String, unique: true })
  nickname: string;

  @Prop({ required: false })
  fullName?: string;

  @Prop({ required: false })
  about?: string;

  @Prop({ required: true, type: String, unique: true })
  email: string;

  @Prop({ default: [], type: [String] })
  links: string[];

  @Prop({ default: 0, type: Number })
  rating: number;

  @Prop({ type: Date, required: true })
  registrationDate: Date;

  @Prop({ default: [], type: [String] })
  subscriptions: string[];

  @Prop({ default: [], type: { type: ID, ref: "" } })
  bookmarks: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
