import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TodoService } from 'todo/service/todo.service';
import { User } from '../entities/user.entity';
import { UserService } from '../service/user.service';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly todoService: TodoService,
  ) {}

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.userService.findOneById(id);
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @ResolveField('todos')
  findTodos(@Parent() user) {
    const { id } = user;
    return this.todoService.findAllByUserId(id);
  }

  @Mutation('createUser')
  create(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string) {
    return this.userService.remove(id);
  }
}