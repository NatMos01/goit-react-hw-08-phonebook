import styled from "styled-components";

export const Input = styled.input`
margin: 0 15px 0 15px;
                font-size: 14px;
                border-radius: 6px;
                line-height: 1.5;
                padding: 5px 10px;
                transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
                border: 2px solid #dee1e2;
                color: rgb(14, 14, 16);
                background: #dee1e2;
                display: block;
                height: 20px;
                &&:hover {
                    border-color: #ccc;
                }
                &&:focus{
                    border-color: #9147ff;
                    background: #fff;
                }
                `

export const InputLabel = styled.label`  
display: flex;
align-items: center;
justify-content: space-between;
`

export const StyledH2 = styled.h2`
margin:0;
font-family:Roboto, Helvetica, Arial, sans-serif;
font-weight:400;
font-size:1.5rem;
line-height: 1.334;
letter-spacing: 0em;
margin-bottom:15px;
text-align:center;
margin-top: 15px;`