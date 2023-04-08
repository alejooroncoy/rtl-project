import DashboardCardAmount from "./DashboardCardAmount";
import { TbArrowBarDown, TbArrowBarUp } from "react-icons/tb";
import { BiMoney } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";

const DashboardCardsAmounts = () => {
  const data = [
    {
      amount: 4000,
      category: "Total Sale Amount",
      Icon: TbArrowBarUp,
    },
    {
      amount: 385656.5,
      category: "Total Purchase Amount",
      Icon: TbArrowBarDown,
    },
    {
      amount: 4385,
      category: "Total Sales Due",
      Icon: BiMoney,
    },
    {
      amount: 307144,
      category: "Total Purchase Due",
      Icon: RiShoppingBag3Line,
    },
  ].map((amount) =>
    Object.assign(amount, {
      id: crypto.randomUUID(),
    })
  );
  return (
    <section className="amounts">
      <div className="amounts-container">
        {data.map((amountInfo) => (
          <DashboardCardAmount key={amountInfo.id} amountInfo={amountInfo} />
        ))}
      </div>
    </section>
  );
};

export default DashboardCardsAmounts;
