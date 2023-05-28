interface FollowsProps {
	following: number;
	followers: number;
}

const Follows = ({ following, followers }: FollowsProps) => {
	return (
		<div className="flex gap-3 text-muted-foreground">
			<p>
				<strong className="text-foreground">{following}</strong>{" "}
				Following
			</p>
			<p>
				<strong className="text-foreground">{followers}</strong>{" "}
				{followers > 1 ? "Followers" : "Follower"}
			</p>
		</div>
	);
};

export default Follows;
