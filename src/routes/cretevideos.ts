import { FastifyInstance } from "fastify"
import { prisma } from "../db/prisma.config";


interface IVideoCreate {
    title: string,
    link_image: string,
    link_video: string,
    categorie: string,
    description?: string
}

export async function createVideo(app: FastifyInstance) {

    app.post("/backend", async (request, reply) => {

        const data:IVideoCreate = request.body as IVideoCreate;

        try {
            const BackEnd = await prisma.backend.create({
                data: {
                    titulo:data.title,
                    link_imagem:data.link_image,
                    link_video:data.link_video,
                    categorie:data.categorie,
                    description:data.description
                }
            });

            return reply.status(201).send({BackEnd});

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    });

    app.post("/frontend", async (request, reply) => {

        const data:IVideoCreate = request.body as IVideoCreate;

        try {
            const FrontEnd = await prisma.frontend.create({
                data: {
                    titulo:data.title,
                    link_imagem:data.link_image,
                    link_video:data.link_video,
                    categorie:data.categorie,
                    description:data.description
                }
            });

            return reply.status(201).send({FrontEnd});

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    });

    app.post("/mobile", async (request, reply) => {

        const data:IVideoCreate = request.body as IVideoCreate;

        try {
            const Mobile = await prisma.mobile.create({
                data: {
                    titulo:data.title,
                    link_imagem:data.link_image,
                    link_video:data.link_video,
                    categorie:data.categorie,
                    description:data.description
                }
            });

            return reply.status(201).send({Mobile});

        } catch (error) {
            console.error('Error during event create:', error);
            return reply.status(500).send({ error: "Error during creation!" });
        }
    });
}