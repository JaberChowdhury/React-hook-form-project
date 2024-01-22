import navData from "@/constant/navigation";
import Icon from "@/components/Icon";
import { Link } from "react-router-dom";
import { CardDescription } from "@/components/ui/card";

export default () => {
  return (
    <details className="border-none">
      <summary className="flex text-slate-200 justify-between items-center border border-cyan-400 p-2 rounded font-bold text-2xl">
        Navigagion
      </summary>
      <div className="border p-2 rounded border-cyan-600">
        {navData.navigation.map((data) => {
          return (
            <Link
              className="flex gap-x-4 my-2 p-2 rounded border-2 hover:border-cyan-600"
              to={data.path}
            >
              <Icon icon={data.icon} />
              <CardDescription className="p-0 m-0">{data.name}</CardDescription>
            </Link>
          );
        })}
      </div>
    </details>
  );
};
