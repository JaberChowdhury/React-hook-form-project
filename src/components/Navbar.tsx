import navData from "@/constant/navigation";
import Icon from "@/components/Icon";
import { Link } from "react-router-dom";

export default () => {
  return (
    <details className="border-none">
      <summary className="flex text-slate-200 justify-between items-center border border-cyan-400 p-2 rounded font-bold text-2xl">
        Navigagion
      </summary>
      <ol className="border p-2 rounded border-cyan-600">
        {navData.navigation.map((data) => {
          return (
            <li key={data.name} className="flex gap-x-2 items-center">
              <Icon icon={data.icon} />
              <Link to={data.path}>{data.name.toUpperCase()}</Link>
              <hr />
            </li>
          );
        })}
      </ol>
    </details>
  );
};
