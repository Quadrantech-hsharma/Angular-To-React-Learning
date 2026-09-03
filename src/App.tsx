import './App.css'
import { BillingCycleComponent } from './components/BillingCycle/BillingCycle'

function App() {

  return (
    <>
    <BillingCycleComponent
      monthlyPrice={10}
      annualPrice={100}
      monthlyFee={5}
      savingsAmount={20}
    />
    </>
  )
}

export default App
