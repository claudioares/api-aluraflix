"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/cretevideos.ts
var cretevideos_exports = {};
__export(cretevideos_exports, {
  createVideo: () => createVideo
});
module.exports = __toCommonJS(cretevideos_exports);

// src/db/prisma.config.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createVideo
});
