import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const likes = await req.context.models.Like.find({});
  return res.send(likes);
});

router.post("/", async (req, res) => {
  const like = await req.context.models.Like.create({
    userId: req.body.userId,
    photoId: req.body.photoId,
    userWhoLikedIt: req.body.userWhoLikedIt,
  });
  return res.send(like);
});

router.delete("/:id", async (req, res) => {
  const like = await req.context.models.Like.findById(req.params.id);
  await like.remove();
  return res.send(like);
});

router.get("/:userId/:photoId", async (req, res) => {
  const like = await req.context.models.Like.find({
    userId: req.params.userId,
    photoId: req.params.photoId,
  });
  return res.send(like);
});

export default router;
