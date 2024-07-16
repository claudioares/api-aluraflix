import  { FastifyInstance } from "fastify"
import { prisma } from "../db/prisma.config";

export async function getVideos (app: FastifyInstance) {

    app.get("/frontend", async (_, reply)=>{

        try {
            const FontEnd = await prisma.frontend.findMany();
            return reply.status(201).send(FontEnd);
            
        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during creation!" });
        }
    });

    app.get("/backend", async (_, reply)=>{

        try {
            const BackEnd = await prisma.backend.findMany();
            return reply.status(201).send(BackEnd);
            
        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during creation!" });
        }
    });

    app.get("/mobile", async (_, reply)=>{

        try {
            const Mobile = await prisma.mobile.findMany();
            return reply.status(201).send(Mobile);
            
        } catch (error) {
            console.error('Error during event create:', error);
            reply.status(500).send({ error: "Error during creation!" });
        }
    });
    
}