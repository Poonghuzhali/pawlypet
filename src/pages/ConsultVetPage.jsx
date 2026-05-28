import Header from '../components/Header'
import ConsultVetHero from '../components/consult-vet/ConsultVetHero'
import ConsultationBooking from '../components/consult-vet/ConsultationBooking'
import WellnessPlan from '../components/consult-vet/WellnessPlan'
import ResidentExperts from '../components/consult-vet/ResidentExperts'
import ConsultVetFooter from '../components/consult-vet/ConsultVetFooter'

export default function ConsultVetPage() {
  return (
    <>
      <Header compact />
      <main className="bg-[#E1D8D2]">
        <ConsultVetHero />
        <ConsultationBooking />
        <WellnessPlan />
        <ResidentExperts />
      </main>
      <ConsultVetFooter />
    </>
  )
}
