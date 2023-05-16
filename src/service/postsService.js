const postsData = require("../data/postsData");

exports.getPosts = function () {
  return postsData.getPosts();
};

exports.getPost = function (id) {
  return postsData.getPosts(id);
};

exports.savePost = function (post) {
  return postsData.savePost(post);
};

exports.updatedPost = function (id, post) {
  return postsData.updatedPost(id, post);
};

exports.deletePost = function (id) {
  return postsData.deletePost(id);
};
