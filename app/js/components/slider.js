var Slider = React.createClass({
    render: function() {
        return (
            <section className="slider">
                <img src="img/t-shirt.png" className="slider-image"/>
                <article className="slider-description">
                    <h2 className="slider-header">COWHIDE STANDARD CREW</h2>
                    <p className="slider-paragraph">White coloured, short sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit.</p>
                    <button className="slider-button" >OPEN</button>
                </article>
                <div className="slider-dot"></div>
                <div className="slider-dot"></div>
                <div className="slider-dot"></div>
                <div className="slider-dot"></div>
            </section>
        );
    }
});

ReactDOM.render(
    <Slider />,
    document.getElementById('slider')
);
