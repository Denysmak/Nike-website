import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div>
        <div className="xl:mt-8 lg:mt-6 flex justify-start mt-4 gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">4.5</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palaquin lg:text-xl xl:text-2xl">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl lg:text-xl xl:text-2xl leading-normal">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard