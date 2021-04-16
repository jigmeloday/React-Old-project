import React from 'react'
import './preview-collection.style.scss'
import CollectionItem from '../collection-item/collection-item.component'
const PreviewCollection = ({title, items}) => (
    <div className='collection-preview '>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className="preview">
            {
                items.filter((iterm, idx) => idx< 4 ).map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps}>
                    </CollectionItem>
                ))
            }
        </div>
    </div>
);
export default PreviewCollection;
