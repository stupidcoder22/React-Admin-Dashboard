import "./home.css";
import { userData } from "../../dummyData";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import Chart from "../../Components/Chart/Chart";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      {/* <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div> */}
    </div>
  );
}
