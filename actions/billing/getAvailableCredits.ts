"use server"
import { auth } from "@clerk/nextjs/server"
import prisma from "@/lib/prisma"


export async function GetAvailbleCredits () {
  const {userId} = auth();
  if (!userId) {
    throw new Error("unathanticated");
  };
  const balance = await prisma.userBalance.findUnique({
    where: { userId },
  });

  if(!balance) return -1;
  return balance.credits;
}