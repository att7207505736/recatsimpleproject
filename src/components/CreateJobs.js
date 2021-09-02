import React, { useState } from "react";

const CreateJobs = ({submit}) => {
    const [form, setform] = useState({
        title: "",
        company: "",
        city: "",
        description: "",
    });
    
    const handleInput = (event) => {
        
        setform({...form,[event.target.name]:event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        submit(form);
    }
    
    return (
        <div>
            <div className="box">
                <h1 className="title is-5">Create a vacancy</h1>
                
                <form onSubmit={handleSubmit}>
                    <input

                        className="input"
                        type="text"
                        placeholder="Job title"
                        value={form.title}
                        name="title"
                        onChange={handleInput}
                        required
                    />
                    <input

                        className="input"
                        type="text"
                        placeholder="company name"
                        value={form.company}
                        name="company"
                        onChange={handleInput}
                        required
                    />
                    <input

                        className="input"
                        type="text"
                        placeholder="City name"
                        value={form.city}
                        name="city"
                        onChange={handleInput}
                        required
                    />
                    <textarea

                        className="input"
                        type="text"
                        placeholder="Description"
                        value={form.description}
                        name="description"
                        onChange={handleInput}
                        required
                    />
                    <button className="button is-primary">Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateJobs;
