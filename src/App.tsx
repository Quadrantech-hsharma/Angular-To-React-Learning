import './App.css'
import { BillingCycleComponent } from './assignments/01-billing-cycle/components/BillingCycle/BillingCycle'
import { PetManagement } from './assignments/02-pet-crud/components/PetManagement'

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
