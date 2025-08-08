import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const photos = await req.context.models.Photo.find();
  return res.send(photos);
});

router.post("/", async (req, res) => {
  const photo = await req.context.models.Photo.create({
    title: req.body.title,
    url: req.body.url,
    user: req.body.user,
  });
  return res.send(photo);
});

router.get("/:userId", async (req, res) => {
  const photos = await req.context.models.Photo.find({
    "user._id": req.params.userId,
  });
  return res.send(photos);
});

router.delete("/:photoId", async (req, res) => {
  const photo = await req.context.models.Photo.findById(req.params.photoId);
  await photo.remove();
  return res.send(photo);
});

export default router;
