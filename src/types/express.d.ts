import 'express';

declare global {
  namespace Express {
    interface Response {
      sendCustom: (data: object) => void;
      sendError: (message: string, statusCode?: number) => void;
    }
  }
}
