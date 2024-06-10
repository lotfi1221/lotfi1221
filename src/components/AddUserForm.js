import React from 'react';
import { useForm } from 'react-hook-form';

function UserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Envoyez ces données à votre backend pour enregistrement
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    {...register('username', { required: true })}
                />
                {errors.username && <span>This field is required</span>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    {...register('password', { required: true })}
                />
                {errors.password && <span>This field is required</span>}
            </div>

            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    );
}

export default UserForm;
