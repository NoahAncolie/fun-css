import { mdiArrowLeftThick, mdiArrowRightThick } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

interface ArrowProps {
    uri: string
}
 
export class ArrowNext extends React.Component<ArrowProps> {
    render() { 
        return ( 
            <Link to={this.props.uri} className="next arrow-link">
                <Icon path={mdiArrowRightThick} className="arrow"/>
            </Link>
         );
    }
}

export class ArrowPrevious extends React.Component<ArrowProps> {
    render() { 
        return ( 
            <Link to={this.props.uri} className="previous arrow-link">
                <Icon path={mdiArrowLeftThick} className="arrow"/>
            </Link>
         );
    }
}