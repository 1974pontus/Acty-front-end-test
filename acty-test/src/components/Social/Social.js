const Social = ({ data }) => {

    return (
        <div className="social">
            {data.sort((a, b) => b.score - a.score).map((item) =>
                item.categories === "Social" ? (
                    <p className="socialRow">
                        {item.score} {item.name}
                    </p>
                ) : (
                    <div className="external"></div>
                )
            )}
            <div className="title">
            </div>
        </div>
    );
};

export default Social;