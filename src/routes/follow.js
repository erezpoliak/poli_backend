import Router from "express";

const router = Router();

router.post("/", async (req, res) => {
  const follow = await req.context.models.Follow.create({
    user: req.body.user,
    followingUser: req.body.followingUser,
  });
  return res.send(follow);
});

router.get("/", async (req, res) => {
  const follows = await req.context.models.Follow.find();
  return res.send(follows);
});

router.delete("/:id", async (req, res) => {
  const follow = await req.context.models.Follow.findById(req.params.id);
  await follow.remove();
  return res.send(follow);
});

export default router;
