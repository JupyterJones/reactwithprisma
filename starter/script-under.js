//import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main()
{
    //const allData = await prisma.PROJECT.allData({
    const allUsers = await prisma.data.allData({
        include: { PROJECT: true },
    })
    // use `console.dir` to print nested objects
    console.dir(allData, { depth: null })
}

main()
    .catch((e) =>
    {
        throw e
    })
    .finally(async () =>
    {
        await prisma.$disconnect()
    })
