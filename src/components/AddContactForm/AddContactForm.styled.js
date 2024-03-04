import styled from "styled-components";

export const StyledH2 = styled.h2`
margin:0;
font-family:Roboto, Helvetica, Arial, sans-serif;
font-weight:400;
font-size:1.5rem;
line-height: 1.334;
letter-spacing: 0em;
margin-bottom:15px;
margin-top: 15px;
`

export const StyledForm = styled.form`
width: 300px;
                display: flex;
                flex-direction: column;
                border: 1px solid #CDAFFD;
                border-radius: 10px;
                padding: 30px;
                gap: 10px;
                font-family:Roboto, Helvetica, Arial, sans-serif;
                
`

export const InputLabel = styled.label`  
display: flex;
align-items: center;
justify-content: space-between;
`
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
                height: 36px;
                &&:hover {
                    border-color: #ccc;
                }
                &&:focus{
                    border-color: #9147ff;
                    background: #fff;
                }
                `

export const AddContactButton = styled.button`
border:1px solid transparent;
border-radius: 15px;
background-color: #CDAFFD;
width: 200px;
height: 40px;
align-self: center;
font-size: 18px;
transition: all 0.5s ease-out allow-discrete;
cursor: pointer;

&&:hover{
background-color: #E6D7FE;
};
`