import { CgFileDocument } from "react-icons/cg";
import { IoDocumentOutline } from "react-icons/io5";
import { BsPersonCheckFill, BsPersonFill } from "react-icons/bs";
import DashboardCardInfo from "./DashboardCardInfo";

const DashboardCardsInfo = () => {
  const salesInvoce = 105;
  const purchaseInvoce = 100;
  const suppliers = 100;
  const customers = 100;
  const data = [
    {
      amount: salesInvoce,
      category: "Sales Invoce",
      Icon: IoDocumentOutline,
    },
    {
      amount: purchaseInvoce,
      category: "Purchase Invoce",
      Icon: CgFileDocument,
    },
    {
      amount: suppliers,
      category: "Suppliers",
      Icon: BsPersonCheckFill,
    },
    {
      amount: customers,
      category: "Customers",
      Icon: BsPersonFill,
    },
  ].map((amount) =>
    Object.assign(amount, {
      id: crypto.randomUUID(),
    })
  );
  return (
    <section className="infos">
      <div className="infos-container">
        {data.map((infoData) => (
          <DashboardCardInfo key={infoData.id} info={infoData} />
        ))}
      </div>
    </section>
  );
};

export default DashboardCardsInfo;
