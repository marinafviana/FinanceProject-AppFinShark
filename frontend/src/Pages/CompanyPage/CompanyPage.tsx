import React, { useEffect, useState } from "react";
import { CompanyProfile } from "../../company.d";
import { useParams } from "react-router-dom";
import { getCompanyProfile, getQuote } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";
import CompFinder from "../../Components/CompFinder/CompFinder";

const CompanyPage = () => {
  const { ticker } = useParams();

  const [company, setCompany] = useState<CompanyProfile | null>(null);
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    const getProfileInit = async () => {

      const result = await getCompanyProfile(ticker!);

      if (typeof result !== "string" && result?.data) {
        setCompany(result.data);
      } else {
        setCompany(null);
      }

      const quoteResult = await getQuote(ticker!);

      if (typeof quoteResult !== "string") {
        setPrice(quoteResult.data.c);
      }
    };

    getProfileInit();

  }, [ticker]);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

          <Sidebar />

          <CompanyDashboard ticker={ticker!}>

            <Tile
              title="Company Name"
              subTitle={company.name || "N/A"}
            />

            <Tile
              title="Price"
              subTitle={price?.toString() || "N/A"}
            />

            <Tile
              title="Sector"
              subTitle={company.finnhubIndustry || "N/A"}
            />

            <Tile
              title="Market Cap"
              subTitle={company.marketCapitalization?.toString() || "N/A"}
            />

            <CompFinder ticker={company.ticker} />

          </CompanyDashboard>

        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;