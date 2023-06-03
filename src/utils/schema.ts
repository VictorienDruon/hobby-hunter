import { z } from "zod";

export type EditFormData = z.infer<typeof EditFormData>;

export const EditFormData = z.object({
	job: z.string().max(30, "Job should not exceed 30 characters").optional(),
	bio: z.string().max(250, "Bio should not exceed 250 characters").optional(),
	location: z
		.string()
		.max(30, "Location should not exceed 30 characters")
		.optional(),
	website: z
		.string()
		.url("Please enter a valid URL")
		.max(100, "Website should not exceed 100 characters")
		.optional()
		.or(z.literal("")),
	twitter: z
		.string()
		.max(15, "Twitter username should not exceed 15 characters")
		.optional(),
	github: z
		.string()
		.max(39, "GitHub username should not exceed 39 characters")
		.optional(),
	theme: z.enum([
		"light",
		"pink",
		"purple",
		"orange",
		"yellow",
		"green",
		"cyan",
		"blue",
		"dark",
	]),
});
