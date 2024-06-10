import React from 'react';
import { useForm } from 'react-hook-form';

function ClientForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Envoyez ces données à votre backend pour enregistrement
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Client Name</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: true })}
                />
                {errors.name && <span>This field is required</span>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', { required: true })}
                />
                {errors.email && <span>This field is required</span>}
            </div>

            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    );
}

export default ClientForm;
