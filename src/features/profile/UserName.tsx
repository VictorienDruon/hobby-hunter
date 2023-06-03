interface UserNameProps {
	name: string;
	username: string;
}

const UserName = ({ name, username }: UserNameProps) => {
	return (
		<div className="flex flex-col">
			<h1 className="text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
				{name}
			</h1>
			<h2 className="text-sm text-muted-foreground md:text-lg lg:text-xl">
				@{username}
			</h2>
		</div>
	);
};

export default UserName;
