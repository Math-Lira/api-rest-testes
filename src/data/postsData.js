const database = require("../infra/database");

exports.getPosts = function () {
  return database.query("select * from public.post");
};

exports.getPost = function (id) {
  return database.oneOrNone("select * from public.post where id = $1 ", [id]);
};

exports.savePost = function (post) {
  return database.one(
    "insert into public.post (title, content) values ($1, $2) returning *",
    [post.title, post.content]
  );
};

exports.updatedPost = function (id, post) {
  return database.none(
    "update public.post set title = $1, content = $2 where id = $3",
    [post.title, post.content, id]
  );
};

exports.deletePost = function (id) {
  return database.none("delete from public.post where id = $1", [id]);
};
