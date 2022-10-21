import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createService = await this.userModel.create(createUserDto);
    return createService;
  }

  async findAll() {
    const fall = await this.userModel.find();
    return fall;
  }

  async findOne(id: string) {
    const fone = await this.userModel.findById(id);
    return fone;
  }

  async update(id: string, updateUserDto: CreateUserDto) {
    const updateService = await this.userModel.findByIdAndUpdate(id , CreateUserDto);
    return updateService;
  }

  async remove(id: string) {
    const removeService = await this.userModel.findByIdAndDelete(id);
    return removeService;
  }
}
