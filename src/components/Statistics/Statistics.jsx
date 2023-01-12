
import PropTypes from 'prop-types'; 

import {
    StatContainer,
    Title,
    StatList,
    StatItem,
    
} from './Statistics.styled'

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({title, stats }) => { 
    return (
        <StatContainer>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(stat => {
                    return (
                        <StatItem key={stat.id} style={{backgroundColor: getRandomColor()}}>
                            <span>{stat.label}</span>
                            <span>{stat.percentage}%</span>
                        </StatItem>
                    );
               })}
            </StatList>
        </StatContainer>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};









