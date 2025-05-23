// TEMPORARY DATA
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: "......", userId: 1 },
  { id: 2, title: "Post 2", body: "......", userId: 1 },
  { id: 3, title: "Post 3", body: "......", userId: 2 },
  { id: 4, title: "Post 4", body: "......", userId: 2 },
];
export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find((post) => post.id === id);
};

export const getUser = async (id) => {
  return users.find((user) => user.id === id);
};
