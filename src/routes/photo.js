import { Router } from "express";
import routes from ".";

const router = Router();

router.get("/", async (req, res) => {
  const photos = await req.context.models.Photo.find();
  return res.send(photos);
});

router.post("/", async (req, res) => {
  const photo = await req.context.models.Photo.create({
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
  });

  return res.send(photo);
});

export default router;
