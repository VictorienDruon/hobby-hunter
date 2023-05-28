import { capitalizeFirstLetter } from "@/utils/text";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FieldProps {
	name: string;
	placeholder: string;
	form: any;
}

const Field = ({ name, placeholder, form }: FieldProps) => {
	return (
		<FormField
			control={form.control}
			name={name}
			render={() => (
				<FormItem className="w-full">
					<FormLabel>{capitalizeFirstLetter(name)}</FormLabel>
					<FormControl>
						{name !== "bio" ? (
							<Input
								placeholder={placeholder}
								{...form.register(name)}
							/>
						) : (
							<Textarea
								placeholder={placeholder}
								className="resize-none"
								{...form.register(name)}
							/>
						)}
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default Field;
