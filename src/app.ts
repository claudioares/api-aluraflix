import fastify, { FastifyInstance } from "fastify"
import cors from "@fastify/cors";
import { getVideos } from "./routes/getvideos";
import { createVideo } from "./routes/cretevideos";
import { deleteVideo } from "./routes/deletevideo";
import { updateVideos } from "./routes/updatevideo";


export class App {
    private app: FastifyInstance;
    constructor() {
        this.app = fastify()
    }


    listen(){
        this.app.listen({
            host: '0.0.0.0',
            port: process.env.PORT ? Number(process.env.PORT) : 3333,
        }).then(()=>console.log("HTTP Server running..."));
    };

    register(){
        this.app.register(cors, {
            origin: "*",
            methods: ['POST', 'DELETE', 'GET']
        })
      
        this.app.register(getVideos);
        this.app.register(createVideo);
        this.app.register(updateVideos);
        this.app.register(deleteVideo);
    }
}