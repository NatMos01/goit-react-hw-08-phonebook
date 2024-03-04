const { default: styled } = require("styled-components");

export const StyledUl = styled.ul`
display: flex;
gap: 15px;
flex-direction: column;
list-style: none;
font-size: 25px;
padding: 0;
width: 400px;
font-family:Roboto, Helvetica, Arial, sans-serif;
`

export const StyledLi = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
width: 100% ;
color: lightcoral;
`
export const StyledButton = styled.button`
border:1px solid transparent;
border-radius: 15px;
background-color: #CDAFFD;
width: 75px;
height: 40px;
align-self: center;
font-size: 13px;
transition: all 0.5s ease-out allow-discrete;
cursor: pointer;

&&:hover{
background-color: #E6D7FE;
};
`