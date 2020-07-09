import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const likes = await req.context.models.Like.find({});
  return res.send(likes);
});

router.post("/", async (req, res) => {
  const like = await req.context.models.Like.create({
    user: req.body.user,
    photo: req.body.photo,
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
    "userWhoLikedIt._id": req.params.userId,
    "photo._id": req.params.photoId,
  });
  return res.send(like);
});

export default router;
