import { Request, Response, NextFunction } from 'express';

export const responseHandler = (req: Request, res: Response, next: NextFunction) => {
    res.sendCustom = (data: object) => {
        res.json({
            success: true,
            ...data,
        });
    };

    res.sendError = (message: string, statusCode: number = 400) => {
        res.status(statusCode).json({
            success: false,
            error: message,
        });
    };

    next();
};

// Añadir tipos personalizados al objeto Response de Express
declare global {
    namespace Express {
        interface Response {
            sendCustom: (data: object) => void;
            sendError: (message: string, statusCode?: number) => void;
        }
    }
}
