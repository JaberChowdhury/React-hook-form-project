import { Home, Library, Code, Shield } from "lucide-react";

const Icon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "Home":
      return <Home />;
    case "Library":
      return <Library />;
    case "Code":
      return <Code />;
    case "Shield":
      return <Shield />;
    default:
      return <Home />;
  }
};

export default Icon;
