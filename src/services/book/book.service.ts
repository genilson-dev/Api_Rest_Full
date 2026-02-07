import { bankPrisma } from "../../prisma/index.js";
export function createBook(userId: string, data: any) {
    return bankPrisma.book.create({
        data: { ...data, userId }
    })
}

export function getBookService(userId: string, data: any) {
    return bankPrisma.book.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            title: true,
            author: true,
            year: true,
            userId: true
        },
        orderBy: {

        }
    })
}

export function UpdateBookService(id: string, data: any){
    return bankPrisma.book.update({
        where: { id }, data
    })
}

export function deleteBookService(id: string){
    return bankPrisma.book.delete({
        where: {
        id
    }
    })
}
