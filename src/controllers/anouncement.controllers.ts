import { Request, Response } from "express";
import { anouncemntServices } from "../services";
import { AnouncementReturn } from "../interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const anouncement: AnouncementReturn = await anouncemntServices.create(
        req.body,
        res.locals.foundUser
    );

    return res.status(201).json(anouncement);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const anouncements: AnouncementReturn[] = await anouncemntServices.read();

    return res.status(200).json(anouncements);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const anouncements: any = await anouncemntServices.retrieve(
        res.locals.foundUser
    );

    return res.status(200).json();
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const anouncement: AnouncementReturn = await anouncemntServices.update(
        req.body,
        res.locals.foundAnouncement
    );

    return res.status(200).json(anouncement);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await anouncemntServices.destroy(res.locals.foundAnouncement);

    return res.status(204).json();
};

export default { create, read, retrieve, update, destroy };
