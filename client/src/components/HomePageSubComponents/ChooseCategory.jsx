import { Card } from "flowbite-react"
import cardImage from "../../assets/card-image.webp";
const categoryList = [
    {
        id : 1,
        title: "Javascript",
    },
    {
        id : 1,
        title: "React js",
    },
    {
        id : 1,
        title: "Next js",
    },
    {
        id : 1,
        title: "AI//ML",
    },
    {
        id : 1,
        title: "Redux Tool",
    },
    {
        id : 1,
        title: "Boostrap",
    },
    {
        id : 1,
        title: "Javascript",
    },
    {
        id : 1,
        title: "Javascript",
    },
    {
        id : 1,
        title: "Javascript",
    },
]

const ChooseCategory = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6">
        <h2 className="text-2xl mb-4 font-bold">Choose Category</h2>
        <div className="flex items-center gap-4 overflow-auto">
            {categoryList.map((each) => (
                <div className="w-60 flex-shrink-0" key={each.id}>
                    <Card key={each.id} className="max-w-sm" imgSrc={cardImage} imgAlt={each.title}>
                        <h2 className="text-xl font-bold">{each.title}</h2>
                    </Card>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChooseCategory
