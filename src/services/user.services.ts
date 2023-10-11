import { Address, User } from "../entities";
import {
    AddressUpdate,
    UserCreate,
    UserReturn,
    UserUpdate,
} from "../interface";
import { addressRepository, userRepository } from "../repositories";
import { userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    const address: Address = addressRepository.create(payload.address!);
    await addressRepository.save(address);

    const user: User = userRepository.create({ ...payload, address });
    await userRepository.save(user);

    return userReturnSchema.parse(user);
};

const update = async (
    payload: UserUpdate,
    foundUser: User
): Promise<UserReturn> => {
    const id: number = foundUser.id;

    if (payload.address) {
        const id: number = foundUser.id;
        const payloadAddress: AddressUpdate = payload.address;
        delete payload.address;

        const currentAddress: Address | null =
            await addressRepository.findOneBy({
                id,
            });

        const address: Address = await addressRepository.save({
            ...currentAddress!,
            payloadAddress,
        });

        const user: User = await userRepository.save({
            ...foundUser,
            ...payload,
            address,
        });

        return userReturnSchema.parse(user);
    }
    const currentAddress: Address | null = await addressRepository.findOneBy({
        id,
    });

    const user: User = await userRepository.save({
        ...foundUser,
        ...payload,
        address: { ...currentAddress },
    });

    console.log(user);

    return userReturnSchema.parse(user);
};

const destroy = async (user: User): Promise<void> => {
    await userRepository.softRemove(user);
};

export default { create, update, destroy };
