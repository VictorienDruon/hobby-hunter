import {
	FormField,
	FormItem,
	FormLabel,
	FormDescription,
} from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import Theme from "./Theme";
import { themes } from "@/features/profile/banner/themes";

const Themes = ({ control }: { control: any }) => {
	return (
		<FormField
			control={control}
			name="theme"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Theme</FormLabel>
					<FormDescription>
						Select the theme for the banner.
					</FormDescription>
					<RadioGroup
						onValueChange={field.onChange}
						defaultValue={field.value}
						className="flex flex-wrap gap-x-8 gap-y-2"
					>
						{Object.entries(themes).map(([name, theme]) => (
							<Theme key={name} name={name} theme={theme} />
						))}
					</RadioGroup>
				</FormItem>
			)}
		/>
	);
};

export default Themes;
