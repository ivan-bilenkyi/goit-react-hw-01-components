import { StatList } from './Statistics.style';

export const Statistics = ({ data, title }) => {
  return (
    <section>
      {title && (
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          {title}
        </h2>
      )}

      <StatList>
        {data.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{
              background: getBgColor(),
            }}
          >
            <p>{label}</p>
            <span>{percentage}%</span>
          </li>
        ))}
      </StatList>
    </section>
  );
};

function getBgColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}
