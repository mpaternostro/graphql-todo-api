
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTodoInput {
    title: string;
    isCompleted?: Nullable<boolean>;
}

export class UpdateTodoInput {
    id: string;
}

export class CreateUserInput {
    username: string;
}

export class UpdateUserInput {
    id: string;
    username: string;
}

export class Todo {
    id: string;
    title: string;
    isCompleted: boolean;
    user: User;
}

export abstract class IQuery {
    abstract todos(): Nullable<Todo>[] | Promise<Nullable<Todo>[]>;

    abstract todo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createTodo(createTodoInput: CreateTodoInput): Todo | Promise<Todo>;

    abstract updateTodo(updateTodoInput: UpdateTodoInput): Todo | Promise<Todo>;

    abstract removeTodo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    username: string;
    todos: Nullable<Todo>[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type DateTime = Date;
type Nullable<T> = T | null;