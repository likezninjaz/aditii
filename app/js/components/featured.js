var App = React.createClass({
    render: function() {
        return (
            <section className="featured">
                <div className="featured-header">
                    <h2>FEATURED PRODUCTS</h2>
                </div>
                <div className="featured-table">
                </div>
            </section>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('featured')
);
