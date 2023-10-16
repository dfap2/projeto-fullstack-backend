import { Anouncement, Image, User } from "../entities";
import {
    AnouncementCreate,
    AnouncementReturn,
    AnouncementUpdate,
    ImageRead,
} from "../interface";
import {
    anouncementRepository,
    imageRepository,
    userRepository,
} from "../repositories";

const create = async (
    payload: AnouncementCreate,
    user: User
): Promise<AnouncementReturn> => {
    const imagesUrl = payload.images;

    const anouncement: Anouncement = anouncementRepository.create(payload);
    await anouncementRepository.save({ ...anouncement, user });

    imagesUrl.forEach(async (image) => {
        const newImages: Image = imageRepository.create({
            ...image,
            anouncement,
        });
        await imageRepository.save(newImages);
    });

    const anouncementReturn: AnouncementReturn = {
        ...anouncement,
    };

    return anouncementReturn!;
};

const read = async (): Promise<AnouncementReturn[]> => {
    const anouncements: AnouncementReturn[] =
        await anouncementRepository.find();

    return anouncements;
};

const retrieve = async (user: User): Promise<any> => {
    const anouncements: AnouncementReturn[] = await anouncementRepository
        .createQueryBuilder("announcement")
        .where("announcement.userId = :userId", { userId: user.id })
        .getMany();

    console.log(anouncements);

    return anouncements;
};

const update = async (
    payload: AnouncementUpdate,
    currentAnouncement: Anouncement
): Promise<AnouncementReturn> => {
    const anouncement: Anouncement = await anouncementRepository.save({
        ...currentAnouncement,
        ...payload,
    });

    return anouncement;
};

const destroy = async (anouncement: Anouncement): Promise<void> => {
    await anouncementRepository.softRemove(anouncement);
};

export default { create, read, retrieve, update, destroy };
