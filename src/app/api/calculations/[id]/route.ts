import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: calculationId } = await params;
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any).id;

    // Verify ownership
    const calculation = await prisma.calculation.findUnique({
      where: { id: calculationId },
    });

    if (!calculation || calculation.userId !== userId) {
      return NextResponse.json({ message: "Not found or unauthorized" }, { status: 404 });
    }

    await prisma.calculation.delete({
      where: { id: calculationId },
    });

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
