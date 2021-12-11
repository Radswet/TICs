import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useAuth0 } from "@auth0/auth0-react";

const data = {
    labels: ["Tercera", "Segunda", "Primera", "Extra", "Super", "Jumbo"],
    datasets: [
      {
        label: "Blanco",
        backgroundColor: "#3e95cd",
        data: [145,189,711,396,384,62]
      }, {
        label: "Color",
        backgroundColor: "#8e5ea2",
        data: [151,403,715,504,368,138]
      }
    ]
};

const options = {
    title: {
        display: true,
        text: 'Cantidad de huevos'
      }
};

const StackedBarHis = () => {
    const { isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <>
            <div className='header' class="grid justify-items-center">
                <h1 className='title'>Huevos clasificados 15/11/2021</h1>
            </div>
            <Bar data={data} options={options} />
            </>
        )
    );
        
};

export default StackedBarHis;