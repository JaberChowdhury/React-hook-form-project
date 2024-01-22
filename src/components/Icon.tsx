import { Home, Library, Code, Shield } from "lucide-react";
import { z } from "zod";

// just having fun with zod 😁
const contentType = z.object({
  icon: z.string(),
  className: z.string().optional(),
});
type propsType = z.infer<typeof contentType>;

// type propsType = { icon: string; className?: string };
const Icon = ({ icon, className }: propsType) => {
  switch (icon) {
    case "Home":
      return <Home className={className} />;
    case "Library":
      return <Library className={className} />;
    case "Code":
      return <Code className={className} />;
    case "Shield":
      return <Shield className={className} />;
    default:
      return <Home className={className} />;
  }
};

export default Icon;
