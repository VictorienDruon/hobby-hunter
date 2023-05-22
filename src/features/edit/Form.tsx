"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { edit, EditFormData } from "@/lib/schema";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const defaultValues: Partial<EditFormData> = {};

const EditForm = () => {
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
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={() => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="John Doe"
									{...form.register("name")}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="bio"
					render={() => (
						<FormItem>
							<FormLabel>Bio</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us a little bit about yourself"
									className="resize-none"
									{...form.register("bio")}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex w-full flex-col justify-between gap-8 sm:flex-row">
					<FormField
						control={form.control}
						name="location"
						render={() => (
							<FormItem className="w-full">
								<FormLabel>Location</FormLabel>
								<FormControl>
									<Input
										placeholder="Paris, France"
										{...form.register("location")}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="website"
						render={() => (
							<FormItem className="w-full">
								<FormLabel>Website</FormLabel>
								<FormControl>
									<Input
										placeholder="https://example.com"
										{...form.register("website")}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex w-full flex-col justify-between gap-8 sm:flex-row">
					<FormField
						control={form.control}
						name="twitter"
						render={() => (
							<FormItem className="w-full">
								<FormLabel>Twitter</FormLabel>
								<FormControl>
									<Input
										placeholder="john_doe"
										{...form.register("twitter")}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="github"
						render={() => (
							<FormItem className="w-full">
								<FormLabel>Github</FormLabel>
								<FormControl>
									<Input
										placeholder="john_doe"
										{...form.register("github")}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex w-full justify-end">
					<Button type="submit">Save Changes</Button>
				</div>
			</form>
		</Form>
	);
};

export default EditForm;
