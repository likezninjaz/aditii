var App = React.createClass({
    render: function() {
        return (
            <section className="featured">
                <div className="featured-header">
                    <h2>FEATURED PRODUCTS</h2>
                </div>
                <div className="featured-table">
                    <div className="featured-table-row">
                        <div className="featured-table-row-item">
                        </div>
                        <div className="featured-table-row-item">
                        </div>
                    </div>
                    <div className="featured-table-row">
                        <div className="featured-table-row-item">
                        </div>
                        <div className="featured-table-row-item">
                        </div>
                    </div>
                        <div className="featured-table-row">
                        <div className="featured-table-row-item">
                        </div>
                        <div className="featured-table-row-item" id="featuredd">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

var FeaturedItem = React.createClass({
    render: function() {
        return (
            <div>
                <img src="img/item_2.png" />
                <h2>BRANDED SHIT</h2>
                <h2>$300</h2>
                <button>BUY NOW</button>
            </div>
        );
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('featured')
);

for (var i = 0; i < 6; i++) {
    ReactDOM.render(
        <FeaturedItem />,
        document.getElementsByClassName('featured-table-row-item')[i]
    );
}
