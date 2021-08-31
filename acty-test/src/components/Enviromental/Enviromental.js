import './enviromental.css'

const Enviromental = ({ data }) => {

  return (
    <div className="enviromental">
      {data.sort((a, b) => b.score - a.score).map((item) =>
        item.categories === "Environmental" ? (
          <p className="enviromentalRow">
            {item.score} {item.name}
          </p>
        ) : (
          <div></div>
        )
      )}

    </div>
  );
};

export default Enviromental;
