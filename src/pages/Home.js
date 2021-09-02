import React, { useState, useEffect } from 'react';
import { vacancies as jobs } from '../data';
import Vacancy from '../components/Vacancy';
import CreateJobs from '../components/CreateJobs';

const Home = () => {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        setVacancies(jobs);


    }, []);

    const handleSubmit= (form) => {
        setVacancies([form,...vacancies]);
        console.log({...form, id: new Date().getTime().toString()});

    }
    const handleDelete=(id) =>{
        const _vacancies = vacancies.filter(vacancy=>vacancy.id !== id);
        setVacancies(_vacancies);
    }

    return (
        <>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Find your dream jobs</p>
                    <p className="subtitle">Apply for any vacencies below</p>

                </div>
            </section>
            <section>
                <CreateJobs submit={handleSubmit} />
            </section>
            <section>
            {
                vacancies.map((vacancy) => (
                    <Vacancy key={vacancy.id} vacancy={vacancy} handleDelete={handleDelete} />
                    
                ))
            }
            </section>

        </>
    )
}

export default Home
