import { capitalizeFirstLetter } from "@/lib/helpers";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface ThemeProps {
	name: string;
	theme: string;
}

const Theme = ({ name, theme }: ThemeProps) => {
	return (
		<FormItem>
			<FormLabel className="flex flex-col gap-1 items-center [&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>span]:text-primary">
				<FormControl>
					<RadioGroupItem value={name} className="sr-only" />
				</FormControl>
					<div className="h-10 w-10 rounded-3xl border-2 border-muted p-1 hover:border-muted-foreground">
						<div
							className={`h-full w-full rounded-3xl bg-gradient-to-tr ${theme}`}
						/>
					</div>
					<span className="text-center text-sm text-muted-foreground font-normal">
						{capitalizeFirstLetter(name)}
					</span>
			</FormLabel>
		</FormItem>
	);
};

export default Theme;
