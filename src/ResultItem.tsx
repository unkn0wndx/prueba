
const ResultItem = ({ data }: { data: any }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image[2]["#text"]} alt="" />
    </div>
  )
}

export default ResultItem