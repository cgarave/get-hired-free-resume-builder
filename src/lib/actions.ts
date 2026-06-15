'use server'
import { revalidatePath } from "next/cache";
import prisma from '@/lib/prisma'

export async function addToDownloadsCount() {
    await prisma.downloadsCount.update({
        where: { id: 2 }, 
        data: {
            count: {
                increment: 1
            }
        }
    })
    revalidatePath('/')
}

export async function addToReviewedResumeCount() {
    await prisma.reviewedResume.update({
        where: {id: 2},
        data: {
            count: {
                increment: 1
            }
        }
    })
    revalidatePath('/')
}