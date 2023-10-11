import { Anouncement, Image, User } from "../entities";
import {
    AnouncementCreate,
    AnouncementReturn,
    AnouncementUpdate,
    ImageRead,
} from "../interface";
import { anouncementRepository, imageRepository } from "../repositories";

const create = async (
    payload: AnouncementCreate
): Promise<AnouncementReturn> => {
    const imagesUrl = payload.images;

    const anouncement: Anouncement = anouncementRepository.create(payload);
    await anouncementRepository.save(anouncement);

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

// const retrieve = async (params: type) => {};

const update = async (
    payload: AnouncementUpdate,
    foundAnouncer: User
): Promise<AnouncementReturn> => {
    const id: number = foundAnouncer.id;

    if (payload.images) {
        const imagesUrl = payload.images;

        const anouncement: Anouncement = await anouncementRepository.save(
            payload
        );

        imagesUrl.forEach(async (image) => {
            const newImages: Image = await imageRepository.save({
                ...image,
                anouncement,
            });

            return newImages;
        });

        const images: Image[] = await imageRepository.find({
            relations: { anouncement: true },
        });

        const anouncementReturn: AnouncementReturn = {
            ...anouncement,
            images,
        };

        return anouncementReturn;
    }

    const anouncement: Anouncement = await anouncementRepository.save(payload);

    return anouncement;
};

const destroy = async (anouncement: Anouncement): Promise<void> => {
    await anouncementRepository.softRemove(anouncement);
};

export default { create, update, destroy };
