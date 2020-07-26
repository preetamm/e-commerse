import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from  'reselect'
import {selectCollections} from '../../redux/shop/shop.selector'
//import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionOverview from '../../components/collections-overview/collection-overview.component'
const ShopPage = ({ collections }) => (


    <div className="shop-page">
        <CollectionOverview/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})


export default connect(mapStateToProps)(ShopPage);