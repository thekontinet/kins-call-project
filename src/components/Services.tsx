import { BiCoinStack } from "react-icons/bi";
import { SiCoinmarketcap } from "react-icons/si";
import { SlRocket } from "react-icons/sl";

const Services = () => {
  return (
    <section className="bg-indigo-500/10 text-indigo-900 dark:text-indigo-300 py-20">
      <header className="py-10 px-8 text-center max-w-2xl mx-auto">
        <h2 className="font-black text-6xl mb-4">OUR SERVICES</h2>
        <p className="text-sm">
          We understand the importance of a strong first impression in the
          ever-evolving world of crypto. At Kins Call, we offer a comprehensive
          suite of services designed to elevate your project's visibility and
          build a thriving community.
        </p>
      </header>
      <div className="space-y-4 grid lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
        <ServiceCard
          heading="Dominate CoinMarketCap and Crypto.com"
          content="Generate high-quality, positive comments from real accounts,
            propelling them to the top of the CMC discussion board. Spark user
            engagement with strategic likes and replies to keep your project in
            the conversation. Rise above the noise and trend on Crypto.com for
            6-8 hours, attracting a massive influx of potential investors."
          icon={<SiCoinmarketcap className="size-full" />}
        />
        <ServiceCard
          heading="Rule the Geckoterminal Charts"
          content={`Secure top placement in Geckoterminal's search bar, ensuring easy
            discoverability for interested crypto enthusiasts. Drive user
            engagement with 24-hour trending on the "Most Viewed" section
            (requires 1,000 daily transactions).`}
          icon={<BiCoinStack className="size-full" />}
        />
        <ServiceCard
          heading="Boost Social Proof"
          content="Build a loyal following with cost-effective watchlists and stars on
            CoinMarketCap and Coingecko. Create a buzz with targeted trending on
            Twitter in the US, Brazil, Germany, or worldwide, propelling your
            project into the global conversation. Increase community trust with
            strategic Dextools upvotes."
          icon={<SlRocket className="size-full" />}
        />
      </div>
    </section>
  );
};

function ServiceCard({
  heading,
  content,
  icon,
}: {
  heading: string;
  content: string;
  icon: React.ReactNode;
}) {
  return (
    <li className="bg-indigo-800 p-8 rounded text-white overflow-hidden group">
      <span className="mb-8 block size-44 group-hover:size-20 transition-all duration-300">
        {icon}
      </span>
      <h4 className="font-bold text-4xl group-hover:text-xl py-2 transition-all duration-300">
        {heading}
      </h4>
      <p className="text-indigo-300 text-justify text-sm group-hover:text-xl opacity-0 -translate-x-full group-hover:translate-x-0 origin-bottom group-hover:opacity-100 transition-all duration-300">
        {content}
      </p>
    </li>
  );
}

export default Services;
