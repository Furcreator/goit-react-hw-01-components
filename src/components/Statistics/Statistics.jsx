import { Item, List, Section } from "./Statistics.styled"
import PropTypes from 'prop-types';
const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && <h2>{title}</h2>}

            <List>
                {stats.map(el => (
                    
                    <Item key={el.id}>
                        <span>{el.label}</span>
                        <span>{`${el.percentage}%`}</span>
                    </Item>
                ))}
            </List>
        </Section>
    )
}

export default Statistics

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired,
}