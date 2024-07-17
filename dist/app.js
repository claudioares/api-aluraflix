"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  App: () => App
});
module.exports = __toCommonJS(app_exports);
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

// src/db/prisma.config.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/routes/getvideos.ts
async function getVideos(app) {
  app.get("/frontend", async (_, reply) => {
    try {
      const FontEnd = await prisma.frontend.findMany();
      return reply.status(201).send(FontEnd);
    } catch (error) {
      console.error("Error during event create:", error);
      reply.status(500).send({ error: "Error during creation!" });
    }
  });
  app.get("/backend", async (_, reply) => {
    try {
      const BackEnd = await prisma.backend.findMany();
      return reply.status(201).send(BackEnd);
    } catch (error) {
      console.error("Error during event create:", error);
      reply.status(500).send({ error: "Error during creation!" });
    }
  });
  app.get("/mobile", async (_, reply) => {
    try {
      const Mobile = await prisma.mobile.findMany();
      return reply.status(201).send(Mobile);
    } catch (error) {
      console.error("Error during event create:", error);
      reply.status(500).send({ error: "Error during creation!" });
    }
  });
}

// src/routes/cretevideos.ts
async function createVideo(app) {
  app.post("/backend", async (request, reply) => {
    const data = request.body;
    try {
      const BackEnd = await prisma.backend.create({
        data: {
          titulo: data.title,
          link_imagem: data.link_image,
          link_video: data.link_video,
          categorie: data.categorie,
          description: data.description
        }
      });
      return reply.status(201).send({ BackEnd });
    } catch (error) {
      console.error("Error during event create:", error);
      return reply.status(500).send({ error: "Error during creation!" });
    }
  });
  app.post("/frontend", async (request, reply) => {
    const data = request.body;
    try {
      const FrontEnd = await prisma.frontend.create({
        data: {
          titulo: data.title,
          link_imagem: data.link_image,
          link_video: data.link_video,
          categorie: data.categorie,
          description: data.description
        }
      });
      return reply.status(201).send({ FrontEnd });
    } catch (error) {
      console.error("Error during event create:", error);
      return reply.status(500).send({ error: "Error during creation!" });
    }
  });
  app.post("/mobile", async (request, reply) => {
    const data = request.body;
    try {
      const Mobile = await prisma.mobile.create({
        data: {
          titulo: data.title,
          link_imagem: data.link_image,
          link_video: data.link_video,
          categorie: data.categorie,
          description: data.description
        }
      });
      return reply.status(201).send({ Mobile });
    } catch (error) {
      console.error("Error during event create:", error);
      return reply.status(500).send({ error: "Error during creation!" });
    }
  });
}

// src/routes/deletevideo.ts
async function deleteVideo(app) {
  app.delete("/backend", async (request, reply) => {
    const { id } = request.body;
    try {
      const BackEnd = await prisma.backend.deleteMany({
        where: {
          id
        }
      });
      return reply.status(201).send({ BackEnd });
    } catch (error) {
      console.error("Error during event create:", error);
      reply.status(500).send({ error: "Error during execution!" });
    }
  });
  app.delete("/frontend", async (request, reply) => {
    const { id } = request.body;
    try {
      const FrontEnd = await prisma.frontend.deleteMany({
        where: {
          id
        }
      });
      return reply.status(201).send({ FrontEnd });
    } catch (error) {
      console.error("Error during event create:", error);
      reply.status(500).send({ error: "Error during execution!" });
    }
  });
  app.delete("/mobile", async (request, reply) => {
    const { id } = request.body;
    try {
      const Mobile = await prisma.mobile.deleteMany({
        where: {
          id
        }
      });
      return reply.status(201).send({ Mobile });
    } catch (error) {
      console.error("Error during event create:", error);
      reply.status(500).send({ error: "Error during execution!" });
    }
  });
}

// src/routes/updatevideo.ts
async function updateVideos(app) {
  app.put("/backend", async (request, reply) => {
    const data = request.body;
    try {
      const resultDataBase = await prisma.backend.updateMany({
        data: {
          titulo: data.title,
          link_imagem: data.link_image,
          link_video: data.link_video
        }
      });
      return reply.status(201).send({ data: { resultDataBase } });
    } catch (error) {
      console.error("Error during event create:", error);
      return reply.status(500).send({ error: "Error during creation!" });
    }
  });
  app.put("/frontend", async (request, reply) => {
    const data = request.body;
    try {
      const resultDataBase = await prisma.frontend.updateMany({
        data: {
          titulo: data.title,
          link_imagem: data.link_image,
          link_video: data.link_video
        }
      });
      return reply.status(201).send({ data: { resultDataBase } });
    } catch (error) {
      console.error("Error during event create:", error);
      return reply.status(500).send({ error: "Error during creation!" });
    }
  });
  app.put("/mobile", async (request, reply) => {
    const data = request.body;
    try {
      const resultDataBase = await prisma.mobile.updateMany({
        data: {
          titulo: data.title,
          link_imagem: data.link_image,
          link_video: data.link_video
        }
      });
      return reply.status(201).send({ data: { resultDataBase } });
    } catch (error) {
      console.error("Error during event create:", error);
      return reply.status(500).send({ error: "Error during creation!" });
    }
  });
}

// src/app.ts
var App = class {
  app;
  constructor() {
    this.app = (0, import_fastify.default)();
  }
  listen() {
    this.app.listen({
      host: "0.0.0.0",
      port: process.env.PORT ? Number(process.env.PORT) : 3333
    }).then(() => console.log("HTTP Server running..."));
  }
  register() {
    this.app.register(import_cors.default, {
      origin: "*",
      methods: ["POST", "DELETE", "GET"]
    });
    this.app.register(getVideos);
    this.app.register(createVideo);
    this.app.register(updateVideos);
    this.app.register(deleteVideo);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
