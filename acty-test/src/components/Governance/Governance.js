const Governance = ({ data }) => {

    return (
        <div className="governance">
            {data.sort((a, b) => b.score - a.score).map((item) =>
                item.categories === "Governance" ? (
                    <p className="governanceRow">
                        {item.score} {item.name}</p>
                ) : (
                    <div className="external"></div>
                )
            )}
            <div className="title">
            </div>
        </div>
    );
};

export default Governance;