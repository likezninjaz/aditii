var Categories = React.createClass({
    render: function() {
        return (
            <section className="categories">
                <div className="categories-arrow">
                </div>
                <div className="categories-item" id="categories-item_1">
                    <img src="img/item_1.png" />
                    <div>
                        <h2>BRANDED SHOES</h2>
                        <button>SHOP</button>
                    </div>
                </div>
                <div className="categories-item">
                    <img src="img/item_2.png" />
                    <div>
                        <h2>BRANDED TSHIRTS</h2>
                        <button>SHOP</button>
                    </div>
                </div>
                <div className="categories-item">
                    <img src="img/item_3.png" />
                    <div>
                        <h2>BRANDED JEANS</h2>
                        <button>SHOP</button>
                    </div>
                </div>
                <div className="categories-arrow">
                </div>
            </section>
        );
    }
});

ReactDOM.render(
    <Categories />,
    document.getElementById('categories')
);
