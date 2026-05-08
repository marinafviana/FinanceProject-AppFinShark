import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyCashFlow } from "../../company.d";
import { getCashFlow } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Property/Machinery Cashflow",
    render: (company: CompanyCashFlow) =>
      company.investmentsInPropertyPlantAndEquipment,
  },
  {
    label: "Other Investing Cashflow",
    render: (company: CompanyCashFlow) => company.otherInvestingActivites,
  },
  {
    label: "Debt Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashflowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashflowData, setCashflow] = useState<CompanyCashFlow[]>();
    useEffect(() => {
        const fetchCashflow = async () => {
            const result = await getCashFlow(ticker!);
            setCashflow(result!.data);
        };

        fetchCashflow();
    }, []);
  return <>
    { cashflowData ? (
        <Table config={config} data={cashflowData} />
    ) : (
      <Spinner />
    )};
    </>;
  
}

export default CashflowStatement