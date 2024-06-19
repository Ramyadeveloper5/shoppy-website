import '../ProductDescription/ProductDescription.css'

const ProductDescription = () => {
    return (
        <div>
            <div className="product-description">
                <div className="product-description-navigator">
                    <div className="product-description-navmenu">Descriptions</div>
                    <div className="product-description-navmenu-fade">Reviews(155)</div>
                </div>
            </div>
            <div className="product-description-description">
                <p>
                Electronic commerce, or e-commerce, is the term used to describe the purchase and exchange of products and services via the internet. It involves a variety of online transactions, such as business-to-business (B2B) transactions, online marketplaces, and online retail stores. Through e-commerce, companies and customers can transact without having to meet in person or have a physical presence.
                </p>
                <p>
                Businesses can sell goods or services online thanks to e-commerce, and customers can buy them through digital channels. E-commerce platforms and websites are available around-the-clock, every day of the week, offering consumers and businesses flexibility and convenience.
                </p>
            </div>
        </div>
    )
}

export default ProductDescription
