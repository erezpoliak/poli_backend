import Router from "express";

const router = Router();

router.get("/photos/:photoId", async (req, res) => {
  const comment = await req.context.models.Comment.findByPhotoId(
    req.params.photoId
  );
  return res.send(comment);
});

router.get("/", async (req, res) => {
  const comments = await req.context.models.Comment.find();
  return res.send(comments);
});

router.post("/", async (req, res) => {
  const comment = await req.context.models.Comment.create({
    userId: req.body.userId,
    photoId: req.body.photoId,
    commentedUserId: req.body.commentedUserId,
    comment: req.body.comment,
  });
  return res.send(comment);
});

router.delete("/:commentId", async (req, res) => {
  const comment = await req.context.models.Comment.findById(
    req.params.commentId
  );
  if (comment) await comment.remove();
  res.send(comment);
});

export default router;
