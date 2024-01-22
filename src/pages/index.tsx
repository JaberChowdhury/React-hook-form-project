import packages from "@/constant/packages";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import List from "@/components/List";
import Highlighter from "@/components/Highlighter";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <List />
      <Card className="border-2 rounded">
        <CardHeader>
          <CardTitle>Dependency of this project</CardTitle>
        </CardHeader>
        <CardContent>
          <Highlighter code={packages} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
