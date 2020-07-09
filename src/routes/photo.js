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
    user: req.body.user,
  });

  router.get("/:user", async (req, res) => {
    const photos = await req.context.models.Photo.find({
      user: req.params.user,
    });
    return res.send(photos);
  });

  return res.send(photo);
});

router.delete("/:photoId", async (req, res) => {
  const photo = await req.context.models.Photo.findById(req.params.photoId);
  await photo.remove();
  return res.send(photo);
});

export default router;
