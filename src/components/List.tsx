import Icon from "@/components/Icon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import navdata from "@/constant/navigation";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="my-2 gap-y-2 flex justify-around items-center flex-wrap">
      {navdata.navigation.slice(1).map((data) => {
        return (
          <Card className="w-[380px] border-2 hover:border-cyan-600 h-[290px] rounded overflow-hidden relative flex justify-center items-center flex-col">
            <CardHeader>
              <Icon className="size-8 text-cyan-300" icon={data.icon} />
              <CardTitle>{data.name.toUpperCase()}</CardTitle>
              <hr />
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter className="w-full flex flex-col">
              <Link
                className="w-full mt-2 text-center px-2 py-1 bg-cyan-200 text-slate-800 rounded-full"
                to={data.path}
              >
                {data.icon === "Code" ? "Code" : "Demo"}
              </Link>
            </CardFooter>
            <Icon
              className="absolute left-[30%] top-[-80%] text-slate-300/50 size-[300px] -rotate-90"
              icon="Aj"
            />
          </Card>
        );
      })}
    </div>
  );
};
