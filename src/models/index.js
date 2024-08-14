const Post = require("./Post");
const User = require("./User");


Post.belongsTo(User) //--> Post ---> userId
User.hasMany(Post)

