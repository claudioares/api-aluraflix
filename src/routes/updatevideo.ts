import { FastifyInstance } from "fastify"
import { prisma } from "../db/prisma.config";


interface IVideoCreate {
    title: string,
    link_image: string,
    link_video: string
}

export async function updateVideos(app: FastifyInstance) {

    app.put("/backend", async (request, reply) => {

        const data:IVideoCreate = request.body as IVideoCreate;

        try {
            const resultDataBase = await prisma.backend.updateMany({
                data: {
                    titulo:data.title,
                    link_imagem:data.link_image,
                    link_video:data.link_video
                }
            });

            return reply.status(201).send({ data: { resultDataBase }});

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    });

    app.put("/frontend", async (request, reply) => {

        const data:IVideoCreate = request.body as IVideoCreate;

        try {
            const resultDataBase = await prisma.frontend.updateMany({
                data: {
                    titulo:data.title,
                    link_imagem:data.link_image,
                    link_video:data.link_video
                }
            });

            return reply.status(201).send({ data: { resultDataBase }});

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    });

    app.put("/mobile", async (request, reply) => {

        const data:IVideoCreate = request.body as IVideoCreate;

        try {
            const resultDataBase = await prisma.mobile.updateMany({
                data: {
                    titulo:data.title,
                    link_imagem:data.link_image,
                    link_video:data.link_video
                }
            });

            return reply.status(201).send({ data: { resultDataBase }});

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    });
}