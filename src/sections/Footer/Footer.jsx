import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className=" py-5 sm:px-10 px-5">
      <div>
        <p className=" space-x-2">
          More ways to shop:{" "}
          <span className=" underline text-blue"> Find an Apple Store </span> or
          <span className=" underline text-blue">other retailers</span> near
          you.
        </p>
        <p>Or call 000000-040-1976</p>
      </div>
      <span className=" font-semibold text-gray text-sm w-full flex justify-end">
        Made by Sahil Anand
      </span>
      <div className=" bg-neutral-700 my-5 h-[1px]" />

      <div className=" flex md:flex-row flex-col md:items-center justify-between">
        <p className=" font-semibold text-gray text-xs">
          Copyright @ 2024 Apple Inc. All rights reserved.
        </p>
        <div className="flex">
          {footerLinks.map((link, i) => (
            <p key={link} className="font-semibold text-gray text-xs">
              {link}{" "}
              {i !== footerLinks.length - 1 && (
                <span className="mx-2"> | </span>
              )}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
