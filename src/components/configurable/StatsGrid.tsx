import { useConfig } from "../../context/ConfigContext";

const StatsGrid = () => {
  const { userData } = useConfig();

  return (
    <div className="cfg-grid cfg-grid--4">
      {userData.stats.map((s) => (
        <div key={s.label} className="cfg-card cfg-card--stat">
          <span className="cfg-card__stat-value">{s.value}</span>
          <span className="cfg-card__stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
