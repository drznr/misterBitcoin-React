import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { utilService } from '../services/UtilService';

function Chart(props) {
    const chartColor = utilService.getRandomColor();
    const chartData = (props.data) ? props.data.values.map(val => val.y) : []; 
    
    return (
        props.data &&
        <div className="chart">
            <h3>{props.data.name}</h3>
            <Sparklines data={chartData}>
                <SparklinesLine color={chartColor} />
                <SparklinesReferenceLine type="avg" style={{ stroke: chartColor, strokeDasharray: 5 }} />
            </Sparklines>
            <p>{props.data.description}</p>
        </div>
    );
}

export default Chart;