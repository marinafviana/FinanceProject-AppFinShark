import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getBalanceSheet } from "../../api";
import RatioList from "../RatioList/RatioList";

type Props = {};

const config = [
  {
    label: <div className="font-bold">Total Assets</div>,
    render: (company: any) =>
      company.find((item: any) => item.concept === "Assets")?.value,
  },
  {
    label: "Current Assets",
    render: (company: any) =>
      company.find((item: any) => item.concept === "AssetsCurrent")?.value,
  },
  {
    label: "Total Cash",
    render: (company: any) =>
      company.find(
        (item: any) =>
          item.concept === "CashAndCashEquivalentsAtCarryingValue"
      )?.value,
  },
  {
    label: "Property & Equipment",
    render: (company: any) =>
      company.find(
        (item: any) => item.concept === "PropertyPlantAndEquipmentNet"
      )?.value,
  },
  {
    label: "Intangible Assets",
    render: (company: any) =>
      company.find((item: any) => item.concept === "FiniteLivedIntangibleAssetsNet")?.value,
  },
  {
    label: "Long Term Debt",
    render: (company: any) =>
      company.find((item: any) => item.concept === "LongTermDebt")?.value,
  },
  {
    label: <div className="font-bold">Total Liabilities</div>,
    render: (company: any) =>
      company.find((item: any) => item.concept === "Liabilities")?.value,
  },
  {
    label: "Current Liabilities",
    render: (company: any) =>
      company.find((item: any) => item.concept === "LiabilitiesCurrent")?.value,
  },
  {
    label: "Stakeholder's Equity",
    render: (company: any) =>
      company.find((item: any) => item.concept === "StockholdersEquity")?.value,
  },
  {
    label: "Retained Earnings",
    render: (company: any) =>
      company.find((item: any) => item.concept === "RetainedEarningsAccumulatedDeficit")?.value,
  },
];

const BalanceSheet = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [balanceSheet, setBalanceSheet] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const value = await getBalanceSheet(ticker);

      if (
        typeof value !== "string" &&
        value?.data?.data?.length > 0
      ) {
        setBalanceSheet(value.data.data[0].report.bs);
      } else {
        setBalanceSheet(null);
      }
    };

    getData();
  }, [ticker]);

  return (
    <>
      {balanceSheet ? (
        <RatioList config={config} data={balanceSheet} />
      ) : (
        <h1>Company not found!</h1>
      )}
    </>
  );
};

export default BalanceSheet;