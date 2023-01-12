import styled from "styled-components";

export const StatContainer = styled.section`
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 
     0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
    border-radius: 4px;
     width: 350px;
     margin: 20px auto;
     box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
   `;

export const Title = styled.h2`
   padding: 30px;
   margin: 0;
   font-size: 24px;
   text-transform: uppercase;
   font-weight: 600;
   color: #686868;
   `;

export const StatItem = styled.li`
   display: flex;
   flex-direction: column;
   padding: 19px;
   color: #ffffff;
   `;

export const StatList = styled.ul`
     list-style: none;
     display: flex;
     padding: 0;
     margin: 0;
   `;


