import { useOutletContext } from "react-router-dom";

export default function Profile(props) {

    const userType = useOutletContext();

    return (
        <>
            <div className="main-container">{userType} Profile</div>
        </>
    );
}
