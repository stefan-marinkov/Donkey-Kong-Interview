import { useEffect, useState } from 'react';
import React from 'react'
import './CandidatFront.scss';

const CandidatFront = (props) => {

    const candidates = props.infoCandidate
    console.log(props.match.params.id)

    candidates.filter(e => e.id == props.match.params.id)


    return (
        <div>

        </div>

    )

}

export default CandidatFront;