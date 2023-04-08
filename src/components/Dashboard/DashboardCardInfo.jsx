const DashboardCardInfo = ({ info: { amount, category, Icon } }) => {
  return (
    <article className="card card--info">
      <div className="card__main card__main--info">
        <h5 className="card__title card__title--info">{amount}</h5>
        <h6 className="card__subtitle card__subtitle--info">{category}</h6>
        <Icon className="card__icon card__icon--info" size={50} />
      </div>
    </article>
  );
};

export default DashboardCardInfo;
