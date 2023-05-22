import { z } from "zod";

export type EditFormData = z.infer<typeof edit>;

export const edit = z.object({
	name: z.string().min(2, "Too short").max(20, "Too long"),
	bio: z.string().max(100, "Too long").optional(),
	location: z.string().max(15, "Too long").optional(),
	website: z.string().url("Invalid website url").nullable().optional(),
	twitter: z.string().max(20, "Too long").optional(),
	github: z.string().max(20, "Too long").optional(),
});
