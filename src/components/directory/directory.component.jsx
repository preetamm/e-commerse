import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import '../menu-item/menu-item.styles.scss'
import './directory.styles.scss';
import { connect} from 'react-redux'
import {selectDiretorySection} from '../../redux/directory/directory.selector'
import {createStructuredSelector} from 'reselect'
const Directory = ({sections}) => {
    return (

        <div className="directory-menu">
            {
                sections.map(({ id, ...othersectionprops }) => (
                    <MenuItem key={id} {...othersectionprops} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections : selectDiretorySection
})


export default connect(mapStateToProps, null)(Directory);
