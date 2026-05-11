import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company.d";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapitalization,
  },
  {
    label: "Current Ratio",
    render: (company: any) => company.currentRatioAnnual,
  },
  {
    label: "Return On Equity",
    render: (company: any) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: any) => company.cashPerShareTTM,
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
  const getCompanyKeyRatios = async () => {
    const value = await getKeyMetrics(ticker);

    if (typeof value !== "string") {
      setCompanyData(value?.data?.metric);
    }
  };

  getCompanyKeyRatios();
}, []);
  return (
    <>
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyProfile;