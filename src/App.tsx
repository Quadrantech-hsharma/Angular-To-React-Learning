import './App.css'
import { BillingCycleComponent } from './features/billing-cycle/components/BillingCycle/BillingCycle'
import { PetManagement } from './features/pet-management/components/PetManagement'

function App() {
  return (
    <>
      <BillingCycleComponent
        monthlyPrice={10}
        annualPrice={100}
        monthlyFee={5}
        savingsAmount={20}
      />
      <PetManagement />
    </>
  )
}

export default App
