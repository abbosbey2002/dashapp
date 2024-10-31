import { useEffect, useState } from 'react';
import { getDepartamentByid } from '../services/api';


const SingleDepartament = ({ departamentId }) => {
    const [departament, setDepartament] = useState(null);

    useEffect(() => {
        const fetchDepartament = async () => {
            const fetchedDepartament = await getDepartamentByid(departamentId);
            setDepartament(fetchedDepartament);
        };

        fetchDepartament();
    }, [departamentId]);

    return (
        <span className="">
            {departament ? departament.departament_name : 'Wait...'}
        </span>
    );
};

export default SingleDepartament;

