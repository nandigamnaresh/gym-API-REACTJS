import React, { useEffect, useState } from 'react';
import Naresh from 'axios';
import './App2.css';

function App2() {

    const [a, b] = useState([]);


    const data = async () => {
        const options = {
            method: 'GET',
            // url: 'https://gym-fit.p.rapidapi.com/muscles/search',
            headers: {
                // 'X-RapidAPI-Key': '5d2f083533mshcbe5342d0ed436cp1754a1jsn0ecf5e5e1777',
                'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
            }
        };

        try {
            const response = await Naresh.request(options);
            b(response.data);
            console.log(response.data);
        }

        catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        data();
    }, []);





    return (
        <div>
            <h2 className='text-center text-primary fw-bold pb-5 pt-3'>GYM PRACTICE</h2>


            <div className='container'>
                <div className='row ms-5 ps-5'>
                    {
                        a.map(data => (
                            <div className='col-lg-4 pb-5 ps-5'>
                                <div key={data.id}>
                                    <div class="card" style={{ width: "18rem" }} id='main-body'>
                                        <div class="card-body  pt-4 pb-4">
                                            <h3 class="card-title ps-3">BODYPART: {data.bodyPart.name.toUpperCase()}</h3>
                                            <h4 className='card-text pt-3 pb-3 ps-3 '>EXERCISES:</h4>

                                            {

                                                data.exercises.map(data2 => (
                                                    <div>
                                                        <h6 class="card-text ps-3 ">{data2.name.toUpperCase()}</h6>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default App2
























