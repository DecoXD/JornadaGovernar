import PaymentCard from "@/components/shared/PaymentCard"
import { paymentCardItem } from "@/constants"


const Payment = () => {
  return (
    <section className="flex justify-center items-center xlg:flex-row flex-col p-2 lg:p-8 lg:gap-4 gap-8">
        {
            paymentCardItem.map((item,idx) => <PaymentCard {...item} key={idx}/>)

            }
    </section>
  )
}

export default Payment