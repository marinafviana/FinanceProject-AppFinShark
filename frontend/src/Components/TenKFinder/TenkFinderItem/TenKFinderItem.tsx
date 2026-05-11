import React from "react";
import { CompanyTenK } from "../../../company.d";

type Props = {
  tenK: CompanyTenK;
};

const TenKFinderItem = ({ tenK }: Props) => {

  const filingDate = tenK.filedDate
    ? new Date(tenK.filedDate).getFullYear()
    : "N/A";

  const secLink = `https://www.sec.gov/edgar/search/#/q=${tenK.accessNumber}`;

  return (
    <a
      href={secLink}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-lightGreen border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700"
    >
      {tenK.form} - {tenK.symbol} - {filingDate}
    </a>
  );
};

export default TenKFinderItem;