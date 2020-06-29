import { Router } from "express";

const router = Router();

router.delete("/:userId", async (req, res) => {
  const user = await req.context.models.User.findById(req.params.userId);
  if (user) await user.remove();
  return res.send(user);
});

router.get("/", async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

// router.get("/:userId", async (req, res) => {
//   const user = await req.context.models.User.findById(req.params.userId);
//   return res.send(user);
// });

router.post("/", async (req, res) => {
  const user = await req.context.models.User.create({
    userName: req.body.userName,
    profilePhoto: req.body.profilePhoto,
    email: req.body.email,
    password: req.body.password,
  });
  res.send(user);
});

router.get("/:login", async (req, res) => {
  const user = await req.context.models.User.findByLogin(req.params.login);
  return res.send(user);
});

export default router;
