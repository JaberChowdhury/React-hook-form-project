import navdata from "@/constant/navigation";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Icon from "@/components/Icon";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-center items-center flex-col relative">
        {navdata.navigation.slice(1).map((data) => {
          return (
            <Link
              key={data.name}
              to={data.path}
              className="flex justify-center  items-center  flex-col  relative rounded my-2 overflow-hidden"
            >
              <Card className="w-[380px]">
                <CardHeader>
                  <CardTitle>{data.name.toUpperCase()}</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                <CardFooter>{data.path}</CardFooter>
              </Card>
              <Icon className="" icon={data.icon} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
