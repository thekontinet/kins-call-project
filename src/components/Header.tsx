import { ReactTyped } from "react-typed";
import HeaderImage from "../assets/page Image.png";
import { SocialIcon } from "react-social-icons";
import { telegramLink, twitterLink } from "../data";

const Header = () => {
  return (
    <header className="dark:text-indigo-200">
      <div className="grid justify-center px-4">
        <div className="text-center space-y-4 order-2 max-w-5xl mx-auto py-10">
          <h1 className="text-3xl md:text-7xl font-black tracking-wider uppercase">
            <ReactTyped
              strings={["We Ignite", "We Propel"]}
              typeSpeed={120}
              className="text-indigo-900 dark:text-slate-200 block text-base"
              loop
            />{" "}
            The Potentials of your
            <span className="text-indigo-900 dark:text-indigo-100 text-6xl block">
              {" "}
              Crypto
            </span>
          </h1>
          <h2 className="font-medium text-lg max-w-2xl mx-auto">
            Take your cryptocurrency project to the next level with Kins Call,
            the all-in-one crypto agency that specializes in propelling your
            token into the spotlight.
          </h2>

          <div className="flex items-center justify-center gap-4 py-10">
            <SocialIcon
              network="telegram"
              label="Join our telegram"
              url={telegramLink}
            />
            <SocialIcon network="x" label="Follow us on X" url={twitterLink} />
          </div>
        </div>
        <div className="group">
          <img
            className="lg:w-1/3 block mx-auto order-1 group-hover:scale-75 transition-all duration-300"
            src={HeaderImage}
            alt="an image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
