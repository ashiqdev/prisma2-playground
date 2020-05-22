const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // prisma client queries will go here
//   const user = await prisma.user.create({
//     data: {
//       name: "Test man",
//       email: "test@test.com",
//       posts: {
//         create: { title: "Hello World" },
//       },
//       profile: {
//         create: { bio: "I like turtles" },
//       },
//     },
//   });

//   console.log({ user });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
