Posts = new Mongo.Collection("posts");

Posts.allow({
  insert: function (userId, post) {
    return userId && post.owner === userId;
  },
  update: function (userId, post, fields, modifier) {
    if (userId !== post.owner)
      return false;

    return true;
  },
  remove: function (userId, post) {
    if (userId !== post.owner)
      return false;

    return true;
  }
});