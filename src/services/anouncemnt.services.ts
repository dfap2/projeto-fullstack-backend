import { Anouncement, Image } from "../entities";
import { AnouncementCreate, CommentRead } from "../interface";
import {
    anouncementRepository,
    commentRepository,
    imageRepository,
} from "../repositories";

const create = async (payload: AnouncementCreate): Promise<Anouncement> => {
    const imagesUrl = payload.images;

    const images = imagesUrl.map(async (image) => {
        const newImages: Image = imageRepository.create(image);
        await imageRepository.save(newImages);

        return newImages;
    });

    const anouncement: Anouncement = anouncementRepository.create({
        ...payload,
        images,
    });
    await anouncementRepository.save(anouncement);

    return anouncement;
};
