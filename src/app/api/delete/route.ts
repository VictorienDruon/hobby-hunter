import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib";

export const GET = async () => {
	const session = await getServerSession(authOptions);
	const id = session?.user?.id;
	const username = session?.user?.name;

	if (!id) {
		return NextResponse.json({ error: "Not authorized" }, { status: 401 });
	}

	try {
		await prisma.userAlbum.deleteMany({
			where: {
				username: username,
			},
		});
		await prisma.user.delete({
			where: {
				id: id,
			},
			include: {
				accounts: true,
				sessions: true,
				followers: true,
				following: true,
				albums: true,
			},
		});
		await prisma.userInfos.delete({
			where: {
				username: username,
			},
		});
		return NextResponse.json({ deleted: true });
	} catch (e) {
		console.error(e);
		return NextResponse.json(
			{ error: "Invalid username" },
			{ status: 401 }
		);
	}
};
