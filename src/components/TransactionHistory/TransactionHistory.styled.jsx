import styled from "styled-components";

export const Table = styled.table`
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  margin: 20px auto 20px;
`;

export const TableRaw = styled.tr`
  color: #fff;
  :nth-child(2n) {
    background-color: #ddd;
  }
`;
export const Title = styled.th`
 width: 200px;
  background-color: darkturquoise;
  color: #fff;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  margin: 20px auto 0px;
  
`;
export const TableData = styled.td`
  width: 160px;
  padding: 10px 20px;
  color: #5a5a5a;
  text-align: center;
  text-transform: ${props => props.firstColumn && 'capitalize'};
  text-align: ${props => props.firstColumn && 'left'};
  padding: ${props => props.firstColumn && '10px 0px 10px 94px'};
`;