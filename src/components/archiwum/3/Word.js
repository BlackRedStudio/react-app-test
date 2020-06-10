import React, {Component, Fragment} from 'react';
import './Word.css';

const Word = props => (
	<li>PL: {props.pl} | EN: {props.en}</li>
)

export default Word;