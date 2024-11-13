import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";

export default function Topics() {
	return (
		<FlexColumn>
			<FlexRow className='p-3 bg-light-secondary-secondary-container'>
				<p className='text-light-secondary-on-secondary-container'>
					Topic Name
				</p>
			</FlexRow>
		</FlexColumn>
	);
}
