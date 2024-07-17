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

// src/routes/getvideos.ts
var getvideos_exports = {};
__export(getvideos_exports, {
  getVideos: () => getVideos
});
module.exports = __toCommonJS(getvideos_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getVideos
});
