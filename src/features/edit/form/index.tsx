"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditFormData } from "@/utils/schema";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import Field from "./components/Field";
import { Button } from "@/components/ui/button";
import Themes from "./components/Themes";
import { User } from "@/types/User";

const EditForm = ({ user }: { user: User }) => {
	const { name, infos } = user;

	const defaultValues: Partial<EditFormData> = {
		name: name,
		job: infos.job,
		bio: infos.bio,
		location: infos.location,
		website: infos.website,
		twitter: infos.twitter,
		theme: infos.theme,
	};

	const form = useForm<EditFormData>({
		resolver: zodResolver(edit),
		defaultValues,
		mode: "onChange",
	});

	const onSubmit = (data: EditFormData) => {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	};

	return (
		<div className="flex justify-center">
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-[1200px]">
				<Field name="name" placeholder="John Doe" form={form} />

				<Field
					name="bio"
					placeholder="Tell us about yourself..."
					form={form}
				/>

				<div className="flex w-full flex-col justify-between gap-8 sm:flex-row">
					<Field
						name="job"
						placeholder="Software Engineer"
						form={form}
					/>

					<Field
						name="location"
						placeholder="Paris, France"
						form={form}
					/>
				</div>

				<Field
					name="website"
					placeholder="https://john-doe.com"
					form={form}
				/>

				<div className="flex w-full flex-col justify-between gap-8 sm:flex-row">
					<Field name="twitter" placeholder="JohnDoe" form={form} />

					<Field name="github" placeholder="john_doe" form={form} />
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
