import { IGroup } from "../utils/utility"

const CardItem = ({tanggal, data}: IGroup) => {
  return (
    <div className="border rounded-sm shadow-md p-3 flex flex-col">
      <p>{tanggal}</p>
      {data.map((item) => item.jam)}
    </div>
  )
}

export default CardItem