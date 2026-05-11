import React, { useEffect, useState } from "react";
import { getCompData } from "../../api";
import CompFinderItem from "./CompFinderItem/CompFinderItem";

type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {

  const [companyData, setCompanyData] = useState<string[]>([]);

  useEffect(() => {

    const getComps = async () => {

      const value = await getCompData(ticker);  

      if (typeof value !== "string") {
        setCompanyData(value.data);
      }
    };

    getComps();

  }, [ticker]);

  return (
    <div className="flex flex-wrap gap-2 m-4" role="group">

      {companyData.map((ticker) => {
        return <CompFinderItem key={ticker} ticker={ticker} />;
      })}

    </div>
  );
};

export default CompFinder;