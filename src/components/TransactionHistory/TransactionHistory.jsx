import PropTypes from 'prop-types'

import {
    Table,
    Title,
    TableRaw,
    TableData,
} from './TransactionHistory.styled'


export const TransactionHistory = ({items}) => { 
    return (
        <Table>
            <thead>
                <tr>
                    <Title>Type</Title>
                    <Title>Amount</Title>
                    <Title>Currency</Title>
                </tr>  
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <TableRaw key={id}>
                            <TableData firstColumn>{type}</TableData>
                            <TableData>{amount}</TableData>
                            <TableData>{currency}</TableData>
                    </TableRaw>
                    );
             })}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    ),
};

