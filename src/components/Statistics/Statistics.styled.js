import styled from "styled-components"
export const Item = styled.li`
    display: flex;
    gap: 10px;
`;

export const List = styled.ul`
        padding: 10px;
    margin: 0px;
    display: flex;
    gap: 10px;
    width: 300px;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: chartreuse;
    width: 100%;
     h2{
        margin: 0;
     }
`;