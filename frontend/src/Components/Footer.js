import SimpleReactFooter from "simple-react-footer";

const Footer = () => {
  const description =
    "Dr. Bot will help you to diagnose your disease through gathering your symptoms. Additionally it will give you tips about precautionary measure. Recommendation to doctor and tests is also included along with alarming health condition indication.";
  const title = "DrBot";
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Careers",
          link: "/careers",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Admin",
          link: "/admin",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy",
        },
        {
          name: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations",
        },
        {
          name: "Culture",
          link: "/culture",
        },
      ],
    },
  ];
  return (
    <div style={{marginTop: "auto"}}>
      <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin=""
      facebook=""
      twitter=""
      instagram=""
      youtube=""
      pinterest=""
      copyright="2022 DrBot"
      iconColor="white"
      backgroundColor="#274472"
      fontColor="white"
      copyrightColor="white"
    />
    </div>
  );
};

export default Footer;
