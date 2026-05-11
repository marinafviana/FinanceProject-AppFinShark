import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../Table/Table";
import { CompanyIncomeStatement } from "../../company.d";
import { getIncomeStatement } from "../../api";
import Spinner from "../Spinner/Spinner";
import { formatLargeMonetaryNumber, formatRatio } from "../../Helpers/NumberFormatting";

type Props = {}

const configs = [
  {
    label: "Date",
    render: (company: any) => company.endDate,
  },
  {
    label: "Revenue",
    render: (company: any) =>
      formatLargeMonetaryNumber(company.revenue),
  },
  {
    label: "Cost Of Revenue",
    render: (company: any) =>
      formatLargeMonetaryNumber(company.costOfRevenue),
  },
  {
    label: "Operating Income",
    render: (company: any) =>
      formatLargeMonetaryNumber(company.operatingIncome),
  },
  {
    label: "Net Income",
    render: (company: any) =>
      formatLargeMonetaryNumber(company.netIncome),
  },
  {
    label: "Gross Profit",
    render: (company: any) =>
      formatLargeMonetaryNumber(company.grossProfit),
  },
  {
    label: "EPS",
    render: (company: any) =>
      formatRatio(company.eps),
  },
  {
    label: "Diluted EPS",
    render: (company: any) =>
      formatRatio(company.epsDiluted),
  },
];

const IncomeStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [incomeStatement, setIncomeStatement] =
    useState<CompanyIncomeStatement[]>();
  useEffect(() => {
    const getIncomeStatementFetch = async () => {
      const result = await getIncomeStatement(ticker!);
      setIncomeStatement(result!.data);
    };
    getIncomeStatementFetch();
  }, []);

    return (
    <>
      {incomeStatement ? (
        <Table config={configs} data={incomeStatement} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default IncomeStatement;