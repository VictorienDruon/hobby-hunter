interface FollowsProps {
	following: number;
	follower: number;
}

const Follows = ({ following, follower }: FollowsProps) => {
	return (
		<div className="flex gap-3 text-muted-foreground">
			<p>
				<strong className="text-foreground">{following}</strong>{" "}
				Following
			</p>
			<p>
				<strong className="text-foreground">{follower}</strong>{" "}
				{follower > 1 ? "Followers" : "Follower"}
			</p>
		</div>
	);
};

export default Follows;
