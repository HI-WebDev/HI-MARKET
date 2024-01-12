import { RiTruckLine,RiExchangeDollarLine } from "react-icons/ri";

import { FiRefreshCcw } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";


const serviceData = [
    {
        icon: <RiTruckLine />,
        title: "Free Shipping",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#fdefe6",
    },
    {
        icon: <FiRefreshCcw />,
        title: "Easy Returns",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#ceebe9",
    },
    {
        icon: <RiSecurePaymentLine />,
        title: "Secure Payment",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#e2f2b2",
    },
    {
        icon: <RiExchangeDollarLine />,
        title: " Back Guarantee",
        subtitle: "Lorem ipsum dolor sit amet.",
        bg: "#d6e5fb",
    },
];

export default serviceData;