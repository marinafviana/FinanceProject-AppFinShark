import React, { useEffect, useState } from "react";
import { CompanyTenK } from "../../company.d";
import { getTenK } from "../../api";
import TenKFinderItem from "./TenkFinderItem/TenKFinderItem";
import Spinner from "../Spinner/Spinner";

type Props = {
  ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {

  const [companyData, setCompanyData] = useState<CompanyTenK[]>([]);

  useEffect(() => {

    const getTenKData = async () => {

      const value = await getTenK(ticker);

      if (typeof value !== "string") {
        setCompanyData(value.data);
      }
    };

    getTenKData();

  }, [ticker]);

  return (
    <div
      className="flex flex-wrap gap-2 m-4"
      role="group"
    >

      {companyData.length > 0 ? (

        companyData.slice(0, 5).map((tenK, index) => {
          return (
            <TenKFinderItem
              key={index}
              tenK={tenK}
            />
          );
        })

      ) : (
        <Spinner />
      )}

    </div>
  );
};

export default TenKFinder;