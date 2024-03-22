import { SocialIcon } from "react-social-icons";
import Logo from "../assets/logo.png";
import { telegramLink, twitterLink } from "../data";
const Testimonial = () => {
  return (
    <section className="py-16 px-4 flex items-center max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto flex-1">
        <h4 className="font-bold text-8xl mb-4">
          Your Trusted Partner In Crypto Growth
        </h4>
        <p className="max-w-2xl">
          By leveraging our expertise and proven strategies, you can ensure your
          crypto project receives the attention it deserves. We go beyond just
          numbers; we foster genuine community engagement and long-term success.
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={telegramLink}
            target="_blank"
            className="inline-flex items-center justify-between uppercase w-full max-w-sm gap-2 hover:gap-4 p-4 bg-blue-500 text-white mt-4 rounded hover:bg-blue-600 transition-all"
          >
            <span className="text-2xl font-bold">Join Telegram</span>
            <SocialIcon network="telegram" />
          </a>
          <a
            href={twitterLink}
            target="_blank"
            className="inline-flex items-center justify-between uppercase gap-2  w-full max-w-sm hover:gap-4 p-4 bg-slate-900 text-white mt-4 rounded hover:bg-slate-600 transition-all"
          >
            <span className="text-2xl font-bold">Follow Us</span>
            <SocialIcon network="x" />
          </a>
        </div>
      </div>
      <div className="flex-1">
        <img src={Logo} alt="" className="w-full max-w-sm" />
      </div>
    </section>
  );
};

export default Testimonial;
