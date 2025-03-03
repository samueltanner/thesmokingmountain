import presentationDays from "@/data/presentation_days.json"
import PresentationThumbnail from "@/components/PresentationThumbnail"
import dayjs from "dayjs"
const SlidesListPage = () => {
  const today = dayjs("2025-05-02")
  const currentMonth = today.format("MM")
  const currentDay = today.format("DD")

  const availablePresentations = presentationDays.filter((presentation) => {
    const [month, day] = presentation.release_date.split("-")
    return month < currentMonth || (month === currentMonth && day <= currentDay)
  })
  return (
    <div className="pl-20 flex h-dvh w-full flex-col gap-16 overflow-x-hidden overflow-y-auto p-8">
      <div className="flex flex-wrap gap-8">
        {availablePresentations.map((presentation) => (
          <PresentationThumbnail
            key={presentation.release_date}
            presentation={presentation}
          />
        ))}
      </div>
    </div>
  )
}

export default SlidesListPage
