import { cn } from "@/lib/utils";
import { BiLogoGmail } from "react-icons/bi";
import {
  CiGlobe,
  CiLinkedin,
  CiLocationOn,
  CiPhone,
  CiTwitter,
} from "react-icons/ci";
import { FaFacebook, FaGithub } from "react-icons/fa6";

const generateSocialIcon = (socialLinks) => {
  const socials = [];
  const iconClass = "text-4xl text-gray-700";

  const linkedIn = socialLinks.find((link) => link.includes("linkedin"));
  if (linkedIn) {
    socials.push({
      icon: <CiLinkedin className={iconClass} />,
      link: linkedIn,
    });
  }

  const github = socialLinks.find((link) => link.includes("github"));
  if (github) {
    socials.push({
      icon: <FaGithub className={iconClass} />,
      link: github,
    });
  }

  const twitter = socialLinks.find((link) => link.includes("twitter"));
  if (twitter) {
    socials.push({
      icon: <CiTwitter className={iconClass} />,
      link: twitter,
    });
  }

  const facebook = socialLinks.find((link) => link.includes("facebook"));
  if (facebook) {
    socials.push({
      icon: <FaFacebook className={iconClass} />,
      link: facebook,
    });
  }
  const gmail = socialLinks.find((link) => link.includes("gmail"));
  if (gmail) {
    socials.push({
      icon: <BiLogoGmail className={iconClass} />,
      link: `mailto:${gmail}`,
    });
  }
  // const instagram = socialLinks.find((link) => link.includes("instagram"));
  // const youtube = socialLinks.find((link) => link.includes("youtube"));
  // const medium = socialLinks.find((link) => link.includes("medium"));
  // const dev = socialLinks.find((link) => link.includes("dev"));
  // const stackOverflow = socialLinks.find((link) =>
  //   link.includes("stackoverflow")
  // );
  // const codePen = socialLinks.find((link) => link.includes("codepen"));
  // const gitlab = socialLinks.find((link) => link.includes("gitlab"));
  // const bitbucket = socialLinks.find((link) => link.includes("bitbucket"));

  return socials;
};

const Contact = ({
  location,
  phoneNumbers,
  socialMedia,
  website,
  className,
}) => {
  const socials = generateSocialIcon(socialMedia);

  return (
    <div className={cn("mb-8 flex flex-col gap-1", className)}>
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="flex gap-2">
        <CiLocationOn className="text-2xl" /> {location}
      </p>
      <p className="flex gap-2">
        <CiGlobe className="text-2xl" />
        <a href={`https://${website}`} className="text-blue-500">
          {website}
        </a>
      </p>

      <p className="flex gap-2">
        <CiPhone className="text-2xl" />
        {phoneNumbers.map((number, index) => (
          <a
            key={`phone_${index}`}
            href={`tel:${number}`}
            className="text-blue-500"
          >
            {number}
          </a>
        ))}
      </p>
      <ul className="flex gap-1">
        {socials.map((social, index) => (
          <li key={`social_${index}`}>
            <a href={social.link} className="text-blue-500">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
