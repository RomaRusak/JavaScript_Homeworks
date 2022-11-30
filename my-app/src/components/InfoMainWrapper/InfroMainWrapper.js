import InfoAccordion from "../InfoAccordion/InfoAccordion"
import CartWidget from "../CartWidget/CartWidget"

const InfoMainWrapper = () => {

    return (
        <div>
            <CartWidget />
            <h2>Инфо блок главная страница</h2>
            <InfoAccordion />
        </div>
    )
}

export default InfoMainWrapper