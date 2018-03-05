import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.section`
    font-size: 1.5em;
    text-align: center;
    padding: 2em;
    color: #e45;
    font-family: arial;
`;

class HeaderComponent extends Component {
    render() {
        return (
            <Header>Movie List App</Header>
        )
    }
}

export default HeaderComponent;