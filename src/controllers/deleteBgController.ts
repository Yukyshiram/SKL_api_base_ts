import { Request, Response } from "express";
import { removeBackground } from "@imgly/background-removal-node";
import axios from "axios";
import fs from "fs";
import path from "path";

export const handleDeleteBgRequest = async (req: Request, res: Response): Promise<Response | void> => {
    const imageUrl = req.query.image as string;

    if (!imageUrl) {
        return res.status(400).json({ error: "El parámetro 'image' es requerido." });
    }

    try {
        const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
        const inputBuffer = Buffer.from(response.data as ArrayBuffer);

        const inputPath = path.join(__dirname, "temp-input.jpg");
        fs.writeFileSync(inputPath, inputBuffer);

        const absolutePath = path.resolve(inputPath);
        const fileUrl = `file://${absolutePath}`;
        const blob = await removeBackground(fileUrl);

        const arrayBuffer = await blob.arrayBuffer();
        const outputBuffer = Buffer.from(arrayBuffer);

        // Enviar la imagen procesada como respuesta
        res.setHeader("Content-Type", "image/png");
        res.send(outputBuffer);

        // Eliminar archivos temporales
        fs.unlinkSync(inputPath);
    } catch (err) {
        console.error("Error al procesar la imagen:", err);
        res.status(500).json({ error: "Error al procesar la imagen." });
    }
};