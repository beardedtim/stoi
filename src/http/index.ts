import express from "express";
import { WorkflowClient } from "@temporalio/client";
import { browserRecording } from "../processors/workflows";
import { randomUUID } from "crypto";

const server = express();

export default server
  .post("/tasks", async (req, res) => {
    const client = new WorkflowClient();

    const uuid = randomUUID({ disableEntropyCache: true });

    const _handle = await client.start(browserRecording, {
      taskQueue: "browser-recording",
      args: [{ url: "https://some.internal.url" }],
      workflowId: uuid,
    });

    res.json({
      data: await _handle.describe(),
    });
  })
  .get("/tasks/:id", async (req, res) => {
    const client = new WorkflowClient();

    const handle = await client.getHandle(req.params.id);

    res.json({
      data: await handle.describe(),
    });
  })
  .post("/tasks/:id/cancel", async (req, res) => {
    const client = new WorkflowClient();

    const handle = await client.getHandle(req.params.id);

    res.json({
      data: await handle.cancel(),
    });
  });
