import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useAuth0 } from "@auth0/auth0-react";
import {getCurrentDate} from './Date'
const data = {
    labels: ["Tercera", "Segunda", "Primera", "Extra", "Super", "Jumbo"],
    datasets: [
      {
        label: "Blanco",
        backgroundColor: "#3e95cd",
        data: [133,221,783,500,344,102]
      }, {
        label: "Color",
        backgroundColor: "#8e5ea2",
        data: [408,547,675,734,323,98]
      }
    ]
};

const options = {
    title: {
        display: true,
        text: 'Cantidad de huevos'
      }
};

const StackedBar = () => {
    const { isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <>
            <div className='header' class="grid justify-items-center">
                <h1 className='title'>Huevos clasificados {getCurrentDate("/")}</h1>
            </div>
            <Bar data={data} options={options} />
            </>
        )
    );
        
};

export default StackedBar;