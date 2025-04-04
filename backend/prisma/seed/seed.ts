import { mono, mono_useer } from "./mono";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main() {
    console.log('monosillab...');
    // Delete all existing monoUseer 
    await prisma.monoUseer.deleteMany();
    // Delete all existing monosillab
    await prisma.monosillab.deleteMany();


    for (let seed of mono){
        await prisma.monosillab.create({
            data: {
                name: seed.name,
                order: seed.order
            }
        });
    }

    for (let seed of mono_useer){
        await prisma.monoUseer.create({
            data: {
                nom: seed.nom,
                userId: seed.userId,
                icon: seed.icon
            }
        });
        
    }
    
}

main()
    .then(async () => {
        
        await prisma.$disconnect();
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })