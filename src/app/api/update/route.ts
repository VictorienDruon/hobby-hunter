import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib";

export const POST = async (request: NextRequest) => {
	const session = await getServerSession(authOptions);
	const username = session?.user?.name;

	if (!username) {
		return NextResponse.json({ error: "Not authorized" }, { status: 401 });
	}

	const data = await request.json();
	const update = await prisma.userInfos.update({
		where: {
			username: username,
		},
		data: data,
	});
	revalidatePath("/" + username);
	return NextResponse.json({ revalidated: true, now: Date.now() });
};
