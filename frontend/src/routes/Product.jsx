import { useOutletContext } from "react-router-dom";

export default function Product(props) {

    const userType = useOutletContext();

    return (
        <>
            {userType} Product
        </>
    );
}
