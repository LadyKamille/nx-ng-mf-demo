import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    let user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['categories'],
    });
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    await this.userRepository.update(id, updateUserInput);
    return this.userRepository.findOneByOrFail({ id });
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
