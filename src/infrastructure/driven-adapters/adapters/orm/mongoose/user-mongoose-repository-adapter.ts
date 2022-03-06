import { IAddUserRepository } from "@/domain/models/contracts/add-user-repository";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { UserModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/user";

export class UserMongooseRepositoryAdapter implements IAddUserRepository {
    async addUserRepository(data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.create(data);
    }
}
