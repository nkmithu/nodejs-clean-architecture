import { Adapter, Service } from "@tsclean/core";
import { IAddUserService } from "@/domain/use-cases/add-user-service";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { ADD_USER_REPOSITORY, IAddUserRepository } from "@/domain/models/contracts/add-user-repository";

@Service()
export class AddUserServiceImpl implements IAddUserService {
    constructor(
        @Adapter(ADD_USER_REPOSITORY) private readonly addUserRepository: IAddUserRepository
    ) {
    }

    async addUserService(data: AddUserParams): Promise<UserModel> {
        return await this.addUserRepository.addUserRepository(data);
    }
}