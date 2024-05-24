import PaymentCard from "@/components/shared/PaymentCard"
import { paymentCardItem } from "@/constants"


const Payment = () => {
  return (
    <section className="flex justify-center md:flex-row flex-col p-2 sm:p-8 gap-8">
        {
            paymentCardItem.map((item,idx) => <PaymentCard {...item} key={idx}/>)

            }
    </section>
  )
}

export default Payment