import { PrismaClient } from '@prisma/client'

class User {
    constructor() {
        this.prisma = new PrismaClient()
    }

    getUsers() {
        return this.prisma.user.findMany()
    }

    getUser(id) {
        return this.prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })
    }

    addUser(input) {
        return this.prisma.user.create({
            data: {
                name: input.name,
                email: input.email
            }
        })
    }
    
    updateUser(id, input) {
        return this.prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name: input.name,
                email: input.email
            }
        })
    }

    deleteUser(id) {
        return this.prisma.user.delete({
            where: {
                id: Number(id)
            }
        })
    }
}

export default new User()