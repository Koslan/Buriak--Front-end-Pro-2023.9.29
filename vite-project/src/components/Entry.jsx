import { useState } from "react";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";

function Entry(props) {
    const navigate = useNavigate();
    const [OpenModal, setOpenModal] = useState(false);

    const handleEditClick = () => {
        navigate('/edit', { state: props.entry });
    };

    return (
        <div className="dataCard">
            {OpenModal && 
                <Modal setOpenModal={setOpenModal} deleteEntry={props.deleteEntry} entry={props.entry} />
            }
            <ul className="dataList">
                <li>{props.listId}</li>
                <li>{props.entry.name}</li>
                <li>{props.entry.phone}</li>
            </ul>
            <div className="actionButtons">
                <button onClick={() => setOpenModal(true)}>Delete</button>
                <button onClick={handleEditClick}>Edit</button>
            </div>
        </div>
    )
}

export default Entry;
