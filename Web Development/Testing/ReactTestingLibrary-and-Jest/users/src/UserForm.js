import { useState } from 'react';

function UserForm({ onUserAdd }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onUserAdd({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input value={name} onChange={e => setName(e.target.value)} type="text" />
                </label>
            </div>
            <div>
                <label>Email:</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
            </div>
            <button>Add User</button>
        </form>
    );
}

export default UserForm;