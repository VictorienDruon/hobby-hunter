import { useFormContext } from "react-hook-form";
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
}

const Field = ({ name, placeholder }: FieldProps) => {
	const { control, register } = useFormContext();
	return (
		<FormField
			control={control}
			name={name}
			render={() => (
				<FormItem className="w-full">
					<FormLabel>{capitalizeFirstLetter(name)}</FormLabel>
					<FormControl>
						{name !== "bio" ? (
							<Input
								placeholder={placeholder}
								{...register(name)}
							/>
						) : (
							<Textarea
								placeholder={placeholder}
								className="resize-none"
								{...register(name)}
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
