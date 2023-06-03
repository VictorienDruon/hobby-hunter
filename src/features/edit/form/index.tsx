"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditFormData } from "@/utils/schema";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Field from "./components/Field";
import { UserInfos } from "@prisma/client";
import Themes from "./components/Themes";
import { Theme } from "@/features/profile/banner/themes";

const EditForm = ({ userInfos }: { userInfos: UserInfos }) => {
	const defaultValues: Partial<EditFormData> = {
		job: userInfos.job ?? undefined,
		location: userInfos.location ?? undefined,
		bio: userInfos.bio ?? undefined,
		website: userInfos.website ?? undefined,
		twitter: userInfos.twitter ?? undefined,
		github: userInfos.github ?? undefined,
		theme: userInfos.theme as Theme,
	};

	const form = useForm<EditFormData>({
		resolver: zodResolver(EditFormData),
		defaultValues,
		mode: "onChange",
	});

	const onSubmit = async (data: EditFormData) => {
		const update = await fetch("/api/update", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const res = await update.json();
		if (res.error) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "An error occured, please try again later",
			});
		} else {
			toast({
				title: "Success!",
				description: "Your profile has been updated",
			});
		}
	};

	return (
		<div className="flex justify-center">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full max-w-[1200px] space-y-8"
				>
					<div className="flex w-full flex-col justify-between gap-8 sm:flex-row">
						<Field name="job" placeholder="Software Engineer" />

						<Field name="location" placeholder="Paris, France" />
					</div>

					<Field name="bio" placeholder="Tell us about yourself..." />

					<Field name="website" placeholder="https://john-doe.com" />

					<div className="flex w-full flex-col justify-between gap-8 sm:flex-row">
						<Field name="twitter" placeholder="JohnDoe" />

						<Field name="github" placeholder="john_doe" />
					</div>

					<Themes control={form.control} />

					<div className="flex w-full justify-end">
						<Button type="submit">Save Changes</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default EditForm;
