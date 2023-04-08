const DashboardCardAmount = ({ amountInfo: { amount, category, Icon } }) => {
  return (
    <article className="card">
      <div className="card__main">
        <h5 className="card__title">${amount}</h5>
        <h6 className="card__subtitle">{category}</h6>
        <Icon className="card__icon" size={25} />
      </div>
    </article>
  );
};

export default DashboardCardAmount;
