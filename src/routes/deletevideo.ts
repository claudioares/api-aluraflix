import { FastifyInstance } from "fastify";
import { prisma } from "../db/prisma.config";

interface IDeleteVideoId {
    id:string
}
export async function deleteVideo (app: FastifyInstance) {

    app.delete("/backend", async (request, reply) => {
        const { id }:IDeleteVideoId = request.body as IDeleteVideoId;

        try {

            const BackEnd = await prisma.backend.deleteMany({
                where: {
                    id
                }
            })

            return reply.status(201).send({BackEnd});
            
        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during execution!" });
        }
    });

    app.delete("/frontend", async (request, reply) => {
        const { id }:IDeleteVideoId = request.body as IDeleteVideoId;

        try {

            const FrontEnd = await prisma.frontend.deleteMany({
                where: {
                    id
                }
            })
            
            return reply.status(201).send({FrontEnd});

        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during execution!" });
        }
    });

    app.delete("/mobile", async (request, reply) => {
        const { id }:IDeleteVideoId = request.body as IDeleteVideoId;

        try {

            const Mobile = await prisma.mobile.deleteMany({
                where: {
                    id
                }
            })
            
            return reply.status(201).send({Mobile});

        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during execution!" });
        }
    });
}