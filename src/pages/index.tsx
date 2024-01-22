import navdata from "@/constant/navigation";
import packages from "@/constant/packages";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import Icon from "@/components/Icon";
import { Tilt } from "react-tilt";

const Home = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-center items-center flex-wrap relative">
        {navdata.navigation.slice(1).map((data) => {
          return (
            <Tilt key={data.name} options={defaultOptions}>
              <Link
                to={data.path}
                className="flex justify-center  items-center  flex-col  relative rounded my-2 overflow-hidden"
              >
                <Card className="w-[380px]">
                  <CardHeader>
                    <div className="flex w-full gap-x-2">
                      <Icon className="text-cyan-300" icon={data.icon} />
                      <CardTitle>{data.name.toUpperCase()}</CardTitle>
                    </div>
                    <CardDescription>{data.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <CardDescription>{data.path}</CardDescription>
                  </CardFooter>
                </Card>
                <Icon
                  className="absolute text-cyan-300/50 left-[250px] top-2 size-[300px] rotate-45"
                  icon="Library"
                />
              </Link>
            </Tilt>
          );
        })}
      </div>
      <Card className="rounded">
        <CardHeader>
          <CardTitle>Dependency of this project</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>
            <code>{packages}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
