import React from "react";
import styled from "styled-components";

export default class Title extends React.Component {
    
    
    render() {        
        const Title = styled.h3`            
            color: inherit;
        `;
    
        const {styleType,title} = this.props;
        return(
            <Title className={this.props.styleType}>{title}</Title>
        )
    }
}