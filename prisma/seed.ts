import { prisma } from '@/database/prisma'
import { hash } from 'bcrypt';
import { env } from '@/env';

async function seed() {
    const passwordHash = await hash(env.PASSWORD, 10);

    await prisma.users.createMany({

        // ADVISORY: This seeding script is intended for development and testing purposes.
        // The password used for all seeded users is a common password defined in `env.PASSWORD`.
        // This setup is for convenience in a development environment and should NOT reflect
        // a production security model where unique, strong passwords are required.

        data: [
            { name: "Ana", email: "ana@email.com", password: passwordHash },
            { name: "Bruno", email: "bruno@email.com", password: passwordHash },
            { name: "Carlos", email: "carlos@email.com", password: passwordHash },
            { name: "Daniela", email: "daniela@email.com", password: passwordHash },
            { name: "Eduardo", email: "eduardo@email.com", password: passwordHash },
            { name: "Fernanda", email: "fernanda@email.com", password: passwordHash },
            { name: "Gustavo", email: "gustavo@email.com", password: passwordHash },
            { name: "Helena", email: "helena@email.com", password: passwordHash },
            { name: "Igor", email: "igor@email.com", password: passwordHash },
            { name: "Juliana", email: "juliana@email.com", password: passwordHash },
            { name: "Kevin", email: "kevin@email.com", password: passwordHash },
            { name: "Larissa", email: "larissa@email.com", password: passwordHash },
            { name: "Marcos", email: "marcos@email.com", password: passwordHash },
            { name: "Natália", email: "natalia@email.com", password: passwordHash },
            { name: "Otávio", email: "otavio@email.com", password: passwordHash },
        ]
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})