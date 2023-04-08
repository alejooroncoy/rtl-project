import { Helmet } from "react-helmet";
import DahshboardPurchaseAndSales from "../components/Dashboard/DahshboardPurchaseAndSales";
import DashboardCardsAmounts from "../components/Dashboard/DashboardCardsAmounts";
import DashboardCardsInfo from "../components/Dashboard/DashboardCardsInfo";
import DashboardProducts from "../components/Dashboard/DashboardProducts";
import useProducts from "../hooks/useProducts";
import useUser from "../hooks/useUser";

const Dashboard = () => {
  const user = useUser();
  const products = useProducts();
  const sales = user?.sales || [50, 45, 60, 70, 50, 45, 60, 70];
  const purchase = user?.purchase || [-21, -54, -45, -35, -21, -54, -45, -35];
  return (
    <>
      <Helmet>
        <title>Dashboard | Rtl project</title>
      </Helmet>
      <main className="main main--dashboard">
        <DashboardCardsAmounts />
        <DashboardCardsInfo />
        <DashboardProducts
          products={products}
          title="Recently Added Products"
        />
        <DahshboardPurchaseAndSales purchase={purchase} sales={sales} />
        <DashboardProducts
          products={products}
          modifier="expired"
          title="Expired Products"
        />
      </main>
    </>
  );
};

export default Dashboard;
