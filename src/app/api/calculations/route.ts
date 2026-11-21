import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const calculations = await prisma.calculation.findMany({
      where: { userId: (session.user as any).id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(calculations);
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { calculatorId, calculatorName, inputData, resultData } = body;

    const calculation = await prisma.calculation.create({
      data: {
        userId: (session.user as any).id,
        calculatorId,
        calculatorName,
        inputData: JSON.stringify(inputData),
        resultData: JSON.stringify(resultData),
      },
    });

    return NextResponse.json(calculation, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
