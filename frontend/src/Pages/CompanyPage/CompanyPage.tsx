import React, { useEffect, useState } from "react";
import { CompanyProfile } from "../../company.d";
import { useParams } from "react-router-dom";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";

const CompanyPage = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile | null>(null);

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);

      if (typeof result !== "string" && result?.data) {
        setCompany(result.data); 
      } else {
        setCompany(null);
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
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={company.price?.toString() || "N/A"} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="DCF" subTitle={company.dcf?.toString() || "N/A"} />
            <p className="bg-white shadow rounded text-medium text-grey-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>

        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;