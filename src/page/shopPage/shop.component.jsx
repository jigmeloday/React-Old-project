import React from 'react'
import Shop_Data from './shop.data'
import PreviewCollection from '../../component/preview-collection/preview-collection.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: Shop_Data
        }
    }

    render() {
        const {collection} = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
                    ))
                }

            </div>
        );
    }

}

export default ShopPage;
