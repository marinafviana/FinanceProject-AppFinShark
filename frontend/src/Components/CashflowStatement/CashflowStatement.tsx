import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getCashFlow } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";

type Props = {};

const config = [
  {
    label: "Operating Cash Flow",
    render: (company: any) =>
      company.find(
        (item: any) =>
          item.concept ===
          "NetCashProvidedByUsedInOperatingActivitiesContinuingOperations"
      )?.value ?? "N/A",
  },
  {
    label: "Investing Cash Flow",
    render: (company: any) =>
      company.find(
        (item: any) =>
          item.concept ===
          "NetCashProvidedByUsedInInvestingActivitiesContinuingOperations"
      )?.value ?? "N/A",
  },
  {
    label: "Financing Cash Flow",
    render: (company: any) =>
      company.find(
        (item: any) =>
          item.concept ===
          "NetCashProvidedByUsedInFinancingActivitiesContinuingOperations"
      )?.value ?? "N/A",
  },
  {
    label: "Capital Expenditure",
    render: (company: any) =>
      company.find(
        (item: any) =>
          item.concept === "PaymentsToAcquirePropertyPlantAndEquipment"
      )?.value ?? "N/A",
  },
  {
    label: "Cash And Cash Equivalents",
    render: (company: any) =>
      company.find(
        (item: any) =>
          item.concept === "CashAndCashEquivalentsAtCarryingValue"
      )?.value ?? "N/A",
  },
];

const CashflowStatement = (props: Props) => {
  const ticker = useOutletContext<string | undefined>();
  const [cashflowData, setCashflow] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCashflow = async () => {
      if (!ticker) return;

      setIsLoading(true);

      const result = await getCashFlow(ticker);

      if (
        typeof result !== "string" &&
        result?.data?.data?.length > 0
      ) {
        setCashflow(result.data.data[0].report.cf);
      } else {
        setCashflow(null);
      }

      setIsLoading(false);
    };

    fetchCashflow();
  }, [ticker]);

  if (isLoading) return <Spinner />;

  if (!cashflowData) return <p className="text-gray-500 p-4">No cashflow data available.</p>;

  return <RatioList config={config} data={cashflowData} />;
};

export default CashflowStatement;