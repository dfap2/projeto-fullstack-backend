import { Request, Response } from "express";
import { anouncemntServices } from "../services";
import { AnouncementReturn } from "../interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const anouncement: AnouncementReturn = await anouncemntServices.create(
        req.body
    );

    return res.status(201).json(anouncement);
};

export default { create };
