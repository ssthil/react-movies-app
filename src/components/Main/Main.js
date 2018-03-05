import React, { Component , Fragment} from 'react';
import { URL_IMG, URL_IMG_SIZE } from '../../cons';

import styled from 'styled-components';

const Row = styled.div`
    &::after {
        content:"";
        clear: both;
        display: table;
    }
`;

const Column = styled.div`
    float: left;
    width: ${props => (props.span ? props.span / 12 * 100: "8.33")}%;
    background: #fff;
    font-family: arial;
    
`;



export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }
    componentDidMount() {

        const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=1260ebdbf1855b4b6103abebc3372628&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
        

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.results}))
            .catch(error => console.log(error))

    }

    render() {
        console.log(this.state.movies)
        return (
                <Row> 
                    
                    {
                        this.state.movies.map( (movie, i) => (
                            <Column span="3" key={movie.id}>
                                <h4>{movie.title}</h4>
                                <h5>{movie.vote_average}</h5>
                                <h5>{movie.vote_count}</h5>
                                <img src={URL_IMG+URL_IMG_SIZE+movie.poster_path} alt="" />
                            </Column>
                        ))
                    }
                
                    
                </Row>
 
        )
    }
}