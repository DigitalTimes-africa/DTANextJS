import Link from "next/link"
export default function ContributorSection() {
    return(
        <div className="2xsm:px-9 py-9 p-2 bg-gradient-to-r from-blue-300 to-blue-500 text-white">
	<div className="flex xmd:flex-row flex-col justify-between">
		<div className="w-full mb-2 xmd:mb-0 px-4">
			<h5 className="font-bold text-2xl">Become a contributor</h5>
			<p className="text-base mt-2">
				Do you have an article that can be relevant to the African
				Tech space?
			</p>
			<p className="mt-4">Submit your news stories, articles or press releases to  
				<Link href="mailto:editor@digitaltimes.africa" className="text-blue-100 hover:text-blue-200">
					<strong> editor@digitaltimes.africa</strong>
				</Link>
			</p>
			<div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
				<h6 className="font-bold text-lg text-blue-700">Why contribute?</h6>
				<ul className="list-disc text-sm list-inside mt-2 text-blue-700">
					<li>Share your knowledge and expertise with others</li>
					<li>Gain exposure and recognition in the African Tech community</li>
					<li>Help shape the future of African Tech</li>
				</ul>
			</div>
		</div>
	</div>
</div>
    )
} 