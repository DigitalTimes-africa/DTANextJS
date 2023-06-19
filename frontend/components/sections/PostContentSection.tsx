import Link from "next/link";
import ContributorSection from "./ContributorSection";
import SubscribeSection from "./SubscribeSection";

export default function PostContentSection() {

    return(
        <div className="">
            <article className="article-post first-letter:float-left first-letter:font-gelasio first-letter:text-[5.5em] first-letter:leading-[0.85] first-letter:mr-[0.2em] first-letter:align-top">
				<p>
					Beal Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift stealth mass market seed money rockstar niche market marketing buzz market.
				</p>
				<p>
					Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.
				</p>
				<h2>Freemium non-disclosure agreement h2</h2>
				<p>
					Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.
				</p>
				<h3>Blockquote Lorem ipsum dolor h3</h3>
				<p>
					Freemium non-disclosure agreement <a href="#">anstro</a> lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.
				</p>
				<ol>
					<li>business facebook</li>
					<li>agreement equity</li>
					<li>startup nteraction</li>
					<li>experience model</li>
				</ol>
				<p>
					Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift stealth mass market seed money rockstar niche market marketing buzz market.
				</p>
				<blockquote>
					Blockquote Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic voluptatum non, facilis aliquam ipsam esse sapiente nihil maiores aut reprehenderit quia, in eum consequuntur dicta. Ipsum vitae omnis officia!
				</blockquote>
				<p>
					Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.
				</p>
				<ul>
					<li>facebook termsheet</li>
					<li>equity technology</li>
					<li>Interaction design</li>
					<li>Necessitatibus hic</li>
				</ul>
				<p>
					Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.
				</p>
			</article>
			<ContributorSection />
			<article className="article-post pt-8">
				<p>
					Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.
				</p>
				<h4>Holy grail funding h4</h4>
				<p>
					Holy grail funding non-disclosure agreement advisor ramen bootstrapping ecosystem. Beta crowdfunding iteration assets business plan paradigm shift stealth mass market seed money rockstar niche market marketing buzz market.
				</p>
				<p>
					Burn rate release facebook termsheet equity technology. Interaction design rockstar network effects handshake creative startup direct mailing. Technology influencer direct mailing deployment return on investment seed round.
				</p>
				<h5>Termsheet business h5</h5>
				<p>
					Termsheet business model canvas user experience churn rate low hanging fruit backing iteration buyer seed money. Virality release launch party channels validation learning curve paradigm shift hypotheses conversion. Stealth leverage freemium venture startup business-to-business accelerator market.
				</p>
				<h6> Burn rate release h6</h6>
				<p>
					Freemium non-disclosure agreement lean startup bootstrapping holy grail ramen MVP iteration accelerator. Strategy market ramen leverage paradigm shift seed round entrepreneur crowdfunding social proof angel investor partner network virality.
				</p>
			</article>
            <SubscribeSection />
			<section className="flex flex-row xmd:items-center py-8">
				<p className="font-semibold pr-4">Tags:</p>
				<ul className="flex flex-row flex-wrap gap-4 capitalize">
					<li className="bg-btn-black rounded py-2 px-4 hover:bg-primary-blue dark:hover:bg-btn-hover"><Link href="/tag/games"  className="text-primary-white hover:text-primary-white">Games</Link></li>
					<li className="bg-btn-black rounded py-2 px-4 hover:bg-primary-blue dark:hover:bg-btn-hover"><Link href="/tag/startups" className="text-primary-white hover:text-primary-white" >Startups</Link></li>
					<li className="bg-btn-black rounded py-2 px-4 hover:bg-primary-blue dark:hover:bg-btn-hover"><Link href="/tag/africa"  className="text-primary-white hover:text-primary-white">africa</Link></li>
					<li className="bg-btn-black rounded py-2 px-4 hover:bg-primary-blue dark:hover:bg-btn-hover"><Link href="/tag/women-empowerment" className="text-primary-white hover:text-primary-white" >Women empowerment</Link></li>
				</ul>
			</section>
        </div>
    )
}