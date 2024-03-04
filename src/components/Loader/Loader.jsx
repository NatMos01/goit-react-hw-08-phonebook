import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import styled from 'styled-components'

const Loader = () => {
    return (
        <LoaderWrapper><ThreeCircles /></LoaderWrapper>
    )
}

export default Loader

const LoaderWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 120px;
`