import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const msgs = await req.context.models.Message.find();
  return res.send(msgs);
});

router.get("/:messageId", async (req, res) => {
  const msg = await req.context.models.Message.findById(req.params.messageId);
  return res.send(msg);
});

router.post("/", async (req, res) => {
  const msg = await req.context.models.Message.create({
    user: req.body.userId,
    text: req.body.text,
  });
  return res.send(msg);
});

router.delete("/:messageId", async (req, res) => {
  const msg = await req.context.models.Message.findById(req.params.messageId);
  if (msg) await msg.remove();
  return res.send(msg);
});

export default router;
