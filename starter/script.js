const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // create a post
  const post = await prisma.post.create({
    data: {
      title: "Prisma makes database easy",
      author: {
        connect: { email: "maria@prisma.io" },
      },
    },
  });

  // print the created post in console
  console.log({ post });

  // update the post
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true, title: "Prisma makes database difficult" },
  });

  // delete the post
  // const post = await prisma.post.delete({
  //   where: { id: 3 },
  // });

  // fetch all users with their posts
  const allUsers = await prisma.user.findMany({ include: { posts: true } });

  // use console.dir to print nested objects
  console.dir(allUsers, { depth: null });

  // fetch all posts
  const allPosts = await prisma.post.findMany();

  console.log({ allPosts });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
