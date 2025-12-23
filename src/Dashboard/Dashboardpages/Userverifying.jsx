import React, { useEffect, useState } from 'react'
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

function Userverifying() {
    const [showSignin, setShowSignin] = useState(false);

    // Show after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSignin(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Loader showSignin={showSignin} />

        </div>
    )
}

export default Userverifying