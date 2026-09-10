import { useState } from 'react';
import { BillingCycle } from '../../types/billingCycle';
import './BillingCycle.css';

type BillingCycleValue =
  (typeof BillingCycle)[keyof typeof BillingCycle];

interface BillingCycleProps {
  monthlyPrice: number;
  annualPrice: number;
  monthlyFee: number;
  savingsAmount: number;
}

export function BillingCycleComponent({
  monthlyPrice,
  annualPrice,
  monthlyFee,
  savingsAmount,
}: BillingCycleProps) {
  const [billingCycle, setBillingCycle] =
    useState<BillingCycleValue>(BillingCycle.Monthly);

  const handleBillingCycleChange = (
    billingCycle: BillingCycleValue
  ) => {
    setBillingCycle(billingCycle);
  };

  return (
    <section className="billing-cycle-section">
      <form>
        <h2 className="billing-cycle-title">
          Billing Cycle
        </h2>

        <div className="row billing-cycle-options-row">
          <div className="col-12 col-md-6">
            <div
              className={`billing-cycle-card ${
                billingCycle === BillingCycle.Monthly
                  ? 'selected'
                  : ''
              }`}
            >
              <div className="billing-cycle-card-header">
                <h3 className="billing-cycle-card-title">
                  Monthly
                </h3>

                <div className="billing-cycle-card-information">
                  <span className="billing-cycle-card-price">
                    ${monthlyPrice}
                  </span>

                  <input
                    type="radio"
                    className="billing-cycle-card-radio"
                    name="billingCycle"
                    data-testid="monthly-billing-cycle-option"
                    value={BillingCycle.Monthly}
                    checked={
                      billingCycle === BillingCycle.Monthly
                    }
                    onChange={() =>
                      handleBillingCycleChange(
                        BillingCycle.Monthly
                      )
                    }
                    aria-label="Select monthly billing cycle"
                  />
                </div>
              </div>

              <div className="billing-cycle-card-body">
                <p className="billing-cycle-card-description">
                  Monthly service fee: ${monthlyFee}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className={`billing-cycle-card ${
                billingCycle === BillingCycle.Annually
                  ? 'selected'
                  : ''
              }`}
            >
              <div className="billing-cycle-card-header">
                <h3 className="billing-cycle-card-title">
                  Annually
                </h3>

                <div className="billing-cycle-card-information">
                  <span className="billing-cycle-card-price">
                    ${annualPrice}
                  </span>

                  <input
                    type="radio"
                    className="billing-cycle-card-radio"
                    name="billingCycle"
                    data-testid="annual-billing-cycle-option"
                    value={BillingCycle.Annually}
                    checked={
                      billingCycle === BillingCycle.Annually
                    }
                    onChange={() =>
                      handleBillingCycleChange(
                        BillingCycle.Annually
                      )
                    }
                    aria-label="Select annual billing cycle"
                  />
                </div>
              </div>

              <div className="billing-cycle-card-body">
                <p className="billing-cycle-card-description">
                  Save ${savingsAmount} with annual billing
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}