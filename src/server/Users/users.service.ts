// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { hash, genSalt } from 'bcryptjs';
// import { User } from './schemas/user.schema';
// import { UserDTO } from './dto/user.dto';

// @Injectable()
// export class UsersService {
//   constructor(@InjectModel(User.name) private userModel: Model<User>) {}

//   async create(user: UserDTO): Promise<UserDTO> {
//     const hashedPassword = await this.hashPassword(user.password);
//     const createdUser = await this.userModel.create({ ...user, password: hashedPassword });
//     return await createdUser.save();
//   }

//   async findOne(username: string): Promise<User | undefined> {
//     return await this.userModel.findOne({ username });
//   }

//   async hashPassword(password: string): Promise<string> {
//     const salt = await genSalt(10);
//     return await hash(password, salt);
//   }
// }
