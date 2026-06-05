import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company.d";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";
import { formatLargeNonMonetaryNumber, formatRatio } from "../../Helpers/NumberFormatting";
import StockComment from "../StockComment/StockComment";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) =>
      formatLargeNonMonetaryNumber(company.marketCapitalization),
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: any) => formatRatio(company.currentRatioAnnual),
    subTitle: "Measures the companies ability to pay short term debt obligations",
  },
  {
    label: "P/E Ratio",
    render: (company: any) => formatRatio(company.peTTM),
    subTitle: "Price to Earnings Ratio",
  },
  {
    label: "52 Week High",
    render: (company: any) => formatRatio(company["52WeekHigh"]),
    subTitle: "Highest stock price in the last 52 weeks",
  },
  {
    label: "52 Week Low",
    render: (company: any) => formatRatio(company["52WeekLow"]),
    subTitle: "Lowest stock price in the last 52 weeks",
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
  }, [ticker]);

  return (
    <>
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />
          <StockComment stockSymbol={ticker} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyProfile;