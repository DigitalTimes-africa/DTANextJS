export default function SubscribeSection() {
    return(
        <div className="p-9 bg-[#e8f3ec]">
			<div className="flex xmd:flex-row flex-col justify-between">
				<div className="xmd:w-5/12 w-full pb-4 xmd:pb-0 px-4">
					<h5 className="font-bold text-xl text-primary-black">Be updated!</h5>
						<p className="text-base text-primary-black">Subscribe to our newsletter to receive news updates by email.</p>
				</div>
				<div className="xmd:w-7/12 w-full px-4">
					<div className="flex flex-wrap">
						<div className="w-full">
							<input type="text" className="w-full h-10 rounded px-5 py-2 outline-none text-primary-black" placeholder="Enter your e-mail address" />
						</div>
						<div className="w-full mt-2">
							<button type="submit" className="w-full bg-[#03a87c] hover:bg-primary-blue dark:hover:bg-btn-hover rounded text-primary-white px-5 py-2.5">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
} 