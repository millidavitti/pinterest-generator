import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import SideBar from "./components/side-bar";
export default function Home() {
	return (
		<FlexRow className='w-full h-full p-3 gap-4 bg-light-surface-surface-container'>
			<SideBar />
			<FlexColumn className='w-full'>Right</FlexColumn>
		</FlexRow>
	);
}
