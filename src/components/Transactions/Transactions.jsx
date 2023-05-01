import { Table  } from "./Transactions.styled"

const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(el => (
                    <tr key={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr>

                ))}
            </tbody>
        </Table>
    )
}
export default TransactionHistory